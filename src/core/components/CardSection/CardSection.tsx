import React, { FC, ReactNode } from 'react'
import { TBalconies } from '../../../features/apartment/BaseApartment/types'
import styles from './CardSection.module.scss'

type TProps = {
    title?: string | ReactNode,
    isMetrics?: boolean
    value: TBalconies[] | string | number
    icon?: ReactNode | string
}

function useBalconyArea(data: TBalconies[] | string | number) {
  if (!Array.isArray(data)) {
    return data
  }
  const balconyText = data?.reduce((acc, current) => (
    `${acc + current?.square_meters} м² / `
  ), '')
  return balconyText.slice(0, balconyText.length - 2)
}

const CardSection: FC<TProps> = ({ title, isMetrics, value, icon }) => {
  const balconyArea = useBalconyArea(value)

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.text}>
        {title}
        {!isMetrics && ':'}
      </div>
      <div className={styles.valueWrapper}>
        <div className={styles.value}>
          {
            (value && Array.isArray(value)
              ? balconyArea
              : value)
          }
        </div>
        {/* <div className={styles.text}>{!value ? '' : icon}</div> */}
        <div className={styles.text}>{icon}</div>
      </div>
    </div>
  )
}
export default CardSection
