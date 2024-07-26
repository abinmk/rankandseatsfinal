import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Allotments.scss';
import { FaHeart } from 'react-icons/fa'; // import heart icon

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
  setPageSize // Ensure setPageSize is passed
}) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [wishlist, setWishlist] = useState(new Set()); // track wishlist items

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
      quotas: 'allottedQuota',
      institutes: 'allottedInstitute',
      courses: 'course',
      allottedCategories: 'allottedCategory',
      candidateCategories: 'candidateCategory',
      examNames: 'examName',
      years: 'year',
      rounds: 'round',
      states: 'state',
      instituteTypes: 'instituteType',
      universityNames: 'universityName',
      yearsOfEstablishment: 'yearOfEstablishment',
      totalHospitalBeds: 'totalHospitalBeds',
      locationMapLinks: 'locationMapLink',
      nearestRailwayStations: 'nearestRailwayStation',
      distancesFromRailwayStation: 'distanceFromRailwayStation',
      nearestAirports: 'nearestAirport',
      distancesFromAirport: 'distanceFromAirport',
      courseTypes: 'courseType',
      degreeTypes: 'degreeType',
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

  const toggleWishlist = (id) => {
    setWishlist(prevWishlist => {
      const newWishlist = new Set(prevWishlist);
      if (newWishlist.has(id)) {
        newWishlist.delete(id);
      } else {
        newWishlist.add(id);
      }
      return newWishlist;
    });
  };

  const toggleAllWishlist = () => {
    if (wishlist.size === filteredData.length) {
      setWishlist(new Set());
    } else {
      setWishlist(new Set(filteredData.map(row => row.id)));
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

  const handleRowClick = (row) => {
    setSelectedRowData(row.original);
    setShowRowModal(true);
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
    <div className="allotments-container">
      <FilterSection
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
            <Button variant="primary" className="column-toggle-btn" onClick={() => setShowColumnModal(true)}>
              View/Hide Columns
            </Button>
          </div>
          <div className="table-wrapper">
            <Table {...getTableProps()} className="tableCustom">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    <th>
                      <FaHeart
                        onClick={toggleAllWishlist}
                        style={{ color: wishlist.size === filteredData.length ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5em' }}
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
                    <tr key={row.id} {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                      <td>
                        <FaHeart
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(row.original.id);
                          }}
                          style={{ color: wishlist.has(row.original.id) ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5em' }}
                        />
                      </td>
                      {row.cells.map((cell) => {
                        const { key, ...rest } = cell.getCellProps();
                        return (
                          <td key={key} {...rest}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="pagination-container">
            <Form.Group controlId="rowsPerPage" className="d-flex align-items-center pagination-info">
              <Form.Label className="me-2 mb-0">Rows per page:</Form.Label>
              <Form.Control
                as="select"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="me-3"
                style={{ width: '45px',height:'40px' }}
              >
                {[10, 25, 50, 100].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="gotoPage" className="d-flex align-items-center pagination-info">
              <Form.Label className="me-2 mb-0">Go to page:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max={pageCount}
                value={pageIndex + 1}
                onChange={(e) => setPage(Number(e.target.value))}
                className="me-2"
                style={{ width: '55px',height:'40px' }}
              />
            </Form.Group>
            <div className="pagination-controls">
              <Pagination className="mb-0">
                <Pagination.First onClick={() => setPage(1)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => setPage(page - 1)} disabled={!canPreviousPage} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => setPage(page + 1)} disabled={!canNextPage} />
                <Pagination.Last onClick={() => setPage(pageCount)} disabled={!canNextPage} />
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
