import { FC, ReactNode } from 'react'
import { TooltipProps, Tooltip } from '@mui/material'
import styles from './CustomTooltip.module.scss'

type TProps = {
  children: ReactNode
} & TooltipProps
const CustomTooltip: FC<TProps> = ({ children, ...rest }) => (
  <Tooltip
    {...rest}
    componentsProps={{ tooltip: { className: styles.wrapper } }}
    arrow
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -8]
            }
          }
        ]
      },
      arrow: {
        style: {
          color: '#fff'
        }
      }
    }}
  >
    {children}
  </Tooltip>
)

export default CustomTooltip
