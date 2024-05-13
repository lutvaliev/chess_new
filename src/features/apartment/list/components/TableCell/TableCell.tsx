import { FC, useState } from 'react'
import classNames from 'classnames'
import { Modal } from '@mui/material'
import styles from '../List/List.module.scss'
import { TTableCell } from '../../types'

const TableCell: FC<TTableCell> = ({ value, row }) => {
  const rowOriginal = row.original
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={styles.row}>
      {Array.isArray(value) ? (
        <button
          onClick={handleOpen}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          type="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              handleOpen()
            }
          }}
        >
          <img src={value[0]} alt="" />
        </button>
      ) : (
        value
      )}
      {Array.isArray(value) ? (
        <Modal
          open={open}
          onClose={handleClose}
          className={styles.modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <img
            className={styles.modalImage}
            src={value[0]}
            alt="" />
        </Modal>
      )
        : null}
    </div>
  )
}

export default TableCell
