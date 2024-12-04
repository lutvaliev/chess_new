/* eslint-disable */
import { FC, useState, useEffect, useCallback } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './FloorBar.module.scss'

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
  const [minFloor, setMinFloor] = useState<number>(0)
  const [maxFloor, setMaxFloor] = useState<number>(0)
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

  const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
	const newRange: TRange = Array.isArray(newValue)
	  ? { min: newValue[0], max: newValue[1] }
	  : { min: newValue, max: newValue };
	setRange(newRange);
	field.onChange(newRange);
  }, [field]);

  useEffect(() => {
    setRange({ min: minFloor, max: maxFloor })
    field.onChange({ min: minFloor, max: maxFloor })
  }, [resetFlag])

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <span style={{ display: 'flex' }}>
          от &nbsp;
          {range.min}
        </span>
        <span style={{ display: 'flex' }}>
          до &nbsp;
          {range.max}
        </span>
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
