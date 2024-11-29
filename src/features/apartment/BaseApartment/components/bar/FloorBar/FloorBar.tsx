/* eslint-disable */
import { FC, useState, useEffect } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './FloorBar.module.scss'
import RubleIcon from '../../../../../../core/components/icons/SvgIcons/RubleIcon'

type TProps = {
  control: Control<any>
  resetFilters: any,
  resetFlag: any
}

type TRange = {
  min: number
  max: number
}

const FloorBar: FC<TProps> = ({ control, resetFilters, resetFlag }) => {
  const { field } = useController({ name: 'floor', control })
  // eslint-disable-next-line max-len
  const [minFloor, setMinFloor] = useState<number>(0 ?? undefined)
  const [maxFloor, setMaxFloor] = useState<number>(0 ?? undefined)
  const [view, setView] = useState()
  const { objectQuery: { data, isFetching },
    preparedApartmentData: preparedChessData
  } = useApartmentViewContext()

  useEffect(() => {
    setView(control?._fields?.view?._f.value)
  },[control?._fields?.view?._f.value])

  useEffect(() => {
    if (!preparedChessData || preparedChessData.length === 0) {
		  setMinFloor(0)
      setMaxFloor(0)
      return
    }
    setMinFloor(1)
    setMaxFloor(preparedChessData[0].floors)
    setRange({ min: 1, max: preparedChessData[0].floors })
  }, [data,view])

  // Initial range value
  // eslint-disable-next-line max-len
  const [range, setRange] = useState<{ min: number, max: number }>({ min: minFloor || 0, max: maxFloor || 0 })

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newRange: TRange = typeof newValue === 'number'
      ? { min: newValue, max: newValue }
      // eslint-disable-next-line max-len
      : { min: newValue[0], max: newValue[1] } // Ensure newValue is an object with 'min' and 'max' properties
    setRange(newRange)
    field.onChange(newRange)
  }

  useEffect(() => {
    setRange({ min: minFloor, max: maxFloor })
    field.onChange({ min: minFloor, max: maxFloor })
  }, [resetFlag])

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p style={{ display: 'flex' }}>
          от &nbsp;
          {range.min}
        </p>
        <p style={{ display: 'flex' }}>
          до &nbsp;
          {range.max}
        </p>
      </Typography>
      <Slider
        value={[range.min, range.max]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaLabel={(index) => (index === 0 ? 'Minimum' : 'Maximum')}
        min={minFloor}
        max={maxFloor} // Adjust the range as needed
      />
    </div>
  )
}

export default FloorBar
