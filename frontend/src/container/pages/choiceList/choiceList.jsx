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

  const watermarkBase64 = 'data:image/png;base64,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';

  // Print the current choice list to PDF
  const printToPDF = async () => {
    try {
      // Get user data for the PDF
      const token = localStorage.getItem('token');
      const userResponse = await axiosInstance.get(`${apiUrl}/profile`, {
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
  
      const formattedExam = user.selectedExams[0].exam.replace(/_/g, ' ').toUpperCase();
      const formattedCounselingType = user.selectedExams[0].counselingType.replace(/_/g, ' ').toUpperCase();
  
      const doc = new jsPDF();
  
      // Add logo and header
      doc.addImage(watermarkBase64, 'PNG', 80, 10, 50, 10, undefined, 'FAST'); // Align logo
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text('support@rankandseats.com', 105, 25, null, null, 'center');
  
      // Define total number of choices for the first page
      const totalChoices = choiceList.length;
  
      // Define a function to add the header and footer on each page
      const addHeaderAndFooter = (pageNumber, totalPages) => {
        // Add the header with more spacing
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
  
        // Add footer with centered page number
        doc.setFontSize(10);
        doc.text(`Page ${pageNumber} of ${totalPages}`, 105, 290, null, null, 'center');
      };
  
      // Add watermark with lower opacity for every page
      const addWatermark = () => {
        const totalPages = doc.internal.getNumberOfPages();
        doc.setFontSize(60);
        doc.setTextColor(200, 200, 200);
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.text('Rank and Seats', 105, 220, { align: 'center', angle: 0 });
        }
      };
  
      // Add user details, total count of choices, and generated date (only on the first page)
      doc.setFontSize(12);
      doc.text(`Name: ${user.name}`, 14, 35); // Added padding to align the text better
      doc.text(`Email: ${user.email}`, 14, 42);
      doc.text(`Generated on: ${currentDateTime}`, 14, 50);
      doc.text(`Total Choices: ${totalChoices}`, 14, 58); // Display the total number of choices
  
      // Add the title for the choice list with more spacing
      doc.setFontSize(16);
      doc.text(`CHOICE LIST: ${formattedExam} - ${formattedCounselingType}`, 105, 68, null, null, 'center');

      // Create the table of choices
      doc.autoTable({
        startY: 75, // Increased padding before the table starts
        margin: { top: 10, bottom: 10 }, // Padding around the table
        headStyles: {
          fillColor: [41, 128, 185], // Blue color for the header
          textColor: [255, 255, 255], // White text color for the header
          fontSize: 11,
          halign: 'center', // Center align the header text
          fontStyle: 'bold'
        },
        bodyStyles: {
          fontSize: 10,
          halign: 'center', // Center align the table body text
          valign: 'middle'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245] // Light grey for alternate rows
        },
        head: [['Sl No', 'Choice No.', 'State', 'Institute', 'Course', 'Quota']],
        body: choiceList.map((item, index) => [
          fullChoiceList.findIndex(fullItem => fullItem.allotmentId === item.allotmentId) + 1,
          item.allotment.order,
          item.allotment.state,
          item.allotment.allottedInstitute,
          item.allotment.course,
          item.allotment.allottedQuota,
        ]),
        didDrawPage: function (data) {
          // Get the current page number
          const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;
          const totalPages = doc.internal.getNumberOfPages();
  
          // Add header and footer on every page
          addHeaderAndFooter(pageNumber, totalPages);
        },
      });
  
      // Add the watermark after the table is drawn
      
  
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
                      <th>State</th>
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
                             <td>{item.allotment.state}</td>
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
          <Modal.Title  style={{ color: 'white' }}>Confirm Delete</Modal.Title>
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