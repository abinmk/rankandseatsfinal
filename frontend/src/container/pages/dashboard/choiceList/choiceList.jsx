import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import axiosInstance from '../../../../utils/axiosInstance';
import { Table, Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterSection from './FilterSection';
import './ChoiceList.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const ChoiceList = () => {
  const [choiceList, setChoiceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const headerTitle = "ChoiceList";

  const generateExamName = useCallback(async () => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const response = await axiosInstance.get(`${apiUrl}/users/exams`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;

    if (user && user.selectedExams && user.selectedExams.length > 0) {
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      return `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
    }
    return null;
  }, []);

  const fetchChoiceList = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const examName = await generateExamName();
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { examName, ...filters }, // Pass the filters along with the exam name
        });
        setChoiceList(response.data.wishlist.items);
        setTotalPages(response.data.totalPages);
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
    setLoading(false);
  }, [apiUrl, generateExamName, filters]); // Add `filters` as a dependency
  

  const fetchFilterOptions = useCallback(async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const examName = await generateExamName();
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist/filters`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { examName }, // Pass the generated exam name
        });
        setFilterOptions(response.data);
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  }, [apiUrl, generateExamName]);

  useEffect(() => {
    fetchChoiceList();
  }, [fetchChoiceList]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  const handleDelete = (allotmentId) => {
    setDeleteItemId(allotmentId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/remove`, {
          allotmentId: deleteItemId,
          examName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchChoiceList();
        setShowDeleteModal(false);
        setDeleteItemId(null);
      } else {
        console.error('No exam name found.');
      }
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
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/updateOrder`, {
          updatedOrder: items.map(item => item.allotmentId),
          examName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleFilterChange = (filterName, newValues) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: newValues
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
    <div className={`choice-list-container ${showDeleteModal ? 'modal-open' : ''}`}>
      <FilterSection
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={handleFilterChange}
        filterOptions={filterOptions}
        clearAllFilters={clearAllFilters}
      />
      <div className={`choice-list-results ${showFilters ? '' : 'full-width'} ${showDeleteModal ? 'modal-open' : ''}`}>
        <button
          className={`show-filters-btn ${showFilters ? 'hidden' : ''}`}
          onClick={toggleFilters}
        >
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="choices">
            {(provided) => (
              <div
                className="choice-list-table-wrapper"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className='name-header'>
                  <span className="choice-header">{headerTitle}</span>
                </div>
                <div className="table-wrapper">
                  <Table
                    striped
                    bordered
                    hover
                    className="choice-list-table"
                  >
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
                        <Draggable
                          key={item.allotmentId}
                          draggableId={item.allotmentId}
                          index={index}
                        >
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <td>{index + 1}</td>
                              <td>{item.allotment.allottedInstitute}</td>
                              <td>{item.allotment.course}</td>
                              <td>{item.allotment.allottedCategory}</td>
                              <td>
                                <Button
                                  variant="outline-danger"
                                  className="delete-button"
                                  onClick={() =>
                                    handleDelete(item.allotmentId)
                                  }
                                >
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
      </div>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChoiceList;
