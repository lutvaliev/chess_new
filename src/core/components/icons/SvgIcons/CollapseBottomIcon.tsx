import { FC } from 'react'
import { TIconProps } from '../IconBase/types'
import { IconWrapper } from '../IconBase/IconWrapper/IconWrapper'
import { ReactComponent as Icon } from '../svg/collapseBottom.svg'

const CollapseBottomIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default CollapseBottomIcon
