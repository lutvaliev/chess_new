import React, { FC, ReactNode } from 'react'
import BaseHeader from '../BaseHeader/BaseHeader'
import styles from './BaseApartment.module.scss'

type TProps = {
  children: ReactNode
}
const BaseApartment: FC<TProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <BaseHeader/>
    {children}
  </div>
)

export default BaseApartment
