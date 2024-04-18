import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import FilterOffIcon from '../../../../../core/components/icons/SvgIcons/FilterOffIcon'
import RubleCircledIcon from '../../../../../core/components/icons/SvgIcons/RubleCircledIcon'
import ActionSelect from '../selects/ActionSelect/ActionSelect'
import ViewSelect from '../selects/ViewSelect/ViewSelect'
import styles from './HeaderMain.module.scss'

const HeaderMain = () => {
  const { formReturn: { control } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      {/* <ActionSelect control={control}/> */}
      <ViewSelect control={control} />
      {/* <FilterOffIcon/> */}
      {/* <div className={classNames(styles.text, styles.legend)} >Показать легенду</div>
      <div className={styles.offerWrapper}>
        <RubleCircledIcon/>
        <div className={classNames(styles.text, styles.offer)}>КП</div>
      </div> */}
    </div>
  )
}

export default HeaderMain
