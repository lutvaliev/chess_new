import { FC, useCallback, useState, useRef } from 'react'
import styles from './PlanCard.module.scss'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import PlanInfo from '../../../../apartmentInfo/components/ApartmentInfoBase/PlanInfoBase'
import { getImageSrc } from '../../../utils/getImageSrc'

type TProps = {
  layout: any
}

const PlanCard: FC<TProps> = ({ layout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(() => setIsDrawerOpen(false), [])
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false)
    }
  }

  return (
    <div className={styles.card}>
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && (
          <PlanInfo
            drawerClose={handleClose}
            info={layout.parameters}
            img={layout.img_adress}
            label={layout.label}
          />
        )}
      </CustomDrawer>
      {/* eslint-disable-next-line */}
      <div
        key={layout.value}
        ref={drawerRef}
        className={`${styles.cardWrapper} ${styles.layout}`}
        onClick={() => setIsDrawerOpen(true)}
      >
        <h4 className={styles.label}>{layout.label}</h4>
        <img src={getImageSrc(layout.img_adress)} alt="" />
      </div>
    </div>
  )
}

export default PlanCard
