import React, { FC } from 'react'
import Header from '../Header/Header'
import ObjectTabs from '../Tabs/Tabs'
import styles from './ApartmentInfoBase.module.scss'

type TProp = {
    info: any,
    drawerClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ApartmentInfo: FC<TProp> = ({ info, drawerClose }) => (
  <div className={styles.wrapper}>
    <Header drawerClose={drawerClose} info={info}/>
    <div className={styles.statusLine}/>
    <ObjectTabs info={info}/>
  </div>
)

export default ApartmentInfo
