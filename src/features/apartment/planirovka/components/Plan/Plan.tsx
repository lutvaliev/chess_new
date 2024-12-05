import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment, useLayoutsQuery } from '../../../BaseApartment'
import PlanCard from '../PlanCard/PlanCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './Plan.module.scss'
import NotFound from '../../../../../core/components/NotFound/NotFound'

const Plan = () => {
  const { layoutFilterData } = useApartmentViewContext()

  return (
    <BaseApartment>
      {layoutFilterData ? (
        layoutFilterData.length > 0 ? (
          <div className={styles.layouts}>
            {layoutFilterData.map((layout) => (
              <PlanCard layout={layout} key={layout.value} />
            ))}
          </div>
        ) : (
          <NotFound />
        )
      ) : (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      )}
    </BaseApartment>
  )
}

export default Plan
