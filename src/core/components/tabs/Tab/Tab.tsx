import { FC, ForwardRefExoticComponent, memo, RefAttributes } from 'react'
import { Tab as MaterialTab, TabProps } from '@mui/material'
import { LinkProps } from 'react-router-dom'

type TComponentProps = {
    component?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
    to?: string
}

type TProps = TabProps & TComponentProps

const Tab: FC<TProps> = ({ ...rest }) => <MaterialTab {...rest}/>

export default memo(Tab)
