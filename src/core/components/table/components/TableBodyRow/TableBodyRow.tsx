import { FC } from 'react'
import { TableRow, TableCell } from '@mui/material'
import { Row } from 'react-table'
import { useTableContext } from '../../state/TableState'
import styles from './TableBodyRow.module.scss'

type TProps = {
  row: Row
}

const TableBodyRow: FC<TProps> = ({ row }) => {
  const {
    tableInstance: { prepareRow },
    onRowClick
  } = useTableContext()
  prepareRow(row)

  return (
    <TableRow
      {...row.getRowProps()}
      onClick={() => onRowClick?.(row)}
    >
      {row.cells.map((cell) => (
        // eslint-disable-next-line react/jsx-key
        <TableCell
          {...cell.getCellProps()}
          className={styles.tableCell}
        >
          {cell.render('Cell')}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default TableBodyRow
