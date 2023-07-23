import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select } from '@mui/material'
import { useState } from 'react'
import classNames from 'classnames'
import ChevronBottomIcon from '../../icons/SvgIcons/ChevromBottonIcon'
import styles from './CustomSelectBase.module.scss'

const CustomSelectBase = ({
  options,
  currentValue,
  handleChange,
  placeholder,
  type,
  isError,
  MenuProps,
  selectClassName,
  multiple,
  disabled,
  ...rest
}: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FormControl fullWidth>
      <Select
        className={classNames(styles.select, selectClassName, {
          [styles.error]: isError
        })}
        inputProps={{
          inputMode: 'none'
        }}
        disabled={disabled}
        multiple={multiple}
        value={currentValue}
        displayEmpty
        onChange={(event) => {
          event.stopPropagation()
          event.preventDefault()
          handleChange(event.target.value)
        }}
        renderValue={(selected) => {
          const defaultPlaceholder = <p className={classNames(styles.placeholder)}>{placeholder}</p>
          const label = options.find((elem: any) => elem.value === selected)?.label
          return label || defaultPlaceholder
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => {
          setIsOpen(false)
        }}
        IconComponent={(props) => (
          <button
            {...props}
            type="button"
            className={classNames(
              styles.iconWrapper,

              { [styles.cursorDefault]: disabled,
                [styles.toggle]: isOpen
              }
            )}
            onClick={!disabled ? () => setIsOpen(true) : undefined}
          >
            <ChevronBottomIcon/>
          </button>
        )}
        {...rest}
      >
        {
          options.map(({ value, label }: any) => (
            <MenuItem
              className={styles.menuItem}
              key={value}
              value={value}>
              {label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default CustomSelectBase
