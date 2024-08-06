import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useColumnOrder } from 'react-table';
import FilterSection from './FilterSection';
import { Table, Modal, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Allotments.scss';
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
  setTotalPages,
  filterOptions,
  loading,
  filterLoading,
  fetchData,
  pageSize,
  setPageSize,
  addToChoiceList,
  removeFromChoiceList,
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
    setFilteredData(data);
  }, [data]);

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
      feeAmounts: 'feeAmount',
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
        filterOptions={filterOptions}
        loading={filterLoading}
        getFilterParamName={getFilterParamName}
        clearAllFilters={clearAllFilters}
        />
        <div className={`results-section ${showFilters ? "" : "full-width"}`}>
          <button className="show-filters-btn" onClick={toggleFilters}>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <h2>{headerTitle}</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Table striped bordered hover {...getTableProps()}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                  {rows.map(row => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                        {row.cells.map(cell => (
                          <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Pagination>
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
              </Pagination>
            </>
          )}
        </div>
        <Modal show={showRowModal} onHide={() => setShowRowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Row Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedRowData && (
              <pre>{JSON.stringify(selectedRowData, null, 2)}</pre>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowRowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Column Visibility</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {allColumns.map(column => (
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
      </div>
    );
  };
  
  export default GenericTable;
  
