/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { OpenInFullOutlined } from '@mui/icons-material'
import React, { FC, useState } from 'react'
import { Modal } from '@mui/material'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'
import CloseIcon from '../../../../core/components/icons/SvgIcons/CloseIcon'
import ApartmentAnalogues from '../ApartmentAnalogues/ApartmentAnalogues'
import { useApartmentViewContext } from '../../../apartment/ApartmentView/state/ApartmentViewState'
import { useApartmentsQuery } from '../../../apartment/BaseApartment/querries'
import defaultImage from '../../../../img/featured.png'
import DownloadButton from '../DownloadButton/DownloadButton'
import LikeButton from '../LikeButton/LikeButton'
import ShareButton from '../ShareButton/ShareButton'
import StatisticsButton from '../StatisticsButton/StatisticsButton'

type TProp = {
  layout: any
  info: any
  img?: any
  label?: string
  drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const handleClickInside = (event: any) => {
  // Prevent the click event from propagating to the parent
  event.stopPropagation()
}

const PlanInfo: FC<TProp> = ({ layout, info, drawerClose, img, label }) => {
  const [open, setOpen] = useState(false)
  const [analogues, setAnalogues] = useState(false)
  const [apartmentId, setApartmentId] = useState('')
  const [apartmentIsOpen, setApartmentIsOpen] = useState(false)
  const [fullImage, setFullImage] = useState('')

  const { formReturn: { watch }
  } = useApartmentViewContext()

  const [district, building] = watch(['district', 'building'])
  const { data } = useApartmentsQuery(district, building, layout.value)

  const handleOpen = (img: any) => {
    setOpen(true)
    setFullImage(img)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const infoWithLayout = {
    ...info,
    floor_planes: layout.floor_planes,
    object_planes: layout.object_planes
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log('dd')
          }
        }}
        className={`${styles.wrapper} apartmentinfo`}
        onClick={handleClickInside}
      >
        <div className={styles.overflow}>
          <Header drawerClose={drawerClose} info={infoWithLayout} img={img} label={label} />

          <div className={styles.btns}>
            <LikeButton />
            <StatisticsButton />
            <DownloadButton />
            <ShareButton />
          </div>
          <div
            className={styles.statusLine}
            style={{ backgroundColor: '#127cca' }}
          />
          <ObjectTabs info={info} setAnalogues={setAnalogues} type="plan" layout_value={layout?.value} />
        </div>
      </div>
      {' '}
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log('Keyboard interaction')
          }
        }}
        className={`${styles.wrapper} apartmentinfo ${styles.wrapper_sameApart} ${
          analogues ? styles.wrapper_sameApart__open : null
        }`}
        onClick={handleClickInside}
      >
        <Modal
          open={open}
          onClose={handleClose}
          className={styles.modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className={styles.fullscreenImageContainer}>
            <img className={styles.modalImage} src={fullImage} alt="Full screen" />
          </div>
        </Modal>
        <div className={styles.analogues_head}>
          <div className={styles.analogues_titles}>
            <button
              type="button"
              onClick={() => {
                setAnalogues(false)
                setApartmentIsOpen(false)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="28"
                viewBox="0 0 14 28"
                fill="none"
              >
                <path
                  d="M0.572566 15.4946L10.5063 26.6156C11.0582 27.2335 12.0064 27.2869 12.6243 26.7351C13.2421 26.1832 13.2956 25.2349 12.7437 24.6171L3.25625 13.9957L12.7437 3.37428C13.2956 2.75644 13.2421 1.8082 12.6243 1.25632C12.0064 0.704444 11.0582 0.757917 10.5063 1.37575L0.572567 12.4968L1.65507 13.4637L1.67287 13.4796"
                  fill="#127CCA"
                />
                <path
                  d="M1.65507 13.4637L0.572567 12.4968C-0.190042 13.3506 -0.190043 14.6408 0.572566 15.4946"
                  fill="#127CCA"
                />
              </svg>
            </button>
            <div className={styles.analogues_title}>
              <h3>Квартиры аналоги</h3>
            </div>
          </div>
          <div className={styles.analogues_close}>
            <div className={styles.close} onClick={drawerClose}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <p className={styles.subText}>
          Квартиры в наличии:
          <span className={styles.analogues_count}>{info?.count_aparts}</span>
        </p>
        <div className={styles.apartments_list}>
          {data?.map((elem, i) => (
            <div key={elem?.Apart?.id} className={styles.apartment_card}>
              <div
                className={styles.card_img}
                onClick={() =>
                  handleOpen(
                    elem?.Apart?.floor_planes.find((plane) => plane.endsWith('.png'))
                      || defaultImage
                  )}
              >
                <img
                  src={
                    elem?.Apart?.floor_planes.find((plane) => plane.endsWith('.png'))
                    || defaultImage
                  }
                  alt=""
                />
              </div>
              <div className={styles.card_info}>
                <div className={styles.number}>{i + 1}</div>
                <h4>{elem?.Apart?.ApartName}</h4>
                <p>{elem?.Apart?.Description}</p>
                <button
                  type="button"
                  className={styles.view_button}
                  onClick={() => {
                    setApartmentId(elem?.Apart?.id)
                    setApartmentIsOpen(true)
                  }}
                >
                  Перейти к квартире
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.apartment_container} ${apartmentIsOpen && styles.open}`}>
          {apartmentIsOpen && (
            <ApartmentAnalogues
              id={apartmentId}
              drawerClose={drawerClose}
              handleClickInside={handleClickInside}
              onClose={setApartmentIsOpen}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default PlanInfo
