import { OpenInFullOutlined } from '@mui/icons-material'
import React, { FC, useState } from 'react'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'

type TProp = {
  info: any,
  drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const handleClickInside = (event: any) => {
  // Prevent the click event from propagating to the parent
  event.stopPropagation()
}

const ApartmentInfo: FC<TProp> = ({ info, drawerClose }) => {
  const [analogues, setAnalogues] = useState(false)
  console.log(info, 'info')
  return (
    !analogues ? (
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log('dd')
          }
        }}
        className={`${styles.wrapper} apartmentinfo`}
        onClick={handleClickInside}>
        <Header drawerClose={drawerClose} info={info} />
        <div className={styles.statusLine} style={{ backgroundColor: `#${info.color}` }} />
        <ObjectTabs info={info} setAnalogues={setAnalogues} />
      </div>
    ) : (
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log('dd')
          }
        }}
        className={`${styles.wrapper} apartmentinfo`}
        onClick={handleClickInside}>
        <div className={styles.analogues_head}>
          <div className={styles.analogues_titles}>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="28" viewBox="0 0 14 28" fill="none">
                <path d="M0.572566 15.4946L10.5063 26.6156C11.0582 27.2335 12.0064 27.2869 12.6243 26.7351C13.2421 26.1832 13.2956 25.2349 12.7437 24.6171L3.25625 13.9957L12.7437 3.37428C13.2956 2.75644 13.2421 1.8082 12.6243 1.25632C12.0064 0.704444 11.0582 0.757917 10.5063 1.37575L0.572567 12.4968L1.65507 13.4637L1.67287 13.4796" fill="#127CCA"/>
                <path d="M1.65507 13.4637L0.572567 12.4968C-0.190042 13.3506 -0.190043 14.6408 0.572566 15.4946" fill="#127CCA"/>
              </svg>
            </button>
            <div className={styles.analogues_title}>
              <h3>Кваритиры аналоги</h3>
              {/* eslint-disable-next-line max-len */}
              <p>
                Квартиры в наличии
                <span className={styles.analogues_count}>{info?.count_aparts}</span>
              </p>
            </div>
          </div>
          <div className={styles.analogues_close}>X</div>
        </div>
      </div>
    )
  )
}

export default ApartmentInfo
