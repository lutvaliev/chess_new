/* eslint-disable */
import { FC, useState, useEffect, useCallback } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './TotalAreaBar.module.scss'

type TProps = {
  control: any
  resetFilters: any
  resetFlag: any
}

type TRange = {
  min: number
  max: number
}

const TotalAreaBar: FC<TProps> = ({ control, resetFilters, resetFlag }) => {
  const { field } = useController({ name: 'totalArea', control })
  const [minAreaObject, setMinAreaObject] = useState<number>(0)
  const [maxAreaObject, setMaxAreaObject] = useState<number>(0)
  const [view, setView] = useState()
  const {
    objectQuery: { data, isFetching },
    filteredData,
    preparedApartmentData: preparedChessData
  } = useApartmentViewContext()

  useEffect(() => {
    setView(control._fields.view._f.value)
  }, [control._fields.view._f.value])
  // Function to find the object with the maximum area

  useEffect(() => {
    let minAreaObj
    let minArea: any
    let maxAreaObj
    let maxArea: any
    if (!data || data.length === 0) {
      setMinAreaObject(0)
      setMaxAreaObject(0)
      return
    }
    minAreaObj = data[0]
    minArea = data[0].area
    maxAreaObj = data[0]
    maxArea = data[0].area
    data.forEach((obj) => {
      if (obj.area > maxArea) {
        maxArea = obj.area
        maxAreaObj = obj
      } else if (obj.area < minArea) {
        minArea = obj.area
        minAreaObj = obj
      }
    })
    setMinAreaObject(Number(minAreaObj.area))
    setMaxAreaObject(Number(maxAreaObj.area))
    setRange({ min: Number(minAreaObj.area), max: Number(maxAreaObj.area) })
  }, [data, view])

  useEffect(() => {
    setRange({ min: minAreaObject, max: maxAreaObject })
    field.onChange({ min: Number(minAreaObject), max: Number(maxAreaObject) })
  }, [resetFlag])

  const resetRange = () => {
    setRange({ min: Number(minAreaObject), max: Number(maxAreaObject) })
  }

  // Initial range value
  // eslint-disable-next-line max-len
  const [range, setRange] = useState<{ min: number; max: number }>({
    min: Number(minAreaObject) || 0,
    max: Number(maxAreaObject) || 0
  })

  const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
	const newRange: TRange = Array.isArray(newValue)
	  ? { min: newValue[0], max: newValue[1] }
	  : { min: newValue, max: newValue };
	setRange(newRange);
	field.onChange(newRange);
  }, [field]);


  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p style={{ display: 'flex' }}>
          от &nbsp;
          {range.min}м<sup>2</sup>
        </p>
        <p style={{ display: 'flex' }}>
          до &nbsp;
          {range.max}м<sup>2</sup>
        </p>
      </Typography>
      <Slider
        value={[range.min, range.max]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaLabel={(index) => (index === 0 ? 'Minimum' : 'Maximum')}
        min={Number(minAreaObject)}
        max={Number(maxAreaObject)} // Adjust the range as needed
      />
    </div>
  )
}

export default TotalAreaBar
