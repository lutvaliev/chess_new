/* eslint-disable */
import { FC, useState, useRef } from 'react'
import classNames from 'classnames'
import LockIcon from '@mui/icons-material/Lock'
import CustomTooltip from '../../../../../core/components/CustomTooltip/CustomTooltip'
import Card from '../../../BaseApartment/components/Card/Card'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import styles from './TileCard.module.scss'
import getStatusColor from '../../../utils/getStatusColor'

type TProp = {
  info: any
  discounts: any
  secondestate: boolean
  rooms: number | string
  cost: number | string
  flatNumber: number | string
  pricePerMeter: number | string
  area: number | string
  isDisabled?: boolean
}

const TileCard: FC<TProp> = ({
  info,
  discounts,
  secondestate,
  rooms,
  flatNumber,
  cost,
  pricePerMeter,
  area,
  isDisabled
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false)
    }
  }
  const bgColor = getStatusColor(info.color)
  const isLock = info.status === 'Не для продажи'
  // TODO usecallback
  const handleClose = () => setIsDrawerOpen(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log('dd')
        }
      }}
      onClick={(e: any) => handleClickOutside(e)}
    >
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose} info={info} />}
      </CustomDrawer>
      <CustomTooltip
        title={
          isLock ? (
            <div style={{ padding: 5 }}>Не для продажи</div>
          ) : (
            <Card
              color={info.color}
              discounts={discounts}
              secondestate={secondestate}
              rooms={rooms}
              flatNumber={flatNumber}
              cost={cost}
              pricePerMeter={pricePerMeter}
              area={area}
            />
          )
        }
        disabled={false}
      >
        {/* eslint-disable-next-line */}
        <div
          ref={drawerRef}
          className={styles.card}
          onClick={() => {
            if (!isLock) {
              setIsDrawerOpen(true)
            }
          }}
          style={{
            backgroundColor: bgColor,
            cursor: isLock ? 'default' : 'pointer'
          }}
        >
          <div className={classNames({ [styles.disabled]: isDisabled })} />
          {discounts.length > 0 ? <div className={styles.red_dot} /> : null}
          {isLock ? (
            <LockIcon style={{ fontSize: 20, color: '#000' }} />
          ) : (
            <p className={styles.text}>{rooms === 0 ? 'C' : rooms}</p>
          )}
        </div>
      </CustomTooltip>
    </div>
  )
}

export default TileCard
