import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment, useLayoutsQuery } from '../../../BaseApartment'
import PlanCard from '../PlanCard/PlanCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './Plan.module.scss'

const Plan = () => {
  const {
    formReturn: { watch }
  } = useApartmentViewContext()
  const { data, isFetching } = useLayoutsQuery(watch('building'))

  console.log(data, 'planirovka')
  return (
    <BaseApartment>
      {data && !isFetching ? (
        <div className={styles.layouts}>
          {data?.map((layout) => (
            <PlanCard layout={layout} key={layout.value} />
          ))}
        </div>
      ) : (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      )}
    </BaseApartment>
  )
}

export default Plan
