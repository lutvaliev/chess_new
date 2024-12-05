import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '../../../../core/components/IconButton/IconButton'

const LikeButton: React.FC = () => {
  const handleLike = () => {
    console.log('Liked!')
  }

  return (
    <IconButton icon={<FavoriteIcon fontSize="small" />} onClick={handleLike} ariaLabel="Like" />
  )
}

export default LikeButton
