import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ChoiceList.scss'; // Import the new styles

const ChoiceList = ({ username }) => {
  const [choiceList, setChoiceList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('ChoiceList mounted');
    fetchChoiceList();
  }, [username]);

  const fetchChoiceList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/wishlist`, { params: { username } });
      console.log('API Response:', response.data); // Add console log
      if (response.data.wishlist && response.data.wishlist.items) {
        setChoiceList(response.data.wishlist.items);
      } else {
        setChoiceList([]);
      }
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
    setLoading(false);
  };

  const removeFromChoiceList = async (allotmentId) => {
    try {
      await axios.post('http://localhost:5001/api/wishlist/remove', { username, allotmentId });
      fetchChoiceList();
    } catch (error) {
      console.error('Error removing from choice list:', error);
    }
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(choiceList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setChoiceList(items);

    try {
      await axios.post('http://localhost:5001/api/wishlist/updateOrder', {
        username,
        updatedOrder: items.map(item => item.allotmentId)
      });
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (choiceList.length === 0) {
    return <div>No items in choice list.</div>;
  }

  return (
    <div className="choice-list-container">
      <h1>Choice List</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="choices">
          {(provided) => (
            <Table striped bordered hover {...provided.droppableProps} ref={provided.innerRef} className="table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Institute</th>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Remove</th> {/* Changed from Actions to Remove */}
                </tr>
              </thead>
              <tbody>
                {choiceList.map((item, index) => (
                  <Draggable key={item.allotmentId} draggableId={item.allotmentId} index={index}>
                    {(provided) => (
                      <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <td>{index + 1}</td>
                        <td>{item.allotment.allottedInstitute}</td>
                        <td>{item.allotment.course}</td>
                        <td>{item.allotment.allottedCategory}</td>
                        <td>
                          <Button variant="danger" onClick={() => removeFromChoiceList(item.allotmentId)}>
                            <FaHeart />
                          </Button>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </Table>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ChoiceList;
