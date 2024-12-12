/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { useMemo, useState, useRef, useEffect } from 'react'
import { Column } from 'react-table'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { Table } from '../../../../../core/components/table'
import { BaseApartment } from '../../../BaseApartment'
import TableCell from '../TableCell/TableCell'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import { TObject } from '../../../BaseApartment/types'
import TableButton from '../../../../../core/components/table/components/TableButton/TableButton'
import styles from './List.module.scss'
import { formatNumber } from '../../../utils/formatNumber'
import NotFound from '../../../../../core/components/NotFound/NotFound'

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const {
    formReturn: { watch },
    filteredData,
    preparedApartmentData: preparedChessData,
    objectQuery: { data, isFetching }
  } = useApartmentViewContext()

  const maxFloor = preparedChessData[0]?.floors ?? 0

  const visibleItems = useMemo(
    () => filteredData?.filter((item) => item.opacity !== true) || [],
    [filteredData]
  )

  const hasVisibleItems = useMemo(() => visibleItems.length > 0, [visibleItems])

  const columns = useMemo<Column<TObject>[]>(
    () => [
      {
        Header: 'Схема',
        accessor: 'object_planes',
        Cell: ({ value, row }: any) => <TableCell value={value} row={row} />
      },
      {
        Header: 'Комнатность',
        accessor: 'rooms',
        Cell: ({ value, row }) => (
          <TableCell value={value ? `${value}-комнатная` : 'Студия'} row={row} />
        )
      },
      {
        Header: 'Площадь',
        accessor: 'area',
        Cell: ({ value, row }) => <TableCell value={`${value} м²`} row={row} />
      },
      {
        Header: 'Площадь кухни',
        accessor: 'area_kitchen',
        Cell: ({ value, row }) => <TableCell value={`${value} м²`} row={row} />
      },
      {
        Header: 'Этаж',
        accessor: 'floor',
        Cell: ({ value, row }) => <TableCell value={`${value} из ${maxFloor}`} row={row} />
      },
      {
        Header: 'Номер на этаже',
        accessor: 'floor_number',
        Cell: ({ value, row }) => <TableCell value={`№${value}`} row={row} />
      },
      {
        Header: 'Стоимость',
        accessor: 'cost',
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { discounts } = row.original
          const hasDiscount = discounts && discounts.length > 0
          const discountValue = hasDiscount ? discounts[0] : value

          return (
            <div className={styles.discount}>
              {hasDiscount && (
                <span className={styles.new} style={{ color: '#007bfb', fontWeight: 'bold' }}>
                  {`${formatNumber(discountValue)} ₽`}
                </span>
              )}
              <span
                className={styles.old}
                style={{
                  color: hasDiscount ? '#bcc3d2' : 'black',
                  textDecoration: hasDiscount ? 'line-through' : 'none',
                  fontSize: hasDiscount ? '11px' : '14px'
                }}
              >
                {`${formatNumber(value)} ₽`}
              </span>
            </div>
          )
        }
      },
      {
        Header: ' ',
        accessor: (row: any) => row,
        Cell: ({ row }: any) => <TableButton rowData={row.original} />
      }
    ],
    [watch()]
  )

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return visibleItems.slice(startIndex, startIndex + itemsPerPage)
  }, [visibleItems, currentPage, itemsPerPage])

  const totalPages = useMemo(() => Math.ceil(visibleItems.length / itemsPerPage), [visibleItems, itemsPerPage])

  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredData])

  return (
    <BaseApartment>
      {isFetching ? (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      ) : data && hasVisibleItems ? (
        <div className={styles.wrapper} role="button" tabIndex={0}>
          <Table
            data={paginatedData || []}
            // @ts-ignore
            columns={columns}
            contentClass={styles.table}
            onRowClick={() => setIsModalOpen(true)}
          />
          <div className={styles.paginationWrapper}>
            <button
              className={styles.paginationButton}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Предыдущая
            </button>
            <span>{`${currentPage} из ${totalPages}`}</span>
            <button
              className={styles.paginationButton}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Следующая
            </button>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
            >
              {[5, 10, 20, 50].map((count) => (
                <option key={count} value={count}>
                  {count}
                  {' '}
                  на странице
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className={styles.noResultsWrapper}>
          <NotFound />
        </div>
      )}
    </BaseApartment>
  )
}

export default List
