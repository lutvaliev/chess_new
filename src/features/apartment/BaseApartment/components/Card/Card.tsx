import React, { FC } from 'react'
import RubleIcon from '../../../../../core/components/icons/SvgIcons/RubleIcon'
import styles from './Card.module.scss'

type TCard = {
    rooms: number | string
    flatNumber: number | string
    cost: number | string
    pricePerMeter: number | string
    area: number | string
}

const Card: FC<TCard> = (
  {
    rooms,
    flatNumber,
    cost,
    pricePerMeter,
    area
  }
) => (
  <div className={styles.wrapper}>
    <div className={styles.header} >
      <div className={styles.info}>
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
      <div className={styles.owner} >-</div>
    </div>
    <div className={styles.line}/>
    <div className={styles.cost}>
      {cost}
      <RubleIcon/>
    </div>
    <div className={styles.areaInfo} >
      <div className={styles.totalArea} >
        {area}
        {' '}
        м²
        <RubleIcon/>
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.pricePerMeter} >
        {pricePerMeter || '-'}
        <RubleIcon/>
      </div>
    </div>
  </div>
)

export default Card
