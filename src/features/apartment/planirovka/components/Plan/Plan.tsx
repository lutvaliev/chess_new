import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment, useLayoutsQuery } from '../../../BaseApartment'
import { TObject } from '../../../BaseApartment/types'
import PlanCard from '../PlanCard/PlanCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import RowDescription from '../../../chess/components/RowDescription/RowDescription'
import styles from './Plan.module.scss'
import { useApartmentsQuery } from '../../../BaseApartment/querries'

const Plan = () => {
  const {
    formReturn: {
      watch
    }
  } = useApartmentViewContext()
  const { data, isFetching } = useLayoutsQuery(watch('building'))
  // const { data, isFetching } = useApartmentsQuery(watch('building', 'layouts'))
  console.log(data, 'planirovka')
  return (
    <BaseApartment>
      {data && !isFetching
        ? (
          <div className={styles.layouts}>
            {data?.map((layout) => (
              <div className={styles.layout} key={layout.value}>
                <h4 className={styles.label}>{layout.label}</h4>
                <img src={layout.img_adress} alt="" />
              </div>
            ))}
          </div>
        )
        : (
          <div className={styles.spinnerWrapper}>
            <Spinner/>
          </div>
        )}
    </BaseApartment>
  )
}

export default Plan
