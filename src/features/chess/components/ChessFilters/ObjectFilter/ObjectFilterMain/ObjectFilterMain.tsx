import { useChessContext } from '../../../../state/useChessState'
import District from '../District/District'
import Building from '../Building/Building'
import Section from '../Section/Section'
import styles from './ObjectFilterMain.module.scss'

const ObjectFilterMain = () => {
  const { control } = useChessContext()
  return (
    <div className={styles.wrapper}>
      <District control={control} />
      <Building control={control}/>
      <Section control={control}/>
    </div>
  )
}

export default ObjectFilterMain
