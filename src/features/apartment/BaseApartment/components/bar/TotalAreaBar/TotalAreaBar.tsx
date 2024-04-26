import { FC, useState } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './TotalAreaBar.module.scss'

type TProps = {
  control: Control<any>
}

type TRange = {
  min: number
  max: number
}

const TotalAreaBar: FC<TProps> = ({ control }) => {
  const { field } = useController({ name: 'totalArea', control })

  // Initial range value
  // eslint-disable-next-line max-len
  const [range, setRange] = useState<{ min: number, max: number }>({ min: 0, max: 100 }) // Adjust these values as needed

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newRange: TRange = typeof newValue === 'number'
      ? { min: newValue, max: newValue }
      // eslint-disable-next-line max-len
      : { min: newValue[0], max: newValue[1] } // Ensure newValue is an object with 'min' and 'max' properties
    setRange(newRange)
    field.onChange(newRange)
  }

  console.log(range, 'range')

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p>
          от &nbsp;
          {range.min}
        </p>
        <p>
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
        min={0}
        max={100} // Adjust the range as needed
      />
    </div>
  )
}

export default TotalAreaBar
