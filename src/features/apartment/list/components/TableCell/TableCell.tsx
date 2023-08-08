import { FC } from 'react'
import classNames from 'classnames'
import styles from '../List/List.module.scss'
import { TTableCell } from '../../types'

const TableCell: FC<TTableCell> = ({ value, row }) => {
  const rowOriginal = row.original
  return (
    <div className={classNames(styles.row, {
      [styles.opacity]: rowOriginal.opacity })}
    >
      {value}
    </div>
  )
}

export default TableCell