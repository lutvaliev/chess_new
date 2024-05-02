import { FC, useMemo } from 'react'
import CustomSelectControl from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './RoomSelect.module.scss'

function useOptions() {
  const { apartmentFilterData } = useApartmentViewContext()

  return useMemo(() => (
    apartmentFilterData
      ? apartmentFilterData.rooms.map((room: number) => ({
        label: room === 0 ? 'Студия' : room,
        value: room === 0 ? 0 : room
      }))
      : []
  ), [apartmentFilterData])
}

function clickElementByDataValue(dataValue: string | number) {
  // Find the element with the specified data-value attribute
  const element: any = document.querySelector(`[data-value="${dataValue}"]`)

  // If the element is found, trigger a click event on it
  if (element) {
    element.click()
  } else {
    console.error(`Element with data-value "${dataValue}" not found.`)
  }
}

const RoomSelect: FC<TBaseSelectProps> = ({ control }) => {
  const options = useOptions()

  console.log(options, 'options')

  const tempOptions = [
    {
      label: 'Все комнаты',
      value: 'allRooms'
    },
    ...options
  ]

  const handleClick = (value: any) => {
    clickElementByDataValue(value)
  }

  return (
    <>
      <div className={styles.rooms}>
        {tempOptions?.map((option, index) => (
          <button
            type="button"
            className={styles.room}
            key={index}
            onClick={() => handleClick(option.value)}
          >
            {option?.label}
          </button>
        ))}
      </div>
      <CustomSelectControl
        control={control}
        name="room"
        placeholder="Количество комнат"
        options={tempOptions}
        handleError={(error: any) => error?.room}
        selectClassName={styles.wrapper}
      />
    </>
  )
}

export default RoomSelect
