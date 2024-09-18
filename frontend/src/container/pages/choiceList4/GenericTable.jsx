import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomPopup from '../custom-popup/custom-popup-filter';
import axiosInstance from '../../../utils/axiosInstance'; // Assuming axiosInstance is your API utility

const GenericTable = ({
  data,
  columns,
  filtersConfig,
  headerTitle,
  filters,
  setFilters,
  page,
  setPage,
  totalPages,
  filterOptions,
  loading,
  filterLoading,
  fetchData,
  pageSize,
  setPageSize,
  disabled,
  showSubscriptionPopup,
  setShowSubscriptionPopup
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [choiceList, setChoiceList] = useState(data); // Store the list of items that can be dragged and dropped

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const resultsSection = document.querySelector('.results-section');
    if (showFilters) {
      resultsSection.style.width = 'calc(100vw - 290px)';
    } else {
      resultsSection.style.width = '100vw';
    }
  }, [showFilters]);

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  const getFilterParamName = (filterKey) => {
    const filterMapping = {
      state: 'state',
      institute: 'collegeName',
      // Add more filter mappings as necessary
    };
    return filterMapping[filterKey] || filterKey;
  };

  const applyFilters = () => {
    let filtered = data;
    Object.keys(filters).forEach(filterKey => {
      const filterParamName = getFilterParamName(filterKey);
      const filterValue = filters[filterKey];
      if (filterValue && filterValue.length > 0) {
        filtered = filtered.filter(item => {
          const itemValue = item[filterParamName];
          return Array.isArray(filterValue) ? filterValue.includes(itemValue) : itemValue === filterValue;
        });
      }
    });
    setFilteredData(filtered);
  };

  // Drag-and-Drop Logic
  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const draggedItemId = choiceList[sourceIndex].uuid;
    const targetItemId = choiceList[destinationIndex].uuid;
    const direction = destinationIndex > sourceIndex ? 'down' : 'up'; // Determine drag direction

    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName(); // This function should return exam name
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/updateOrder`, {
          draggedItemId,
          targetItemId,
          direction
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      // Optionally, re-fetch or update the list in the UI
      fetchData();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    setHiddenColumns,
    state: { pageIndex },
    page: currentPage,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: page - 1 },
      manualPagination: true,
      pageCount: totalPages,
    },
    useFilters,
    useSortBy,
    usePagination,
    useColumnOrder
  );

  useEffect(() => {
    fetchChoiceList(); // Make sure this fetches the data correctly
  }, []);
  
  const fetchChoiceList = async () => {
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName(); // Ensure this works
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setChoiceList(response.data.wishlist.items); // Ensure data is stored here
      }
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
  };

  useEffect(() => {
    if (gotoPage) {
      gotoPage(page - 1);
    }
  }, [page, gotoPage]);

  const handleRowClick = (row) => {
    setSelectedRowData(row.original);
    setShowRowModal(true);
  };
  

  useEffect(() => {
    console.log("Choice List Data:", choiceList);
  }, [choiceList]);
  
  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let number = 0; number < pageCount; number++) {
      if (number === pageIndex || number === pageIndex - 1 || number === pageIndex + 1 || number === 0 || number === pageCount - 1) {
        paginationItems.push(
          <Pagination.Item key={number} active={number === pageIndex} onClick={() => setPage(number + 1)}>
            {number + 1}
          </Pagination.Item>
        );
      } else if (number === pageIndex - 2 || number === pageIndex + 2) {
        paginationItems.push(<Pagination.Ellipsis key={`ellipsis-${number}`} />);
      }
    }
    return paginationItems;
  };

  return (
    <div className="allotments-container">
      <FilterSection
        disabled={disabled}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
        data={data}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
      />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button className={`show-filters-btn ${showFilters ? "hidden" : ""}`} onClick={toggleFilters} id='view-btn'>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <div className="table-container">
  <div>
    <span className="allotments-header">{headerTitle}</span>
    <Button variant="primary" className="column-toggle-btn" onClick={() => setShowColumnModal(true)} disabled={disabled}>
      View/Hide Columns
    </Button>
  </div>
  <div className="choice-header-box">
    <span className="choicelist-header">Wishlist</span>
  </div>
  <div className="choice-list-table-wrapper">
    <Table striped bordered hover className="choice-list-table" responsive="sm">
      <thead>
        <tr>
          <th>Sl. No.</th>
          <th>Institute</th>
          <th>Course</th>
          <th>Quota</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        {choiceList && choiceList.length > 0 ? (
          choiceList.map((item, index) => (
            <tr key={item.uuid}>
              <td>{index + 1}</td>
              <td>{item.allotment?.allottedInstitute}</td> {/* Ensure proper access to nested objects */}
              <td>{item.allotment?.course}</td>
              <td>{item.allotment?.quota}</td>
              <td>{item.order}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No data available</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
</div>
        {/* <div className="table-container">
          <div>
            <span className='allotments-header'>{headerTitle}</span>
            <Button variant="primary" className="column-toggle-btn" onClick={() => setShowColumnModal(true)}
            disabled={disabled}>
              View/Hide Columns
            </Button>
          </div>
          <div className="table-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="tableRows">
                {(provided) => (
                  <tbody
                    {...getTableBodyProps()}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {currentPage.map((row, index) => {
                      prepareRow(row);
                      return (
                        <Draggable
                          key={row.original.uuid}
                          draggableId={row.original.uuid}
                          index={index}
                        >
                          {(provided) => (
                            <tr
                              {...row.getRowProps()}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                  {cell.render('Cell')}
                                </td>
                              ))}
                            </tr>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </DragDropContext>
            <CustomPopup 
              show={showSubscriptionPopup}
              onHide={() => setShowSubscriptionPopup(false)}
              title="Subscription Required" 
              message="Access to these features requires a subscription. Please complete your payment to continue enjoying our full range of services."
              subscriptionStatus={false}
            />
          </div>
          <div className="pagination-container">
            <Pagination className="mb-0" disabled={disabled}>
              <Pagination.First onClick={() => setPage(1)} disabled={!canPreviousPage || showSubscriptionPopup} />
              <Pagination.Prev onClick={() => setPage(page - 1)} disabled={!canPreviousPage || showSubscriptionPopup} />
              {renderPaginationItems()}
              <Pagination.Next onClick={() => setPage(page + 1)} disabled={!canNextPage || showSubscriptionPopup} />
              <Pagination.Last onClick={() => setPage(pageCount)} disabled={!canNextPage || showSubscriptionPopup} />
            </Pagination>
          </div>
        </div> */}
      </div>
      <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)}>
        <Modal.Header closeButton style={{ backgroundColor: '#223D6E' }}>
          <Modal.Title style={{ color: 'white' }}>View/Hide Columns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allColumns.map((column) => (
            <Form.Check
              key={column.id}
              type="checkbox"
              label={column.render('Header')}
              checked={column.isVisible}
              onChange={() => handleColumnToggle(column)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowColumnModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GenericTable;