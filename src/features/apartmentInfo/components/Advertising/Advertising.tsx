import React from 'react'
import EditIcon from '../../../../core/components/icons/SvgIcons/EditIcon'
import Row from '../Row/Row'
import styles from './Advertising.module.scss'

const Advertising = () => (
  <div className={styles.wrapper}>
    <div className={styles.sectionTitle}>
      DomClick
      <EditIcon/>
    </div>
    <div className={styles.info} >
      <Row title="Окна" value="Во двор"/>
      <Row title="Санузел" value="Совмещенный"/>
      <Row title="Отделка" value="Да"/>
      <Row title="Жилая площадь, м2" value="56"/>
    </div>
  </div>
)

export default Advertising
