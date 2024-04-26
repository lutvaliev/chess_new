import { FC, useState } from 'react'
import { Slider, Typography } from '@mui/material'
import { useController, Control } from 'react-hook-form'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './CostBar.module.scss'

type TProps = {
  control: Control<any>
}

const CostBar: FC<TProps> = ({ control }) => {
  const { field } = useController({ name: 'Cost', control })

  // Initial range values
  const [range, setRange] = useState([0, 100]) // Adjust these values as needed

  // Handle slider range change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as [number, number])
    field.onChange(newValue) // Update the form value
  }

  console.log(range, 'range')

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" gutterBottom className={styles.rangeNumbers}>
        <p>
          от&nbsp;
          {range[0]}
        </p>
        <p>
          до&nbsp;
          {range[1]}
        </p>
      </Typography>
      <Slider
        value={range}
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

export default CostBar
