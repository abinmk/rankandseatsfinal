import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LastRank.scss';
import CustomPopup from '../custom-popup/custom-popup-filter';
import { FaHeart } from 'react-icons/fa';

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
  isModalOpen,
  disabled,
  showSubscriptionPopup,
  setShowSubscriptionPopup,
  wishlist,
  addToWishlist,
  removeFromWishlist
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [hiddenColumns, setHiddenColumns] = useState([]);

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

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const getFilterParamName = (filterKey) => {
    const filterMapping = {
      state: 'state',
      institute: 'collegeName',
      instituteType: 'instituteType',
      allottedQuota: 'quota',
      course: 'courseName',
      allottedCategories: 'allottedCategory',
      candidateCategories: 'candidateCategory',
      examNames: 'examName',
      year: 'year',
      round: 'round',
      university: 'universityName',
      yearsOfEstablishment: 'yearOfEstablishment',
      totalHospitalBeds: 'totalHospitalBeds',
      locationMapLinks: 'locationMapLink',
      nearestRailwayStations: 'nearestRailwayStation',
      distancesFromRailwayStation: 'distanceFromRailwayStation',
      nearestAirports: 'nearestAirport',
      distancesFromAirport: 'distanceFromAirport',
      courseTypes: 'courseType',
      degreeTypes: 'degreeType',
      courseFee: 'courseFee',
      nriFees: 'nriFee',
      stipendYear1: 'stipendYear1',
      stipendYear2: 'stipendYear2',
      stipendYear3: 'stipendYear3',
      bond: 'bondYear',
      bondPenalties: 'bondPenality',
    };
    
    return filterMapping[filterKey] || filterKey;
  };

  const formatLargeNumbersInString = (str) => {
    if (typeof str !== 'string') {
      return str; // Return the input as is if it's not a string
    }
  
    // Regular expression to find numeric values
    const regex = /(\d+)(?:\.\d{1,2})?/g;
  
    return str.replace(regex, (match) => {
      // Convert the matched number to an integer
      const number = parseInt(match, 10);
  
      // Check if the number is greater than 10,000
      if (number > 10000) {
        // Format the number as currency
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(number);
      }
  
      // Return the number as is if it's not greater than 10,000
      return match;
    });
  };

  const handleSliderChange = (filterKey, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: JSON.stringify({ min: newValue[0], max: newValue[1] })
    }));
  };

  const applyFilters = () => {
    let filtered = data;

    Object.keys(filters).forEach(filterKey => {
      const filterParamName = getFilterParamName(filterKey);
      const filterValue = filters[filterKey];
      if (filterValue && filterValue.length > 0) {
        if (filterValue.includes('min') && filterValue.includes('max')) {
          const { min, max } = JSON.parse(filterValue);
          filtered = filtered.filter(item => item[filterParamName] >= min && item[filterParamName] <= max);
        } else {
          filtered = filtered.filter(item => {
            const itemValue = item[filterParamName];
            return Array.isArray(filterValue) ? filterValue.includes(itemValue) : itemValue === filterValue;
          });
        }
      }
    });

    setFilteredData(filtered);
  };

  const handleModalClose = () => {
  setShowRowModal(false); // Assuming setShowRowModal is the state handler to show/hide the modal
};

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    setHiddenColumns: setTableHiddenColumns,
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
      initialState: { pageIndex: page - 1, hiddenColumns },
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

  useEffect(() => {
    const currentHiddenColumns = allColumns.filter(col => !col.isVisible).map(col => col.id);
    setHiddenColumns(currentHiddenColumns);
  }, [allColumns]);

  const handleColumnToggle = (column) => {
    const newHiddenColumns = hiddenColumns.includes(column.id)
      ? hiddenColumns.filter(col => col !== column.id)
      : [...hiddenColumns, column.id];

    setHiddenColumns(newHiddenColumns);
    setTableHiddenColumns(newHiddenColumns);
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

  const handleRowClick = (row) => {
    // Prevent opening the row modal if another modal (like Last Rank) is already open
    if (!isModalOpen) {
      setSelectedRowData(row.original);
      setShowRowModal(true);
    }
  };

  useEffect(() => {
    if (showRowModal && isModalOpen) {
      setShowRowModal(false);
    }
  }, [isModalOpen]);


  const handleCollegeClick = (collegeName) => {
    const encodedCollegeName = encodeURIComponent(collegeName);
    const url = `/college/${encodedCollegeName}`;
    window.open(url, '_blank'); // Opens in a new tab
  };

  const penalty = selectedRowData?.seatLeavingPenality ?? 0; 
  
  

  return (
    <div className={`allotments-container ${(showColumnModal || showRowModal) ? "hide-filters" : ""}`}>
      <FilterSection
       disabled={disabled}
        className={showRowModal ? "blurred" : ""}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
        data={data}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
        clearAllFilters={clearAllFilters}
        handleSliderChange={handleSliderChange}
        setShowFilters={setShowFilters}
      />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button className={`show-filters-btn ${showFilters ? "hidden" : ""}`} onClick={toggleFilters} id='view-btn'>
          <i className="bi bi-funnel"></i> All Filters
        </button>
        <div className="table-container">
          <div>
            <span className='allotments-header'>{headerTitle}</span>
            <Button variant="primary" className="column-toggle-btn" disabled={disabled}  onClick={() => setShowColumnModal(true)}>
              View/Hide Columns
            </Button>
          </div>
          <div className="table-wrapper">
            <Table {...getTableProps()} className="tableCustom">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                      <th>
                      <FaHeart className='heart-icon'
                      disabled={disabled}
                        onClick={() => toggleAllWishlist()}
                        style={{ color: wishlist.length === data.length ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
                      />
                    </th>
                    {headerGroup.headers.map((column) => {
                      if (column.headers) {
                        // This is the year header
                        return (
                          <th key={column.id} colSpan={column.headers.length} className="year-header">
                            {column.render('Header')}
                          </th>
                        );
                      } else {
                        // This is a round header
                        return (
                          <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} className="round-header">
                            {column.render('Header')}
                          </th>
                        );
                      }
                    })}
                  </tr>
                ))}
              </thead>

              <tbody {...getTableBodyProps()}>
  {currentPage.map((row) => {
    prepareRow(row);
    return (
      <tr key={row.id} {...row.getRowProps()} onClick={() => handleRowClick(row)}>
            <td>
                      <FaHeart
                      onClick={(e) => {
                        e.stopPropagation();

                        // Check if the current row's UUID exists in the wishlist
                        if (wishlist.some(item => item.uuid === row.original.uuid)) {
                          removeFromWishlist(row.original.uuid); // Remove by UUID
                        } else {
                          addToWishlist(row.original.examName, row.original); // Pass both parameters, including UUID
                        }
                      }}
                      style={{
                        color: wishlist.some(item => item.uuid === row.original.uuid) ? 'navy' : 'grey', // Check by UUID
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                      }}
                    />
                      </td>
        {row.cells.map((cell) => {
          const { key, ...rest } = cell.getCellProps();
          return (
            <td key={key} {...rest}>
              {cell.column.id === 'collegeName' ? (
                <span
                  style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the row click
                    handleCollegeClick(row.original.collegeName);
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
  {currentPage.length === 0 && (
    <tr>
      <td colSpan={columns.length} style={{ textAlign: 'center' }}>
        No data available.
      </td>
    </tr>
  )}
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
      <Modal.Header closeButton style={{ backgroundColor: '#223D6E' }}>
      <Modal.Title style={{ color: 'white' }}>View/Hide Columns</Modal.Title>
    </Modal.Header>
  <Modal.Body>
    {allColumns
 // Filters out columns with IDs like "2024_R1", "2023_R2", etc.
      .map((column) => (
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


<Modal show={showRowModal} onHide={handleModalClose} className="custom-modal" centered>
  <Modal.Header closeButton className="modal-header">
    <div className="college-header">
    <div className="college-name wishlist-header"
        onClick={(e) => {
          e.stopPropagation();

          // Check if the current row's UUID exists in the wishlist
          if (wishlist.some(item => item.uuid === selectedRowData?.uuid)) {
            removeFromWishlist(selectedRowData?.uuid); // Remove by UUID
          } else {
            addToWishlist(selectedRowData.examName, selectedRowData); // Pass both parameters, including UUID
          }
        }}
      >
        <FaHeart
          className={`wishlist-icon ${wishlist.some(item => item.uuid === selectedRowData?.uuid) ? 'wishlist-active' : ''}`}
        />
        {selectedRowData?.collegeName}
      </div>
      </div>
  </Modal.Header>
  <Modal.Body>
    <div className="info-sections">
      <div className="info-box">
        <h4>Course Name</h4>
        <p>{selectedRowData?.courseName}</p>
      </div>
      <div className="info-box">
        <h4>Quota</h4>
        <p>{selectedRowData?.quota}</p>
      </div>
      <div className="info-box">
        <h4>Allotted Category</h4>
        <p>{selectedRowData?.allottedCategory}</p>
      </div>
    </div>

    <div className="table-container">
      <Table bordered>
        <thead>
          <tr>
            <th>Year</th>
            <th>Round</th>
            <th>Last Rank</th>
            <th>Total Allotted</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(selectedRowData?.years || {}).map((year) =>
            Object.keys(selectedRowData?.years[year]?.rounds || {}).map((round) => (
              <tr key={`${year}_${round}`}>
                <td>{year}</td>
                <td>R{round}</td>
                <td>{selectedRowData.years[year].rounds[round]?.lastRank || '-'}</td>
                <td>{selectedRowData.years[year].rounds[round]?.totalAllotted || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>

    <div className="info-sections">
    <div className="info-box">
        <h4>Fee Details</h4>
        <p>Course Fees: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0 }).format(selectedRowData?.courseFee)}</p>
        <p>Hostel Fees: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0  }).format(selectedRowData?.nriFee)}</p>
      </div>
      <div className="info-box">
        <h4>Stipend Details</h4>
        <p>Year 1: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0 }).format(selectedRowData?.stipendYear1)}</p>
        <p>Year 2: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0  }).format(selectedRowData?.stipendYear2)}</p>
        <p>Year 3: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0 }).format(selectedRowData?.stipendYear3)}</p>
      </div>
      <div className="info-box">
        <h4>Bond Details</h4>
        <p>Bond (in years):{selectedRowData?.bondYear}</p>
        <p>Bond Penalty: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' ,maximumFractionDigits: 0  }).format(selectedRowData?.bondPenality)}</p>
      </div>
      <div className="info-box">
        <h4>Penalties and Deductions</h4>
        <p>Seat Leaving Penalty: {formatLargeNumbersInString(penalty)}</p>
     
     </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleModalClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default GenericTable;
