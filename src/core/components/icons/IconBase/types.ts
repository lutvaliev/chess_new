import React, { ReactElement } from 'react'

export type TIconWrapperProps = {
  children: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
} & Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

export type TIconProps = Omit<TIconWrapperProps, 'children'>
