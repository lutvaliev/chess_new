import React, { FC, ReactNode } from 'react'
import { Drawer, DrawerProps } from '@mui/material'

type TDrawer = {
    anchor: 'right' | 'left' | 'start' | 'end'
    isOpen: boolean
    onClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    children: ReactNode
} & DrawerProps

const CustomDrawer: FC<TDrawer> = ({ anchor, isOpen, onClose, children, ...rest }) => (
  <Drawer
    {...rest}
    anchor={anchor}
    open={isOpen}
    onClose={onClose}
  >
    {children}
  </Drawer>
)

export default CustomDrawer
