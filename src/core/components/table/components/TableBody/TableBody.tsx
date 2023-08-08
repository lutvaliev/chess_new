import React, { FC } from 'react'
import MuiTableBody from '@mui/material/TableBody'
import { useTableContext } from '../../state/TableState'
import TableBodyRow from '../TableBodyRow/TableBodyRow'

const TableBody: FC = () => {
  const {
    // @ts-ignore
    tableInstance: { getTableBodyProps, prepareRow, page }
  } = useTableContext()

  return (
    <MuiTableBody {...getTableBodyProps()}>
      {page.map((row: any) => {
        prepareRow(row)
        return <TableBodyRow key={row.id} row={row} />
      })}
    </MuiTableBody>
  )
}

export default TableBody
