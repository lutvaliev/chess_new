import { Box, Typography, Button } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import notFoundStyles from './NotFound.module.scss'

const NotFound = () => (
  <Box
    className={notFoundStyles.container}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100%"
    textAlign="center"
    padding={3}
  >
    <SentimentVeryDissatisfiedIcon sx={{ fontSize: 120, color: '#1976d2', marginBottom: 2 }} />
    <Typography variant="h5" className={notFoundStyles.title} gutterBottom>
      Ничего не найдено
    </Typography>
    <Typography variant="body1" className={notFoundStyles.message} gutterBottom>
      Попробуйте изменить фильтры, чтобы увидеть больше результатов.
    </Typography>
  </Box>
)

export default NotFound
