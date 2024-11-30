import { FC } from 'react'
import styles from './BaseHeader.module.scss'
import HeaderMain from '../HeaderMain/HeaderMain'
import ObjectFilter from '../ObjectFilter/ObjectFilter'
import ApartmentFilter from '../ApartmentFilter/ApartmentFilter'

const BaseHeader: FC = () => (
  <div className={styles.header}>
    <ObjectFilter />
    <HeaderMain />
    <ApartmentFilter />
  </div>
)

export default BaseHeader
