/* eslint-disable */
import { FC, useState, useEffect } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './TotalAreaBar.module.scss'

type TProps = {
  control: any
  resetFilters: any,
  resetFlag: any
}

type TRange = {
  min: number
  max: number
}

const TotalAreaBar: FC<TProps> = ({ control, resetFilters, resetFlag }) => {
  const { field } = useController({ name: 'totalArea', control })
  const [minAreaObject, setMinAreaObject] = useState<number>(0 ?? undefined)
  const [maxAreaObject, setMaxAreaObject] = useState<number>(0 ?? undefined)
  const [view, setView] = useState()
  const { objectQuery: { data, isFetching }, filteredData,
    preparedApartmentData: preparedChessData
  } = useApartmentViewContext()


  useEffect(() => {
    setView(control._fields.view._f.value)
  },[control._fields.view._f.value])
  // Function to find the object with the maximum area

  useEffect(() => {
    let minAreaObj;
    let minArea:any;
    let maxAreaObj;
    let maxArea:any;
      console.log("no list")
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
  }, [data,view])

  useEffect(() => {
    setRange({ min: minAreaObject, max: maxAreaObject })
    field.onChange({ min: Number(minAreaObject), max: Number(maxAreaObject) })
  }, [resetFlag])

  const resetRange = () => {
    setRange({ min: Number(minAreaObject), max: Number(maxAreaObject) })
  }

  console.log(data, 'datas')

  // Initial range value
  // eslint-disable-next-line max-len
  const [range, setRange] = useState<{ min: number, max: number }>({ min: Number(minAreaObject) || 0, max: Number(maxAreaObject) || 0 })

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newRange: TRange = typeof newValue === 'number'
      ? { min: newValue, max: newValue }
      // eslint-disable-next-line max-len
      : { min: newValue[0], max: newValue[1] } // Ensure newValue is an object with 'min' and 'max' properties
    setRange(newRange)
    field.onChange(newRange)
  }

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p>
          от &nbsp;
          {range.min}
          м
          <sup>2</sup>
        </p>
        <p>
          до &nbsp;
          {range.max}
          м
          <sup>2</sup>
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
