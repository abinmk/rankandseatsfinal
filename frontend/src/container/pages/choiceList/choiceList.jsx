import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterSection from './FilterSection';
import './ChoiceList.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const ChoiceList = ({ username }) => {
  const [choiceList, setChoiceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const headerTitle = "ChoiceList";

  useEffect(() => {
    fetchChoiceList();
    fetchFilterOptions();
  }, [username, currentPage, filters]);

  const fetchChoiceList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/wishlist`, { params: { username, page: currentPage, ...filters } });
      setChoiceList(response.data.wishlist.items);
      setTotalPages(response.data.totalPages); // Ensure your backend returns totalPages
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
    setLoading(false);
  };

  const fetchFilterOptions = async () => {
    try {
      const response = await axios.get(`${apiUrl}/wishlist/filters`, { params: { username } });
      setFilterOptions(response.data);
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  };

  const removeFromChoiceList = async (allotmentId) => {
    try {
      await axios.post(`${apiUrl}/wishlist/remove`, { username, allotmentId });
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
      await axios.post(`${apiUrl}/wishlist/updateOrder`, {
        username,
        updatedOrder: items.map(item => item.allotmentId)
      });
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleFilterChange = (filterName, values) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: values
    }));
    fetchChoiceList();
  };

  const clearAllFilters = () => {
    setFilters({});
    fetchChoiceList();
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="choice-list-container">
      <FilterSection
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={handleFilterChange}
        filterOptions={filterOptions}
        clearAllFilters={clearAllFilters}
      />
      <div className={`choice-list-results ${showFilters ? '' : 'full-width'}`}>
        <button className={`show-filters-btn ${showFilters ? 'hidden' : ''}`} onClick={toggleFilters}>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : choiceList.length === 0 ? (
          <div>No items in choice list.</div>
        ) : (
          <>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="choices">
                {(provided) => (
                  <div className="choice-list-table-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                    <div>
                      <span className='choice-header'>{headerTitle}</span>
                    </div>
                    <div className="table-wrapper">
                      <Table striped bordered hover className="choice-list-table">
                        <thead>
                          <tr>
                            <th>Sl. No.</th>
                            <th>Institute</th>
                            <th>Course</th>
                            <th>Category</th>
                            <th>Remove</th>
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
                                      <FaTrash />
                                    </Button>
                                  </td>
                                </tr>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        )}
      </div>
    </div>
  );
};

export default ChoiceList;
