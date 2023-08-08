import { FC } from 'react'
import { TIconProps } from '../IconBase/types'
import { IconWrapper } from '../IconBase/IconWrapper/IconWrapper'
import { ReactComponent as Icon } from '../svg/mail.svg'

const EmailIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default EmailIcon
