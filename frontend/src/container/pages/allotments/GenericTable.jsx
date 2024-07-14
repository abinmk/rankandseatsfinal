import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GenericTable.scss';

const GenericTable = ({ data, columns, filtersConfig, headerTitle }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filters, setFilters] = useState(filtersConfig);
  const [filteredData, setFilteredData] = useState(data);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const resultsSection = document.querySelector('.results-section');
    if (showFilters) {
      resultsSection.style.width = 'calc(100vw - 340px)'; // Account for filter width and padding
    } else {
      resultsSection.style.width = '100vw';
    }
  }, [showFilters]);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = data;

    Object.keys(filters).forEach(filterKey => {
      if (filters[filterKey].length > 0) {
        if (Array.isArray(filters[filterKey])) {
          filtered = filtered.filter(item => filters[filterKey].includes(item[filterKey]));
        } else {
          filtered = filtered.filter(item => item[filterKey] >= filters[filterKey].min && item[filterKey] <= filters[filterKey].max);
        }
      }
    });

    setFilteredData(filtered);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    setHiddenColumns,
    state: { pageIndex, pageSize },
    page,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination,
    useColumnOrder
  );

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
          <Pagination.Item key={number} active={number === pageIndex} onClick={() => gotoPage(number)}>
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
      <FilterSection showFilters={showFilters} toggleFilters={toggleFilters} filters={filters} setFilters={setFilters} data={data} />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button
          className={`show-filters-btn ${showFilters ? "hidden" : ""}`}
          onClick={toggleFilters} id='view-btn'
        >
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
                    {headerGroup.headers.map((column) => (
                      <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr key={row.id} {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                      {row.cells.map((cell) => (
                        <td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
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
                style={{ width: '80px' }}
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
                onChange={(e) => gotoPage(Number(e.target.value) - 1)}
                className="me-3"
                style={{ width: '70px' }}
              />
            </Form.Group>
            <div className="pagination-controls">
              <Pagination className="mb-0">
                <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
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
          <Modal.Title>Row Data</Modal.Title>
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
