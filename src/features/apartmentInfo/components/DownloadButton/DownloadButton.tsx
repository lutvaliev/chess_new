import React from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import IconButton from '../../../../core/components/IconButton/IconButton'

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    console.log('Download started!')
  }

  return <IconButton icon={<DownloadIcon fontSize="small" />} onClick={handleDownload} ariaLabel="Download" />
}

export default DownloadButton
