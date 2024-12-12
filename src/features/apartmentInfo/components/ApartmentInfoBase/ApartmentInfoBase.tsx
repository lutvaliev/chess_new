/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react'
import { OpenInFullOutlined } from '@mui/icons-material'
import { useApartmentsQuery } from '../../../apartment/BaseApartment/querries'
import { useApartmentViewContext } from '../../../apartment/ApartmentView/state/ApartmentViewState'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'
import CloseIcon from '../../../../core/components/icons/SvgIcons/CloseIcon'
import defaultImage from '../../../../img/featured.png'
import LikeButton from '../LikeButton/LikeButton'
import StatisticsButton from '../StatisticsButton/StatisticsButton'
import DownloadButton from '../DownloadButton/DownloadButton'
import ShareButton from '../ShareButton/ShareButton'

type TProp = {
  info: any
  img?: any
  bgColor?: string
  drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const handleClickInside = (event: any) => {
  // Prevent the click event from propagating to the parent
  event.stopPropagation()
}

const ApartmentInfo: FC<TProp> = ({ info, drawerClose, img, bgColor }) => {
  const {
    formReturn: { watch }
  } = useApartmentViewContext()

  const [district, building] = watch(['district', 'building'])
  const layout = info?.id_Layout
  const { data } = useApartmentsQuery(district, building, layout)
  const [analogues, setAnalogues] = useState(false)
  console.log(info.id)
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
        className={`${styles.wrapper} apartmentinfo ${styles.wrapper_info}`}
        onClick={handleClickInside}
      >
        <Header drawerClose={drawerClose} info={info} img={img} />

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
        <ObjectTabs info={info} setAnalogues={setAnalogues} />
      </div>
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
        <div className={styles.analogues_head}>
          <div className={styles.analogues_titles}>
            <button type="button" onClick={() => setAnalogues(false)}>
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
              <div className={styles.card_img}>
                <img src={defaultImage} alt="" />
              </div>
              <div className={styles.card_info}>
                <div className={styles.number}>{i + 1}</div>
                <h4>{elem?.Apart?.ApartName}</h4>
                <p>{elem?.Apart?.Description}</p>
                <button type="button" className={styles.view_button} onClick={() => -1}>
                  Перейти к квартире
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ApartmentInfo
