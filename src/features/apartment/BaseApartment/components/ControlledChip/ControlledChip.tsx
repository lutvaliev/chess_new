import React from 'react'
import { Chip } from '@mui/material'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import styles from './ControlledChip.module.scss'

interface ControlledChipProps {
  name:
    | 'district'
    | 'building'
    | 'section'
    | 'layouts'
    | 'apartments'
    | 'apartmentLayout'
    | 'cost'
    | 'room'
    | 'status'
    | 'actions'
    | 'totalArea'
    | 'floor'
    | 'view'
    | 'sorting'
    | 'advantages'
    | 'furnish'
    | 'feature'
  value: string
  label: string
  control: any
}

const ControlledChip: React.FC<ControlledChipProps> = ({ control, name, value, label }) => {
  const {
    formReturn: { getValues, setValue }
  } = useApartmentViewContext()

  const isSelected = getValues(name)?.includes(value)

  const handleToggle = () => {
    const currentValues = getValues(name) || []
    const newValues = isSelected
      ? currentValues.filter((item: string) => item !== value)
      : [...currentValues, value]
    setValue(name, newValues, { shouldValidate: true })
  }

  return (
    <Chip
      label={label}
      onClick={handleToggle}
      color={isSelected ? 'primary' : 'default'}
      variant={isSelected ? 'filled' : 'outlined'}
      className={styles.chip}
      sx={{ marginTop: '5px', marginRight: '8px', border: '1px solid #D0E2FA' }}
    />
  )
}

export default ControlledChip
