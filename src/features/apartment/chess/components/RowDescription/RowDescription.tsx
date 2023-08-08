import React, { FC, memo } from 'react'
import styles from './RowDescription.module.scss'

type TProp = {
    floor: number
}

const RowDescription: FC<TProp> = ({ floor }) => (
  <div className={styles.wrapper}>
    <div className={styles.section}>
      <div className={styles.floorWrapper} >{floor}</div>
      <div>Скидка, вторичка, кол-во комнат, № кв.</div>
    </div>
    <div className={styles.section}>Клиент</div>
    <div className={styles.section}>Общая площадь, м2</div>
    <div className={styles.section}>Площадь балкона, м2</div>
    <div className={styles.section}>Цена за м2, руб.</div>
    <div className={styles.section}>Стоимость, руб.</div>
    <div className={styles.section}>Сумма продажи, руб.</div>
  </div>
)

export default memo(RowDescription)
