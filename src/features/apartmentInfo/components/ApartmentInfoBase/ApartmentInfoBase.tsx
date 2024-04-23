import React, { FC } from 'react'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'

type TProp = {
    info: any,
    drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ApartmentInfo: FC<TProp> = ({ info, drawerClose }) => (
  <div className={`${styles.wrapper} apartmentinfo`}>
    <Header drawerClose={drawerClose} info={info}/>
    <div className={styles.statusLine} style={{ backgroundColor: `#${info.color}` }}/>
    <ObjectTabs info={info}/>
  </div>
)

export default ApartmentInfo
