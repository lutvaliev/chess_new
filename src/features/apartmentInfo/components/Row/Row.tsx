import { FC, ReactNode } from 'react'
import styles from './Row.module.scss'

type TRow = {
    title: string
    value: string | number | ReactNode
}

const Row: FC<TRow> = ({ title, value }) => (
  <div className={styles.wrapper}>
    <div className={styles.title} >
      {title}
      :
    </div>
    <div className={styles.value} >{value}</div>
  </div>
)

export default Row
