import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  setPageSize
}) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

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
      institute: 'allottedInstitute',
      instituteType: 'instituteType',
      quota: 'allottedQuota',
      course: 'course',
      duration:'duration',
      allottedCategories: 'allottedCategory',
      candidateCategories: 'candidateCategory',
      examNames: 'examName',
      years: 'year',
      rounds: 'round',
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
    };
    
    return filterMapping[filterKey] || filterKey;
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
        data={data}
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
        clearAllFilters={clearAllFilters}
        handleSliderChange={handleSliderChange} // Pass the handler to FilterSection
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
