import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { HeaderGroup } from 'react-table'
import styles from './TableHeadRow.module.scss'

type TProps = {
  headerGroup: HeaderGroup
}

const TableHeadRow: FC<TProps> = ({ headerGroup }) => (
  <TableRow {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((tableGroup) => (
      <TableCell className={styles.tableCell} {...tableGroup.getHeaderProps()} key={tableGroup.id}>
        {tableGroup.render('Header')}
      </TableCell>
    ))}
  </TableRow>
)

export default TableHeadRow
