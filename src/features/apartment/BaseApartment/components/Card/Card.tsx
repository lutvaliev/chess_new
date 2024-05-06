import React, { FC } from 'react'
import RubleIcon from '../../../../../core/components/icons/SvgIcons/RubleIcon'
import { Discount } from '../../../../../img'
import styles from './Card.module.scss'

type TCard = {
  discounts: any
  rooms: number | string
  flatNumber: number | string
  cost: number | string
  pricePerMeter: number | string
  area: number | string
}

const Card: FC<TCard> = ({
  discounts,
  rooms,
  flatNumber,
  cost,
  pricePerMeter,
  area
}) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.info}>
        {discounts.length > 0 ? (
          <div>
            <img src={Discount} alt="" width={40} style={{ marginTop: '5px' }} />
          </div>
        ) : null}
        <div className={styles.bordered}>ВН</div>
        <div className={styles.bordered}>
          {rooms}
          К
        </div>
        <div className={styles.flatNumber}>
          №
          {flatNumber}
        </div>
      </div>
      <div className={styles.owner}>-</div>
    </div>
    <div className={styles.line} />
    <div className={styles.cost}>
      {cost.toLocaleString()}
      <RubleIcon />
    </div>
    <div className={styles.areaInfo}>
      <div className={styles.totalArea}>
        {area}
        {' '}
        м²
        <RubleIcon />
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.pricePerMeter}>
        {pricePerMeter.toLocaleString() || '-'}
        <RubleIcon />
      </div>
    </div>
  </div>
)

export default Card
