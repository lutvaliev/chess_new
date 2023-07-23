import classNames from 'classnames'
import { useChessContext } from '../../../../state/useChessState'
import Chess from '../Chess/Chess'
import Actions from '../Actions/Actions'
import FilterOffIcon from '../../../../../../core/components/icons/SvgIcons/FilterOffIcon'
import RubleCircledIcon from '../../../../../../core/components/icons/SvgIcons/RubleCircledIcon'
import styles from './GeneralFilterMain.module.scss'

const GeneralFilterMain = () => {
  const { control } = useChessContext()
  return (
    <div className={styles.wrapper}>
      <Actions control={control}/>
      <Chess control={control} />
      <FilterOffIcon/>
      <div className={classNames(styles.text, styles.legend)} >Показать легенду</div>
      <div className={styles.offerWrapper}>
        <RubleCircledIcon/>
        <div className={classNames(styles.text, styles.offer)}>КП</div>
      </div>
    </div>
  )
}

export default GeneralFilterMain
