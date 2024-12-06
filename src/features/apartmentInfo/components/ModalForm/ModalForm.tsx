import React, { useState } from 'react'
import { Button, TextField, Box, Typography, CircularProgress, Modal } from '@mui/material'
import styles from './ModalForm.module.scss'

type ModalFormProps = {
  isOpen: boolean;
  onClose: () => void;
  formType: string;
};

type FormData = {
  name: string;
  phone: string;
};

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType })
      })

      if (response.ok) {
        setMessage('Запрос успешно отправлен!')
      } else {
        setMessage('Произошла ошибка. Попробуйте снова.')
      }
    } catch (error) {
      setMessage('Ошибка соединения.')
    } finally {
      setIsLoading(false)

      setTimeout(() => {
        setMessage('')
        onClose()
      }, 2000)
    }
  }

  return (
    <Modal open={isOpen} onClose={onClose} className={styles.modalBackdrop}>
      <Box className={styles.modalContent}>
        <Typography variant="h6" component="h2" className={styles.title}>
          {formType}
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <TextField
              fullWidth
              label="ФИО"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <TextField
              fullWidth
              label="Номер телефона"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={onClose} disabled={isLoading} variant="outlined">
              Отмена
            </Button>
            <Button type="submit" disabled={isLoading} variant="contained">
              {isLoading ? <CircularProgress size={24} /> : 'Отправить'}
            </Button>
          </div>
        </form>
        <div className={`${styles.message} ${message ? styles.message_open : ''}`}>
          <p className={styles.message_text}>{message}</p>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalForm
