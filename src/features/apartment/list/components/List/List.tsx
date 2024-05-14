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

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => setIsModalOpen(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  const {
    formReturn: { watch },
    filteredData
  } = useApartmentViewContext()

  const columns = useMemo<Column<TObject>[]>(() => [
    {
      Header: 'Схема',
      accessor: 'object_planes',
      Cell: ({ value, row }: any) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Комнаты',
      accessor: 'rooms',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Общая площадь, м2:',
      accessor: 'area',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Площадь кухни, м2:',
      accessor: 'area_kitchen',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Этаж',
      accessor: 'floor',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Номер на этаже',
      accessor: 'floor_number',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Стоимость, руб.',
      accessor: 'priceM2',
      Cell: ({ value, row }) => <TableCell value={value} row={row} />
    },
    {
      Header: 'Скидка:',
      accessor: 'discounts',
      Cell: ({ value, row }) => (
        <TableCell value={Array.isArray(value) && value.length > 0 ? 'Да' : ''} row={row} />
      )
    },
    {
      Header: ' ',
      accessor: (row: any) => row, // Accessing all data for the row
      // eslint-disable-next-line max-len
      Cell: ({ row }: any) => <TableButton rowData={row.original}/>
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
  ], [watch()])

  return (
    <BaseApartment>
      {filteredData ? (
        <div
          className={styles.wrapper}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              console.log('dd')
            }
          }}>
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
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      )}
    </BaseApartment>
  )
}

export default List
