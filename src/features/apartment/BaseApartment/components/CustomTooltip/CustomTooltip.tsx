import { Tooltip } from '@mui/material'
import React, { ReactElement } from 'react'

interface CustomTooltipInterface {
  title: string
  children: ReactElement
}

const CustomTooltip: React.FC<CustomTooltipInterface> = ({ title, children }) => (
  <Tooltip
    arrow
    title={title}
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -10]
            }
          }
        ]
      }
    }}
  >
    {children}
  </Tooltip>
)

export default CustomTooltip
