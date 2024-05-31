import { FC, useCallback, useEffect, useState, useRef } from 'react'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
// import styles from './PlanCard.module.scss'
import styles from './PlanCard.module.scss'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'

type TProps = {
  layout: any
}

const PlanCard: FC<TProps> = (
  {
    layout
  }
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(
    () => setIsDrawerOpen(false),
    []
  )
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false)
    }
  }

  console.log(layout, 'layout')

  return (
    <div className={styles.card}>
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose} info={layout} />}
      </CustomDrawer>
      { /* eslint-disable-next-line */}
      <div key={layout.value}
        ref={drawerRef}
        className={`${styles.cardWrapper} ${styles.layout}`}
        onClick={() => setIsDrawerOpen(true)}>
        <h4 className={styles.label}>{layout.label}</h4>
        <img src={layout.img_adress} alt="" />
      </div>
    </div>
  )
}
// TODO memo
export default PlanCard
