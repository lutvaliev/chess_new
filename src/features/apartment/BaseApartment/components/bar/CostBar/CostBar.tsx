/* eslint-disable */
import { FC, useState, useEffect, useCallback } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './CostBar.module.scss'
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

const CostBar: FC<TProps> = ({ control, resetFilters, resetFlag }) => {
  const { field } = useController({ name: 'cost', control })
  // eslint-disable-next-line max-len
  const [minCostObject, setMinCostObject] = useState<number>(0)
  const [maxCostObject, setMaxCostObject] = useState<number>(0)
  const [view, setView] = useState()
  const { objectQuery: { data, isFetching },
    preparedApartmentData: preparedChessData
  } = useApartmentViewContext()

  useEffect(() => {
    setView(control?._fields?.view?._f.value)
  },[control?._fields?.view?._f.value])
  
  useEffect(() => {
    if (!data || data.length === 0) {
      setMinCostObject(0)
      setMaxCostObject(0)
      return
    }

    let minCostObj = data[0]
    let minCost = data[0].cost
    let maxCostObj = data[0]
    let maxCost = data[0].cost

    data.forEach((obj) => {
      if (obj.cost > maxCost) {
        maxCost = obj.cost
        maxCostObj = obj
      } else if (obj.cost < minCost) {
        minCost = obj.cost
        minCostObj = obj
      }
    })

    setMinCostObject(Number(minCostObj.cost))
    setMaxCostObject(Number(maxCostObj.cost))
    setRange({ min: Number(minCostObj.cost), max: Number(maxCostObj.cost) })
  }, [data,view])

  // Initial range value
  // eslint-disable-next-line max-len
  const [range, setRange] = useState<{ min: number, max: number }>({ min: Number(minCostObject) || 0, max: Number(maxCostObject) || 0 })

  const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
	const newRange: TRange = Array.isArray(newValue)
	  ? { min: newValue[0], max: newValue[1] }
	  : { min: newValue, max: newValue };
	setRange(newRange);
	field.onChange(newRange);
  }, [field]);


  useEffect(() => {
    setRange({ min: minCostObject, max: maxCostObject })
    field.onChange({ min: Number(minCostObject), max: Number(maxCostObject) })
  }, [resetFlag])

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p style={{ display: 'flex' }}>
          от &nbsp;
          {range.min}
          <RubleIcon/>
        </p>
        <p style={{ display: 'flex' }}>
          до &nbsp;
          {range.max}
          <RubleIcon/>
        </p>
      </Typography>
      <Slider
        value={[range.min, range.max]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaLabel={(index) => (index === 0 ? 'Minimum' : 'Maximum')}
        min={Number(minCostObject)}
        max={Number(maxCostObject)} // Adjust the range as needed
      />
    </div>
  )
}

export default CostBar
