import React, { FC, ReactNode } from 'react'
import styles from './CardSection.module.scss'
import RubleIcon from '../icons/SvgIcons/RubleIcon'

type TProps = {
    title?: string | ReactNode,
    isMetrics?: boolean
    value?: string | number
}

const CardSection: FC<TProps> = ({ title, isMetrics, value }) => (
  <div className={styles.sectionWrapper}>
    <div className={styles.text} >
      {title}
      {!isMetrics && ':'}
    </div>
    <div className={styles.valueWrapper} >
      <div className={styles.value} >{value}</div>
      <div className={styles.text} >{isMetrics ? 'м²' : <div><RubleIcon/></div> }</div>
    </div>
  </div>
)

export default CardSection
