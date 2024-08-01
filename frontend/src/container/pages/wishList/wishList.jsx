import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Wishlist = ({ username }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/wishlist?username=${username}`);
      setWishlist(response.data.wishlist.items);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
    setLoading(false);
  };

  const removeFromWishlist = async (allotmentId) => {
    try {
      await axios.post('/wishlist/remove', { username, allotmentId });
      fetchWishlist();
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedWishlist = reorder(
      wishlist,
      result.source.index,
      result.destination.index
    );

    setWishlist(reorderedWishlist);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="wishlist">
          {(provided) => (
            <Table striped bordered hover {...provided.droppableProps} ref={provided.innerRef}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Institute</th>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, index) => (
                  <Draggable key={item.allotment._id} draggableId={item.allotment._id} index={index}>
                    {(provided) => (
                      <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <td>{index + 1}</td>
                        <td>{item.allotment.allottedInstitute}</td>
                        <td>{item.allotment.course}</td>
                        <td>{item.allotment.allottedCategory}</td>
                        <td>
                          <Button variant="danger" onClick={() => removeFromWishlist(item.allotment._id)}>
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

export default Wishlist;
