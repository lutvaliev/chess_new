import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import DistrictSelect from '../selects/DistrictSelect/DistrictSelect'
import BuildingSelect from '../selects/BuildingSelect/BuildingSelect'
import SectionSelect from '../selects/SectionSelect/SectionSelect'
import styles from './ObjectFilter.module.scss'

const ObjectFilter = () => {
  const { formReturn: { control } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      <DistrictSelect control={control} />
      <BuildingSelect control={control}/>
      <SectionSelect control={control}/>
    </div>
  )
}

export default ObjectFilter
