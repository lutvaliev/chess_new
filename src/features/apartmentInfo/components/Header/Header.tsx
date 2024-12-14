/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { FC, useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import CloseIcon from '../../../../core/components/icons/SvgIcons/CloseIcon'
import styles from './Header.module.scss'
import { getImageSrc } from '../../../apartment/utils/getImageSrc'

type TProp = {
  info: any
  img?: string
  label?: string
  drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Header: FC<TProp> = ({ info, drawerClose, img, label }) => {
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setIsFullscreen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setIsFullscreen(false)
  }

  const handleChangeImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const hasImageObject = info?.object_planes ?? img
  const hasImageFloor = info?.floor_planes
  const imgObjectLink = getImageSrc(hasImageObject)
  const imgFloorLink = getImageSrc(hasImageFloor)
  const images = [imgObjectLink, imgFloorLink]
  const hasOneImage = !(hasImageObject?.length > 0 && hasImageFloor?.length > 0)
  const activeImage = getImageSrc(
    (Array.isArray(hasImageObject) && hasImageObject.length > 0) ? hasImageObject : hasImageFloor
  )

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isFullscreen) {
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      }
    }
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }

    if (hasImageObject && hasImageObject.length === 0) {
      setCurrentImageIndex(1)
    }
  }, [isFullscreen])

  return (
    <div className={styles.header}>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.fullscreenImageContainer}>
          <img className={styles.modalImage} src={hasOneImage ? activeImage : images[currentImageIndex]} alt="Full screen" />
          {!hasOneImage && (
            <div className={styles.fullscreenNavigation}>
              <button
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
                }
                className={`${styles.navButton} ${styles.navLeft}`}
              >
                <KeyboardArrowLeft fontSize="large" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                className={`${styles.navButton} ${styles.navRight}`}
              >
                <KeyboardArrowRight fontSize="large" />
              </button>
            </div>
          )}
        </div>
      </Modal>

      <div className={styles.headerInfo}>
        <div className={styles.images}>
          <div className={styles.mainImage}>
            <button
              type="button"
              className={styles.buttonImg}
              onClick={handleOpen}
            >
              <img className={styles.mainImage_img} src={hasOneImage ? activeImage : images[currentImageIndex]} alt="" />
              {!hasOneImage && (
                <div className={styles.carusel}>
                  <span className={currentImageIndex === 0 ? styles.selected : ''} />
                  <span className={currentImageIndex === 1 ? styles.selected : ''} />
                </div>
              )}
            </button>
          </div>
          <div className={styles.imageTabs}>
            {hasImageObject && hasImageObject.length > 0 && (
              <button
                onClick={() => handleChangeImage(0)}
                className={`${styles.tabButton} ${currentImageIndex === 0 ? styles.activeTab : ''}`}
              >
                Планировка
              </button>
            )}
            {hasImageFloor && hasImageFloor.length > 0 && (
              <button
                onClick={() => handleChangeImage(1)}
                className={`${styles.tabButton} ${currentImageIndex === 1 ? styles.activeTab : ''}`}
              >
                На этаже
              </button>
            )}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>{`${info.name ?? label}`}</div>
          </div>
          <div className={styles.status}>
            {info.mortgage && (
              <div className={styles.subtitle}>
                В ипотеку - от {` ${info.MinimalPrice ?? ''} ₽/мес`}
              </div>
            )}
            {info.deadline && <div className={styles.subtitle}>{` Срок сдачи - ${info.deadline ?? ''}`}</div>}
          </div>
        </div>
      </div>
      <div className={styles.close} onClick={drawerClose}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default Header
