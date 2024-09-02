import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import "./ChoiceList.scss";

const GenericTable = ({
  columns,
  headerTitle,
}) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [filterOptions, setFilterOptions] = useState({ institutes: [], courses: [], categories: [] });
  const [wishlist, setWishlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const fetchFilters = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get('/api/filters');
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
      setFilterLoading(false);
    };

    fetchFilters();
  }, []);

  const fetchData = async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/wishlist', {
        params: {
          page,
          pageSize,
          ...filters,
        },
      });
      setData(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [page, pageSize, filters]);

  useEffect(() => {
    const resultsSection = document.querySelector('.results-section');
    if (showFilters) {
      resultsSection.style.width = 'calc(100vw - 290px)';
    } else {
      resultsSection.style.width = '100vw';
    }
  }, [showFilters]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const getFilterParamName = (filterKey) => {
    const filterMapping = {
      institute: 'allottedInstitute',
      course: 'course',
      category: 'allottedCategory',
    };
    return filterMapping[filterKey] || filterKey;
  };

  const buildFilterParams = () => {
    const params = {};
    Object.keys(filters).forEach((filterKey) => {
      const filterValue = filters[filterKey];
      if (Array.isArray(filterValue)) {
        params[filterKey] = filterValue.join(',');
      } else {
        params[filterKey] = filterValue;
      }
    });
    return params;
  };

  const handleRowClick = (row) => {
    setSelectedRowData(row.original);
    setShowRowModal(true);
  };

  const handleColumnToggle = (column) => {
    column.toggleHidden();
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let number = 0; number < totalPages; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === page - 1} onClick={() => setPage(number + 1)}>
          {number + 1}
        </Pagination.Item>
      );
    }
    return paginationItems;
  };

  const clearAllFilters = () => {
    setFilters({});
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
    if (gotoPage) {
      gotoPage(page - 1);
    }
  }, [page, gotoPage]);

  return (
    <div className="generic-table-container">
      <FilterSection
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
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
                        onClick={() => toggleAllWishlist()}
                        style={{ color: wishlist.length === filteredData.length ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
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
                            if (wishlist.some(item => item.allotmentId === row.original._id)) {
                              removeFromWishlist(row.original._id);
                            } else {
                              addToWishlist(row.original);
                            }
                          }}
                          style={{ color: wishlist.some(item => item.allotmentId === row.original._id) ? 'navy' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
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
                style={{ width: 'fit-content',height:'40px' }}
              >
                {[10,20, 30, 50, 100].map((size) => (
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
                               className="me-3"
                style={{ width: 'fit-content', height: '40px' }}
              />
            </Form.Group>
            <div className="pagination-controls">
              <Pagination>
                <Pagination.First onClick={() => setPage(1)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                <Pagination.Last onClick={() => setPage(pageCount)} disabled={!canNextPage} />
              </Pagination>
            </div>
          </div>
        </div>
      </div>

      {/* Column Toggle Modal */}
      <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View/Hide Columns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allColumns.map((column) => (
            <Form.Check
              key={column.id}
              type="checkbox"
              id={column.id}
              label={column.Header}
              checked={!column.isHidden}
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

      {/* Row Details Modal */}
      <Modal show={showRowModal} onHide={() => setShowRowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Row Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRowData && (
            <div>
              {Object.entries(selectedRowData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
                </p>
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

