import React from 'react'
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table'
import Loader from 'react-spinners/ScaleLoader'
import _ from 'lodash'
import Icon from '../Icon'
const DataTable = ({ columns, data, loading, sortData, pagination, minWidth }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    // visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    // pageCount,
    // gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10000,
        pageIndex: 0,
        sortBy: [
          {
            id: sortData || 'createdAt',
            desc: true
          }
        ]
      }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const minWidths = minWidth || '400px'
  return (
    <div style={{ minWidth: minWidths }}>
      <table
        className='table table-report table-report--bordered display datatable w-full'
        {...getTableProps()}
        style={{ minWidth: minWidths }}
      >
        <thead>
          {headerGroups.map((headerGroup, keys) => (

            <tr key={keys} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key2) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  key={key2}
                  className='border-b-2  text-center whitespace-no-wrap'
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {(!_.isEmpty(data) && !loading) &&
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, j) => {
                    return (
                      <td key={j} className='text-center border-b' {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>}

      </table>
      {loading && <Loading />}
      {!loading && _.isEmpty(data) && <NoData data={data} />}
      {pagination &&
        <div className='flex' style={{ minWidth: minWidths }}>
          <div>
          Showing {page.length ? pageIndex * pageSize + 1 : 0} to{' '}
            {pageIndex * pageSize + page.length} of {rows.length} entries
          </div>

          <PaginationTable
            previousPage={previousPage}
            nextPage={nextPage}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
          />
        </div>}
    </div>
  )
}

export default DataTable

const PaginationTable = ({
  previousPage,
  nextPage,
  pageIndex,
  pageOptions,
  canPreviousPage,
  canNextPage
}) => {
  return (
    <div className='dataTables_paginate paging_simple_numbers'>
      <a
        className='paginate_button previous disabled'
        aria-controls='DataTables_Table_0'
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
      >
        Previous
      </a>
      <span>
        <a className='paginate_button current' aria-controls='DataTables_Table_0'>
          {pageOptions.length ? pageIndex + 1 : 0} of {pageOptions.length}
        </a>
      </span>
      <a
        className='paginate_button next disabled'
        aria-controls='DataTables_Table_0'
        onClick={() => (canNextPage ? nextPage() : null)}
        disabled={!canPreviousPage}
      >
        Next
      </a>
    </div>
  )
}

const Loading = () => {
  return (
    <div className='bg-gray-200 h-64 flex flex-col justify-center items-center mb-5 text-2xl font-bold text-gray-500'>
      <Loader size={70} color='#65c1aa' loading />
    </div>
  )
}

const NoData = (data) => {
  return (
    <div className='bg-gray-200 h-64 flex flex-col justify-center items-center mb-5 text-2xl font-bold text-gray-500'>
      <Icon name='database' />
      <span>ไม่มีข้อมูล</span>
    </div>
  )
}
