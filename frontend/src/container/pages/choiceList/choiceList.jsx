import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { FaTrash, FaArrowRight, FaDownload } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import FilterSection from './FilterSection';
import './ChoiceList.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const ChoiceList = () => {
  const [fullChoiceList, setFullChoiceList] = useState([]); // Full list of items
  const [choiceList, setChoiceList] = useState([]); // Filtered list for display
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [showFilters, setShowFilters] = useState(false);
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
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { examName, ...filters },
        });
        const fullList = response.data.wishlist.items;
        setFullChoiceList(fullList); // Store full list
        setChoiceList(fullList.filter(applyFilters)); // Filter list for display
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
    setLoading(false);
  }, [filters, generateExamName]);

  const fetchFilterOptions = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist/filters`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { examName },
        });
        setFilterOptions(response.data);
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  }, [generateExamName]);

  useEffect(() => {
    fetchChoiceList();
  }, [fetchChoiceList]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  // Apply filters to the full list
  const applyFilters = useCallback(() => {
    if (!filters || Object.keys(filters).length === 0) {
      return fullChoiceList; // No filters applied, return full list
    }
    return fullChoiceList.filter(item => {
      const matchInstitute = filters.institute ? item.allotment.allottedInstitute === filters.institute : true;
      const matchCourse = filters.course ? item.allotment.course === filters.course : true;
      const matchCategory = filters.category ? item.allotment.allottedCategory === filters.category : true;
      return matchInstitute && matchCourse && matchCategory;
    });
  }, [fullChoiceList, filters]);

  // Handle drag-and-drop functionality
  const onDragEnd = async (result) => {
    if (!result.destination) return;
  
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
  
    const draggedItemId = choiceList[sourceIndex].uuid;
    const targetItemId = choiceList[destinationIndex].uuid;
    const direction = destinationIndex > sourceIndex ? 'down' : 'up'; // Determine drag direction
  
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/updateOrder`, {
          draggedItemId,
          targetItemId,
          direction
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchChoiceList(); // Refresh the list after reordering
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
  // Handle delete functionality
  const handleDelete = (uuid) => {
    setDeleteItemId(uuid);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/remove`, {
          uuid: deleteItemId,
          examName,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchChoiceList(); // Refresh the list after deletion
        setShowDeleteModal(false);
        setDeleteItemId(null);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleFilterChange = (filterName, newValues) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: newValues,
    }));
    setChoiceList(fullChoiceList.filter(applyFilters)); // Reapply filters on the full list
  };

  const clearAllFilters = () => {
    setFilters({});
    setChoiceList(fullChoiceList); // Reset the filtered list to the full list
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Print the current choice list to PDF
  const printToPDF = async () => {
    try {
      // Get user data for the PDF (you can fetch from localStorage or an API)
      const token = localStorage.getItem('token'); // Assuming you have the token
      const userResponse = await axiosInstance.get(`${apiUrl}/profile`, { // Example endpoint to fetch user details
        headers: { Authorization: `Bearer ${token}` }
      });
      const user = userResponse.data;
  
      // Get the current date and time with AM/PM format
      const currentDateTime = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });

      const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).replace(/ /g, '_');
  
      // Initialize jsPDF
      const doc = new jsPDF();
  
      // Add "Rank and Seats" company name and support email at the top of the PDF
      doc.setFontSize(16);
      doc.text('Rank and Seats', 105, 14, null, null, 'center'); // Company name centered at the top
      doc.setFontSize(10);
      doc.text('support@rankandseats.com', 105, 20, null, null, 'center'); // Support email centered below
  
      // Add user details
      doc.setFontSize(12);
      doc.text(`Name: ${user.name}`, 14, 30); // User name
      doc.text(`Email: ${user.email}`, 14, 36); // User email (or other data)
      doc.text(`Generated on: ${currentDateTime}`, 14, 42); // Date and time with AM/PM
  
      // Add a title for the choice list
      doc.setFontSize(16);
      doc.text('Choice List', 105, 54, null, null, 'center'); // Centered title
  
      // Create the table of choices
      doc.autoTable({
        startY: 60, // Start after the header details
        head: [['Order','Quota', 'Institute', 'Course', 'Category']],
        body: choiceList.map((item, index) => [
          fullChoiceList.findIndex(fullItem => fullItem.allotmentId === item.allotmentId) + 1,
          item.allotment.allottedQuota,
          item.allotment.allottedInstitute,
          item.allotment.course,
          item.allotment.allottedCategory,
        ]),
      });
  
      // Save the PDF with a filename
      const fileName = `ChoiceList_${user.name}_${formattedDate}.pdf`;
      doc.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
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
      <div className={`choice-list-results ${showFilters ? '' : 'full-width'}`}>
        <button className={`show-filters-btn ${showFilters ? 'hidden' : ''}`} onClick={toggleFilters}>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="choices">
            {(provided) => (
              <div>
              <div className="choice-list-table-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                <div className='choice-header-box'>
              <span className='choicelist-header'>{headerTitle}</span>
              <button className="print-pdf-btn" onClick={printToPDF}>
              <FaDownload />
            </button>
            </div>
                <Table striped bordered hover className="choice-list-table">
                  <thead>
                    <tr>
                    <th>Sl. No.</th>
                      <th>Order</th> {/* Displaying the order from the backend */}
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
                             <td>{item.order}</td>
                            <td>{item.allotment.allottedInstitute}</td>
                            <td>{item.allotment.course}</td>
                            <td>{item.allotment.allottedCategory}</td>
                            <td>
                              <Button variant="outline-danger" onClick={() => handleDelete(item.uuid)}>
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

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChoiceList;