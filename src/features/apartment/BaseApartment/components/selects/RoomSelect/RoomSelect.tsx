import { FC, useMemo } from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './RoomSelect.module.scss'

function useOptions() {
  const { apartmentFilterData } = useApartmentViewContext()

  return useMemo(() => (apartmentFilterData
    ? apartmentFilterData
      .rooms.map((room: number) => ({
        label: room === 0 ? 'Студия' : room,
        value: room === 0 ? 0 : room
      }))
    : []), [apartmentFilterData])
}

const RoomSelect: FC<TBaseSelectProps> = ({ control }) => {
  const options = useOptions()

  const tempOptions = [
    {
      label: 'Все комнаты',
      value: 'allRooms'
    },
    ...options
  ]
  return (
    <CustomSelectControl
      control={control}
      name="room"
      placeholder="Количество комнат"
      options={tempOptions}
      handleError={(error: any) => error?.room}
      selectClassName={styles.wrapper}
    />
  )
}

export default RoomSelect
