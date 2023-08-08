import React, { FC } from 'react'
import { Tabs as MaterialTabs, TabsProps } from '@mui/material'

const Tabs: FC<TabsProps> = ({ children, ...rest }) => (
  <MaterialTabs {...rest}>{children}</MaterialTabs>
)

export default Tabs
