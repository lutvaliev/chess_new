import React, { FC } from 'react'
import styles from './Card.module.scss'
import CardSection from '../../../../core/components/CardSection/CardSection'
import TotalAreaIcon from '../../../../core/components/icons/SvgIcons/TotalAreaIcon'
import BalconyAreaIcon from '../../../../core/components/icons/SvgIcons/BalconyAreaIcon'

type TProps = {
    area?: string | number,
    flatNumber?: number | string
    rooms?: number
    pricePerSquare?: number | string
}

const Card: FC<TProps> = ({ area, flatNumber, rooms, pricePerSquare }: any) => (
  <div className={styles.wrapper} >
    <div className={styles.header} >
      <div className={styles.info} >
        <div className={styles.bordered} >99,%</div>
        <div className={styles.bordered} >ВН</div>
        <div className={styles.bordered} >
          {rooms}
          К
        </div>
        <div className={styles.flatNumber} >
          №
          {flatNumber}
        </div>
      </div>
      <div className={styles.owner}>Е.Н. Сумина</div>
    </div>
    <div className={styles.line} />
    <div className={styles.additionalInfo}>
      <CardSection title={<TotalAreaIcon/>} value={area} isMetrics/>
      <CardSection title={<BalconyAreaIcon/>} value="3,5" isMetrics/>
      <CardSection title="За м²" value={pricePerSquare} />
      <CardSection title="Всего" value="3 546 540" />
      <CardSection title="Продано" value="3 546 540" />
    </div>

  </div>
)

export default Card
