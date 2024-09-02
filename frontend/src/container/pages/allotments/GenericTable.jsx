import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Allotments.scss';
import { FaHeart } from 'react-icons/fa';
import CustomPopup from '../custom-popup/custom-popup-filter';

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
  setTotalPages,
  filterOptions,
  loading,
  filterLoading,
  rankRange,
  fetchData,
  pageSize,
  setPageSize,
  wishlist,
  addToWishlist,
  removeFromWishlist,
  disabled,
  showSubscriptionPopup,
  setShowSubscriptionPopup
  
  
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [collegeLinkClicked, setCollegeLinkClicked] = useState(false); // Track college link clicks

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
    fetchData(page, pageSize, buildFilterParams());
  }, [filters, page, pageSize]);

  const getFilterParamName = (filterKey) => {
    const filterMapping = {
      quota: 'allottedQuota',
      institute: 'allottedInstitute',
      course: 'course',
      category: 'allottedCategory',
      candidateCategories: 'candidateCategory',
      examNames: 'examName',
      year: 'year',
      round: 'round',
      state: 'state',
      instituteType: 'instituteType',
      university: 'universityName',
      yearsOfEstablishment: 'yearOfEstablishment',
      totalHospitalBeds: 'totalHospitalBeds',
      locationMapLinks: 'locationMapLink',
      nearestRailwayStations: 'nearestRailwayStation',
      distancesFromRailwayStation: 'distanceFromRailwayStation',
      nearestAirports: 'nearestAirport',
      distancesFromAirport: 'distanceFromAirport',
      courseType: 'courseType',
      degreeType: 'degreeType',
      feeAmounts: 'courseFee',
      nriFees: 'nriFee',
      stipendYear1: 'stipendYear1',
      stipendYear2: 'stipendYear2',
      stipendYear3: 'stipendYear3',
      bondYears: 'bondYear',
      bondPenalties: 'bondPenality',
      rank: 'rank',
    };
    
    return filterMapping[filterKey] || filterKey;
  };

  const buildFilterParams = () => {
    const params = {};
    Object.keys(filters).forEach((filterKey) => {
      const filterValue = filters[filterKey];
      if (typeof filterValue === 'object' && filterValue !== null) {
        params[`${filterKey}Min`] = filterValue.min;
        params[`${filterKey}Max`] = filterValue.max;
      } else {
        params[filterKey] = filterValue;
      }
    });
    return params;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
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
      data,
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
    if (gotoPage) {
      gotoPage(page - 1);
    }
  }, [page, gotoPage]);

  const handleRowClick = (row) => {
    if (!collegeLinkClicked) {
      setSelectedRowData(row.original);
      setShowRowModal(true);
    }
    setCollegeLinkClicked(false); // Reset after row click handling
  };

  const handleCollegeClick = (row) => {
    setCollegeLinkClicked(true);
    setSelectedRowData(row.original); // Set the clicked row data
    setShowRowModal(false); // Open the modal for the college

  };

  const handleModalClose = () => {
    setShowRowModal(false);
  };

  const clearAllFilters = () => {
    setFilters({});
  };
  

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
        showSubscriptionPopup={showSubscriptionPopup}
        disabled={disabled}
        showFilters={showFilters && !showRowModal} // Hide filters when modal is open
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
        clearAllFilters={clearAllFilters}
      />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button className={`show-filters-btn ${showFilters ? "hidden" : ""}`} onClick={toggleFilters}>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <div className="table-container">
          <div>
            <span className='allotments-header'>{headerTitle}</span>
            <Button variant="primary" className="column-toggle-btn" disabled={disabled} onClick={() => setShowColumnModal(true)}>
              View/Hide Columns
            </Button>
          </div>
          <div className="table-wrapper">
            <Table {...getTableProps()} className="tableCustom" disabled={disabled}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    <th>
                      <FaHeart
                      disabled={disabled}
                        onClick={() => toggleAllWishlist()}
                        style={{ color: wishlist.length === data.length ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
                      />
                    </th>
                    {headerGroup.headers.map((column) => {
                      const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                      return (
                        <th key={key} {...rest}>
                          {column.render('Header')}
                          <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {currentPage.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={row.id}
                      {...row.getRowProps()}
                      onClick={() => handleRowClick(row)}
                    >
                      <td>
                        <FaHeart
                          onClick={(e) => {
                            e.stopPropagation();
                            if (wishlist.some(item => item.allotmentId === row.original._id)) {
                              removeFromWishlist(row.original._id);
                            } else {
                              addToWishlist(row.original.examName, row.original); // Pass both parameters to the function
                            }
                          }}
                          style={{ color: wishlist.some(item => item.allotmentId === row.original._id) ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
                        />
                      </td>
                      {row.cells.map((cell) => {
                        const { key, ...rest } = cell.getCellProps();
                        return (
                          <td key={key} {...rest}>
                            {cell.column.id === 'allottedInstitute' ? (
                              <span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent row click event
                                  handleCollegeClick(row);
                                }}
                              >
                                {cell.render('Cell')}
                              </span>
                            ) : (
                              cell.render('Cell')
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <CustomPopup 
        show={showSubscriptionPopup}
        onHide={() => setShowSubscriptionPopup(false)}
        title="Subscription Required" 
        message="Access to these features requires a subscription. Please complete your payment to continue enjoying our full range of services."
        subscriptionStatus={false} // Pass subscription status
      />
          </div>
          <div className="pagination-container">
            <div className='row-controls'>
              <div>
                <Form.Group controlId="rowsPerPage" className="d-flex align-items-center pagination-info">
                  <Form.Label className="me-2 mb-0">Rows:</Form.Label>
                  <Form.Control
                    disabled={disabled}
                    as="select"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="me-3"
                    style={{ width: 'fit-content', height:'40px' }}
                  >
                    {[10, 20, 30, 50, 100].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                </div>
                <div>
                <Form.Group controlId="gotoPage" className="d-flex align-items-center pagination-info">
                  <Form.Label className="me-2 mb-0">Page:</Form.Label>
                  <Form.Control
                    disabled={disabled}
                    type="number"
                    min="1"
                    max={pageCount}
                    value={pageIndex + 1}
                    onChange={(e) => setPage(Number(e.target.value))}
                    className="me-2"
                    style={{ width: 'fit-content', height:'40px' }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className={showSubscriptionPopup?"pagination-hidden":"pagination-controls"}>
              <Pagination className="mb-0" disabled={disabled}>
                <Pagination.First onClick={() => setPage(1)} disabled={!canPreviousPage || showSubscriptionPopup} />
                <Pagination.Prev onClick={() => setPage(page - 1)} disabled={!canPreviousPage || showSubscriptionPopup} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => setPage(page + 1)} disabled={!canNextPage || showSubscriptionPopup} />
                <Pagination.Last onClick={() => setPage(pageCount)} disabled={!canNextPage || showSubscriptionPopup} />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View/Hide Columns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allColumns.map((column) => (
            <Form.Check
              key={column.id}
              type="checkbox"
              label={column.render('Header')}
              checked={column.isVisible}
              onChange={() => column.toggleHidden()}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowColumnModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRowModal} onHide={handleModalClose} className="custom-modal">
  <Modal.Header closeButton>
    <Modal.Title>
      <div className="college-name">
        {selectedRowData?.allottedInstitute}
      </div>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedRowData && (
      <div className="content-container">
        <div className="section">
          <div className="section-header">
            <h5>General Information</h5>
          </div>
          <div className="section-content">
            <p><strong>Institute Type:</strong> {selectedRowData.instituteType}</p>
            <p><strong>University:</strong> {selectedRowData.universityName}</p>
            <p><strong>State:</strong> {selectedRowData.state}</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h5>Course Details</h5>
          </div>
          <div className="section-content">
            <p><strong>Course:</strong> {selectedRowData.course}</p>
            <p><strong>Course Type:</strong> {selectedRowData.courseType}</p>
            <p><strong>Degree Type:</strong> {selectedRowData.degreeType}</p>
            <p><strong>Total Seats in Course:</strong> {selectedRowData.totalSeatsInCourse}</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h5>Allotment Information</h5>
          </div>
          <div className="section-content">
            <p><strong>Year:</strong> {selectedRowData.year}</p>
            <p><strong>Round:</strong> {selectedRowData.round}</p>
            <p><strong>Rank:</strong> {selectedRowData.rank}</p>
            <p><strong>Allotted Quota:</strong> {selectedRowData.allottedQuota}</p>
            <p><strong>Allotted Category:</strong> {selectedRowData.allottedCategory}</p>
            <p><strong>Candidate Category:</strong> {selectedRowData.candidateCategory}</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h5>Financial Information</h5>
          </div>
          <div className="section-content">
            <p><strong>Fee Amount:</strong> ₹{selectedRowData.feeAmount}</p>
            <p><strong>NRI Fee:</strong> ₹{selectedRowData.nriFee}</p>
            <p><strong>Stipend Year 1:</strong> ₹{selectedRowData.stipendYear1}</p>
            <p><strong>Stipend Year 2:</strong> ₹{selectedRowData.stipendYear2}</p>
            <p><strong>Stipend Year 3:</strong> ₹{selectedRowData.stipendYear3}</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h5>Bond and Penalty</h5>
          </div>
          <div className="section-content">
            <p><strong>Bond Year:</strong> {selectedRowData.bondYear}</p>
            <p><strong>Bond Penalty:</strong> ₹{selectedRowData.bondPenality}</p>
            <p><strong>Seat Leaving Penalty:</strong> ₹{selectedRowData.seatLeavingPenality}</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h5>Additional Information</h5>
          </div>
          <div className="section-content">
            <p><strong>Total Hospital Beds:</strong> {selectedRowData.totalHospitalBeds}</p>
            <p><strong>Total Seats in College:</strong> {selectedRowData.totalSeatsInCollege}</p>
          </div>
        </div>
      </div>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleModalClose} className="btn-close-modal">
      Close
    </Button>
  </Modal.Footer>
</Modal>
  );
    </div>
  );
};

export default GenericTable;
