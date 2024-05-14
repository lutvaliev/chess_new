import React, { FC } from 'react'
import RubleIcon from '../../../../../core/components/icons/SvgIcons/RubleIcon'
import { Discount } from '../../../../../img'
import styles from './Card.module.scss'

type TCard = {
  color: any
  discounts: any
  secondestate: boolean
  rooms: number | string
  flatNumber: number | string
  cost: number | string
  pricePerMeter: number | string
  area: number | string
}

const Card: FC<TCard> = ({
  color,
  discounts,
  secondestate,
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
            <img className={styles.discount} src={Discount} alt="" width={40} />
          </div>
        ) : null}
        {secondestate ? <div className={styles.bordered}>ВН</div> : null}
        <div className={styles.bordered}>
          {rooms === 0 ? 'C' : `${rooms}К`}
        </div>
        <div className={styles.flatNumber}>
          №
          {flatNumber}
        </div>
      </div>
      <div className={styles.owner}>-</div>
    </div>
    <div style={{ backgroundColor: `#${color}` }} className={styles.line} />
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
