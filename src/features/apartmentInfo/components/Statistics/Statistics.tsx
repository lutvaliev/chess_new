import { memo } from 'react'
import styles from './Statistics.module.scss'
import Row from '../Row/Row'

const Statistics = () => (
  <>
    <div className={styles.sectionTitle}>
      Статистика по квартире
    </div>
    <div className={styles.info}>
      <Row title="Просмотров квартиры" value="72"/>
      <Row title="Бронирований" value="1"/>
      <Row title="КП с этой квартирой" value="3"/>
      <Row title="Еще квартир такого типа" value="7"/>
      <div className={styles.analogues}>Квартиры аналоги</div>
    </div>
  </>
)

export default memo(Statistics)
