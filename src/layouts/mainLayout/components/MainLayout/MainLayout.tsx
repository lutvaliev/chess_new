import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'

const MainLayout = () => (
  <div className={styles.wrapper} >
    <div className={styles.content}>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </div>
  </div>
)

export default MainLayout
