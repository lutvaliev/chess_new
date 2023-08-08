import { FC } from 'react'
import MuiTableHead from '@mui/material/TableHead'
import { useTableContext } from '../../state/TableState'
import TableHeadRow from '../TableHeadRow/TableHeadRow'

const TableHead: FC = () => {
  const {
    tableInstance: { headerGroups }
  } = useTableContext()

  return (
    <MuiTableHead>
      {headerGroups.map((headerGroup) => (
        <TableHeadRow
          key={headerGroup.getHeaderGroupProps().key}
          headerGroup={headerGroup}/>
      ))}
    </MuiTableHead>
  )
}

export default TableHead
