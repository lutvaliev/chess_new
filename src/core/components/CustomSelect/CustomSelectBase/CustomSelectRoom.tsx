import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select } from '@mui/material'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import ChevronBottomIcon from '../../icons/SvgIcons/ChevromBottonIcon'
import styles from './CustomSelectBase.module.scss'

const CustomSelectRoom = ({
  options,
  currentValue,
  handleChange,
  resetFlag,
  name,
  placeholder,
  type,
  isError,
  MenuProps,
  selectClassName,
  multiple,
  disabled,
  disabledOption,
  ...rest
}: any) => {
  const [isOpen, setIsOpen] = useState(name === 'view' || name === 'room')

  const menuElements: NodeListOf<Element> = document.querySelectorAll('#menu-')
  menuElements.forEach((element) => {
    element.setAttribute('style', 'z-index: -1; opacity: 0;')
  })

  // useEffect(() => {
  //   console.log('sssss')
  //   if (name === 'view') {
  //     handleChange([])
  //   }
  // }, [resetFlag])

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
        multiple={name === 'room' ? true : multiple}
        value={Array.isArray(currentValue) ? currentValue : []}
        displayEmpty
        onChange={(event) => {
          event.stopPropagation()
          event.preventDefault()
          handleChange(event.target.value)
          setIsOpen(true)
        }}
        renderValue={(selected) => {
          const defaultPlaceholder = <p className={classNames(styles.placeholder)}>{placeholder}</p>
          const label = options.find((elem: any) => elem.value === selected)?.label
          return label || defaultPlaceholder
        }}
        open={name === 'view' || name === 'room' ? true : isOpen}
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
              {
                [styles.cursorDefault]: disabled,
                [styles.toggle]: isOpen
              }
            )}
            onClick={!disabled ? () => setIsOpen(true) : undefined}
          >
            <ChevronBottomIcon />
          </button>
        )}
        {...rest}
      >
        {
          options.map(({ value, label, disabledOption }: any) => (
            <MenuItem
              className={`${styles.menuItem}`}
              key={value}
              value={value}
              disabled={disabledOption}
            >
              {label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default CustomSelectRoom
