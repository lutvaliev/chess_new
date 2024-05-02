import React, { FC } from 'react'
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

const ApartmentInfo: FC<TProp> = ({ info, drawerClose }) => (
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
    <ObjectTabs info={info} />
  </div>
)

export default ApartmentInfo
