/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react'
import { Button, TextField, Box, Typography, CircularProgress, Modal } from '@mui/material'
import styles from './ModalForm.module.scss'
import { apiClient } from '../../../../core/api/apiClient'

type ModalFormProps = {
  isOpen: boolean
  onClose: () => void
  formType: string
  flatId: string
}

type FormData = {
  name: string
  phone: string
  comment: string
}

const ModalForm: React.FC<ModalFormProps> = ({ flatId, isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    comment: ''
  })
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

    const referer = {
      url: document.referrer || '',
      urlsite: window.location.hostname
    }

    const requestBody = {
      requestType: 'webchess',
      typeform:
        formType === 'Забронировать'
          ? 'booking'
          : formType === 'Рассчитать Ипотеку'
            ? 'mortgage'
            : 'question',
      dateTime: Date.now(),
      contacts: {
        phone: formData.phone,
        name: formData.name
      },
      data: {
        flatId,
        flatIdC: '',
        comment: formData.comment
      },
      referer
    }

    try {
      const response = await apiClient.post('https://gds.4dev.app/api/hs/extint/send', requestBody)

      if (response.status === 200) {
        setMessage('Запрос успешно отправлен!')
        setFormData({ name: '', phone: '', comment: '' })
        setTimeout(() => {
          setMessage('')
          onClose()
        }, 2000)
      } else {
        setMessage('Произошла ошибка. Попробуйте снова.')
        setTimeout(() => {
          setMessage('')
        }, 2000)
      }
    } catch (error) {
      setMessage('Ошибка соединения.')
      setTimeout(() => {
        setMessage('')
      }, 2000)
    } finally {
      setIsLoading(false)
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
          {(formType === 'Забронировать' || formType === 'Рассчитать Ипотеку') && (
            <div className={styles.inputGroup}>
              <TextField
                fullWidth
                label="Комментарий"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                multiline
                rows={4}
                maxRows={4}
              />
            </div>
          )}
          {formType === 'Задать вопрос' && (
            <div className={styles.inputGroup}>
              <TextField
                fullWidth
                label="Вопрос"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                multiline
                rows={4}
                maxRows={4}
              />
            </div>
          )}
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
