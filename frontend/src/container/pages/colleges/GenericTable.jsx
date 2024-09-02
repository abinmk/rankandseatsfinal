import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomPopup from '../custom-popup/custom-popup-filter';
import "./Colleges.scss";

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
  fetchData, // Ensure fetchData is passed
  pageSize, // Ensure pageSize is passed
  setPageSize, // Ensure setPageSize is passed
  disabled,
  showSubscriptionPopup,
  setShowSubscriptionPopup

}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const navigate = useNavigate(); // useNavigate for routing

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const resultsSection = document.querySelector('.results-section');
    if (showFilters) {
      resultsSection.style.width = 'calc(100vw - 290px)'; // Account for filter width and padding
    } else {
      resultsSection.style.width = '100vw';
    }
  }, [showFilters]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    fetchData(page, pageSize, buildFilterParams());
  }, [filters, page, pageSize]);

  const getFilterParamName = (filterKey) => {
    const filterMapping = {
      quota: 'allottedQuota',
      institute: 'collegeName',
      course: 'course',
      category: 'allottedCategory',
      candidateCategories: 'candidateCategory',
      examNames: 'examName',
      year: 'year',
      round: 'round',
      state: 'state',
      instituteType: 'instituteType',
      university: 'universityName',
      yearOfEstablishment: 'yearOfEstablishment',
      totalHospitalBeds: 'totalHospitalBeds',
      locationMapLinks: 'locationMapLink',
      nearestRailwayStations: 'nearestRailwayStation',
      distancesFromRailwayStation: 'distanceFromRailwayStation',
      nearestAirports: 'nearestAirport',
      distancesFromAirport: 'distanceFromAirport',
      courseType: 'courseType',
      degreeType: 'degreeType',
      feeAmounts: 'feeAmount',
      nriFees: 'nriFee',
      stipendYear1: 'stipendYear1',
      stipendYear2: 'stipendYear2',
      stipendYear3: 'stipendYear3',
      bondYears: 'bondYear',
      bondPenalties: 'bondPenality',
      rank: 'rank'
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
      initialState: { pageIndex: page - 1 }, // Set initial page
      manualPagination: true, // Inform React Table that we'll handle pagination on our own
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

  const handleCollegeClick = (collegeName) => {
    const encodedCollegeName = encodeURIComponent(collegeName);
    const url = `/college/${encodedCollegeName}`;
    window.open(url, '_blank'); // Opens in a new tab
  };
  
  


  const handleColumnToggle = (column) => {
    column.toggleHidden();
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

  const clearAllFilters = () => {
    setFilters({});
  };

  return (
    <div className="colleges-container">
      <FilterSection
        disabled={disabled}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName} // Pass this function to FilterSection
        clearAllFilters={clearAllFilters}
      />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button className={`show-filters-btn ${showFilters ? "hidden" : ""}`} onClick={toggleFilters} id='view-btn'>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <div className="table-container">
          <div>
            <span className='allotments-header'>{headerTitle}</span>
            <Button variant="primary" className="column-toggle-btn" onClick={() => setShowColumnModal(true)} disabled={disabled}>
              View/Hide Columns
            </Button>
          </div>
          <div className="table-wrapper">
            <Table {...getTableProps()} className="tableCustom">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
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
                    <tr key={row.id} {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        const { key, ...rest } = cell.getCellProps();
                        return (
                        <td key={key} {...rest}>
                          {cell.column.id === 'collegeName' ? (
                            <span
                              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                              onClick={() => handleCollegeClick(row.original.collegeName)} // Pass the college name here
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
      <Modal show={showColumnModal} disabled={disabled} onHide={() => setShowColumnModal(false)}>
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

      <Modal show={showRowModal} onHide={() => setShowRowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Row Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRowData && (
            <div>
              {Object.entries(selectedRowData).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GenericTable;

