import { useMemo, useState, useRef } from 'react'
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
  const handleClose = () => setIsModalOpen(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  const {
    formReturn: { watch },
    filteredData,
    preparedApartmentData: preparedChessData,
    objectQuery: { data, isFetching }
  } = useApartmentViewContext()

  const maxFloor = preparedChessData[0]?.floors ?? 0

  const hasVisibleItems = useMemo(
    () => filteredData?.some((item) => item.opacity === undefined || item.opacity === false),
    [filteredData]
  )

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
      //   {
      //     Header: 'Скидка',
      //     accessor: 'discounts',
      //     Cell: ({ value, row }) => (
      //       <TableCell value={Array.isArray(value) && value.length > 0 ? 'Да' : '-'} row={row} />
      //     )
      //   },
      {
        Header: ' ',
        accessor: (row: any) => row, // Accessing all data for the row
        // eslint-disable-next-line max-len
        Cell: ({ row }: any) => <TableButton rowData={row.original} />
      }
      // {
      //   Header: 'Статус',
      //   accessor: 'status',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Номер',
      //   accessor: 'number_of_object',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Стоимость, руб',
      //   accessor: 'cost',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Секция',
      //   accessor: 'section_',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Планировка',
      //   accessor: 'type_apartment',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Приведенная площадь, м2:',
      //   accessor: 'type_object',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Общая пл.(БТИ), м2:',
      //   accessor: 'name',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Приведен. пл. (БТИ), м2:',
      //   accessor: 'district',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // },
      // {
      //   Header: 'Площадь кухни (БТИ), м2:',
      //   accessor: 'district_id',
      //   Cell: ({ value, row }) => <TableCell value={value} row={row} />
      // }
    ],
    [watch()]
  )

  return (
    <BaseApartment>
      {isFetching ? (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      ) : data && hasVisibleItems ? (
        <div className={styles.wrapper} role="button" tabIndex={0}>
          <Table
            data={filteredData || []}
            // @ts-ignore
            columns={columns}
            contentClass={styles.table}
            onRowClick={() => setIsModalOpen(true)}
            // paginationConfig={data?.length && {
            //   isEnabled: true,
            //   manual: true,
            //   pageSize: totalPages,
            //   totalRows: data?.count,
            //   pageCount: +pageElements,
            //   onPageChange: (page) => setCurrentPage(page)
            // }}
          />
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
