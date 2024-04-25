import React, { FC, useState } from 'react'
import { Modal } from '@mui/material'
import Row from '../Row/Row'
import PrimaryButton from '../../../../core/components/buttons/PrimaryButton/PrimaryButton'
import RubleCircledIcon from '../../../../core/components/icons/SvgIcons/RubleCircledIcon'
import PlusOutlineIcon from '../../../../core/components/icons/SvgIcons/PlusOutlineIcon'
import CloseIcon from '../../../../core/components/icons/SvgIcons/CloseIcon'
import styles from './Header.module.scss'

type TProp = {
  info: any,
  drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Header: FC<TProp> = ({ info, drawerClose }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={styles.header}>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img
          className={styles.modalImage}
          src={info.object_planes[0]}
          alt="" />
      </Modal>
      <div className={styles.headerInfo}>
        <div className={styles.images}>
          <div className={styles.mainImage}>
            <button type="button" className={styles.buttonImg} onClick={handleOpen}>
              <img
                className={styles.mainImage}
                src={info.object_planes[0]}
                alt="" />
            </button>
          </div>
          {/* <div className={styles.additionalImages}>
          <img
            className={styles.image}
            src="https://static3.depositphotos.com/1009948/264/i/600/depositphotos_2648677-stock-photo-interior-of-the-stylish-apartment.jpg"
            alt="" />
          <img
            className={styles.image}
            src="https://static3.depositphotos.com/1009948/264/i/600/depositphotos_2648677-stock-photo-interior-of-the-stylish-apartment.jpg"
            alt="" />
        </div> */}
        </div>
        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            {/* <div className={styles.title}>{`${info.district}`}</div> */}
            <div className={styles.title}>{`${info.name}`}</div>
          </div>
          <div className={styles.status}>
            <Row title="Статус" value={info.status} />
          </div>
          {/* <div className={styles.buttonsWrapper}>
          <PrimaryButton text="Бронь" className={styles.button} />
          <PrimaryButton text="Ипотека" className={styles.button} />
          <PrimaryButton text="Договор" className={styles.button} />
          <div className={styles.offerWrapper}>
            <RubleCircledIcon />
            <div className={styles.offer}>КП</div>
          </div>
          <div className={styles.offerWrapper}>
            <PlusOutlineIcon />
            <div className={styles.offer}>КП</div>
          </div>
        </div> */}
        </div>
      </div>
      { /* eslint-disable-next-line */}
      <div
        className={styles.close}
        onClick={drawerClose}
      >
        <CloseIcon />
      </div>
    </div>
  )
}

export default Header
