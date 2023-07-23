import { useChessContext } from '../../../../state/useChessState'
import ApartmentLayout from '../ApartmentLayout/ApartmentLayout'
import Cost from '../Cost/Cost'
import NotSecondaryProperty from '../NotSecondaryProperty/NotSecondaryProperty'
import RoomsValue from '../RoomsValue/RoomsValue'
import Status from '../Status/Status'
import TotalArea from '../TotalArea/TotalArea'
import styles from './AdditionalFilterMain.module.scss'

const AdditionalFilterMain = () => {
  const { control } = useChessContext()
  return (
    <div className={styles.wrapper}>
      <Status control={control}/>
      <RoomsValue control={control}/>
      <ApartmentLayout control={control}/>
      <TotalArea control={control}/>
      <Cost control={control}/>
      <NotSecondaryProperty/>
    </div>
  )
}

export default AdditionalFilterMain
