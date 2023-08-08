import { memo } from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => (
  <div className={styles.spinner}/>
)
export default memo(Spinner)
