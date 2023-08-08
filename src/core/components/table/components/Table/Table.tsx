import MuiTable from '@mui/material/Table'
import { FC, memo } from 'react'
import classNames from 'classnames'
import { TableProvider, TTableProviderProps, useTableContext } from '../../state/TableState'
import styles from './Table.module.scss'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'

type TProps = TTableProviderProps

type TTableProps = {
  contentClass?: string
}
const Table: FC<TTableProps> = ({ contentClass }) => {
  const {
    tableInstance: { getTableProps },
    showLoader
  } = useTableContext()

  return (
    <div className={classNames(styles.content, contentClass)}>
      <MuiTable stickyHeader {...getTableProps()}>
        <TableHead />
        <TableBody />
      </MuiTable>
      {showLoader && <div className={styles.overlay}><h1>Spinner</h1></div>}
    </div>
  )
}

export default memo(({ contentClass, ...props }: TProps & TTableProps) => (
  <TableProvider {...props}>
    <Table contentClass={contentClass}/>
  </TableProvider>
))
