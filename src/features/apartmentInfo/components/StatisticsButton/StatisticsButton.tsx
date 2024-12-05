import React from 'react'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import IconButton from '../../../../core/components/IconButton/IconButton'

const StatisticsButton: React.FC = () => {
  const handleStatistics = () => {
    console.log('Statistics clicked!')
  }

  return (
    <IconButton
      icon={<EqualizerIcon fontSize="small" />}
      onClick={handleStatistics}
      ariaLabel="View Statistics"
    />
  )
}

export default StatisticsButton
