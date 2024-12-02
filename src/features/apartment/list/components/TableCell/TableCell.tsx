import { FC, useState } from 'react'
import classNames from 'classnames'
import { Modal } from '@mui/material'
import styles from '../List/List.module.scss'
import { TTableCell } from '../../types'
import { getImageSrc } from '../../../utils/getImageSrc'

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
          <img src={getImageSrc(value)} alt="" />
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
            src={getImageSrc(value)}
            alt="" />
        </Modal>
      )
        : null}
    </div>
  )
}

export default TableCell
