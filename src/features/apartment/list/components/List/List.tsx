import { useMemo, useState } from 'react'
import { Column } from 'react-table'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { Table } from '../../../../../core/components/table'
import { BaseApartment } from '../../../BaseApartment'
import TableCell from '../TableCell/TableCell'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import { TObject } from '../../../BaseApartment/types'
import styles from './List.module.scss'

const List = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleClose = () => setIsDrawerOpen(false)

  const {
    formReturn: { watch },
    filteredData
  } = useApartmentViewContext()

  const columns = useMemo<Column<TObject>[]>(() => [
    {
      Header: 'Секция',
      accessor: 'section_',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Этаж',
      accessor: 'floor',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Номер на этаже',
      accessor: 'floor_number',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Номер / Наименование',
      accessor: 'number_of_object',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Статус',
      accessor: 'status',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'К',
      accessor: 'rooms',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Цена, руб.',
      accessor: 'priceM2',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Стоимость, руб',
      accessor: 'cost',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Вид',
      accessor: 'available',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Планировка',
      accessor: 'type_apartment',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Общая площадь, м2:',
      accessor: 'area',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Приведенная площадь, м2:',
      accessor: 'type_object',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Площадь кухни, м2:',
      accessor: 'area_kitchen',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Общая пл.(БТИ), м2:',
      accessor: 'name',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Приведен. пл. (БТИ), м2:',
      accessor: 'district',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    },
    {
      Header: 'Площадь кухни (БТИ), м2:',
      accessor: 'district_id',
      Cell: ({ value, row }) => <TableCell value={value} row={row}/>
    }
  ], [watch()])

  return (
    <BaseApartment>
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose}/>}
      </CustomDrawer>
      <div className={styles.wrapper}>
        <Table
          data={filteredData || []}
          // @ts-ignore
          columns={columns}
          contentClass={styles.table}
          onRowClick={() => setIsDrawerOpen(true)}
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
    </BaseApartment>
  )
}

export default List