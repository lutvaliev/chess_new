/* eslint-disable no-tabs */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect, useState } from 'react'
import ObjectTabs from '../Tabs/Tabs'
import ShareButton from '../ShareButton/ShareButton'
import { useApartmentViewContext } from '../../../apartment/ApartmentView/state/ApartmentViewState'
import { useApartmentsQuery, useObjectChessQuery } from '../../../apartment/BaseApartment/querries'
import DownloadButton from '../DownloadButton/DownloadButton'
import Header from '../Header/Header'
import LikeButton from '../LikeButton/LikeButton'
import StatisticsButton from '../StatisticsButton/StatisticsButton'
import styles from './ApartmentAnalogues.module.scss'
import { apiClient } from '../../../../core/api/apiClient'
import Spinner from '../../../../core/components/Spinner/Spinner'
import getStatusColor from '../../../apartment/utils/getStatusColor'

const ApartmentAnalogues: FC<any> = ({ id, drawerClose, handleClickInside, onClose }) => {
  const [open, setOpen] = useState(false)

  const { data, isFetching } = useObjectChessQuery({ id, filter: '' })
  const [fullImage, setFullImage] = useState('')

  const handleOpen = (img: any) => {
    setOpen(true)
    setFullImage(img)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const bgColor = getStatusColor(data?.[0].color)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClose(false)
        }}
        className={styles.btn_back}
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
      {isFetching ? (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      ) : (
        data && (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                console.log('dd')
              }
            }}
            className={`${styles.wrapper} apartmentinfo ${styles.wrapper_info}`}
            onClick={handleClickInside}
          >
            <div className={styles.overflow}>
              <div className={styles.left_margin}>
                <Header drawerClose={drawerClose} info={data[0]} />
              </div>

              <div className={styles.btns}>
                <LikeButton />
                <StatisticsButton />
                <DownloadButton />
                <ShareButton />
              </div>
              <div
                className={styles.statusLine}
                style={{ backgroundColor: bgColor === '#fff' ? '#127cca' : bgColor }}
              />
              <ObjectTabs info={data[0]} setAnalogues={null} />
            </div>
          </div>
        )
      )}
    </>
  )
}

export default ApartmentAnalogues
