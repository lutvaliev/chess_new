import React, { FC } from 'react'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'

type TProp = {
    drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ApartmentInfo: FC<TProp> = ({ drawerClose }) => (
  <div className={styles.wrapper}>
    <Header drawerClose={drawerClose}/>
    <div className={styles.statusLine}/>
    <ObjectTabs/>
  </div>
)

export default ApartmentInfo
