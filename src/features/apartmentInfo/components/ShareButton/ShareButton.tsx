import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply'
import IconButton from '../../../../core/components/IconButton/IconButton'

const ShareButton: React.FC = () => {
  const handleShare = () => {
    console.log('Shared!')
  }

  return <IconButton icon={<ReplyIcon fontSize="small" />} onClick={handleShare} ariaLabel="Share" />
}

export default ShareButton
