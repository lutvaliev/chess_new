import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import StatusSelect from '../selects/StatusSelect/StatusSelect'
import RoomSelect from '../selects/RoomSelect/RoomSelect'
import TotalAreaBar from '../bar/TotalAreaBar/TotalAreaBar'
import CostBar from '../bar/CostBar/CostBar'
import styles from './ApartmentFilter.module.scss'

const ApartmentFilter = () => {
  const { formReturn: { control, watch } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      <div className={styles.selects}>
        <StatusSelect control={control}/>
        <RoomSelect control={control}/>
        <button type="button" className={styles.button}>Без ВП</button>
      </div>
      <div className={styles.metrics}>
        <div className={styles.bar}>
          <div>Площадь:</div>
          <TotalAreaBar control={control}/>
        </div>
        <div className={styles.bar}>
          <div>Стоимость:</div>
          <CostBar control={control}/>
        </div>
      </div>
    </div>
  )
}

export default ApartmentFilter
