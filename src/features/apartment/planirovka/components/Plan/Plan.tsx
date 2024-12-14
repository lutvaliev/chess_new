/* eslint-disable no-plusplus */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Button, IconButton, MenuItem, Modal, Select } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment, useLayoutsQuery } from '../../../BaseApartment'
import PlanCard from '../PlanCard/PlanCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './Plan.module.scss'
import NotFound from '../../../../../core/components/NotFound/NotFound'

const renderPageButtons = (currentPage: any, totalPages: any, handlePageChange: any) => {
  const pageButtons = []
  const maxPagesToShow = 5

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      pageButtons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'contained' : 'outlined'}
          onClick={() => handlePageChange(i)}
          className={styles.pageButton}
          sx={{ width: '40px', height: '40px' }}
        >
          {i}
        </Button>
      )
    } else if (
      (i === currentPage - 3 && currentPage > 4)
      || (i === currentPage + 3 && currentPage < totalPages - 3)
    ) {
      pageButtons.push(
        <span key={`ellipsis-${i}`} className={styles.ellipsis}>
          ...
        </span>
      )
    }
  }

  return pageButtons
}

const Plan = () => {
  const { layoutFilterData } = useApartmentViewContext()
  const [fullImage, setFullImage] = useState('')
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const handleOpen = (img: any) => {
    setOpen(true)
    setFullImage(img)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return layoutFilterData.slice(startIndex, startIndex + itemsPerPage)
  }, [layoutFilterData, currentPage, itemsPerPage])

  const totalPages = useMemo(
    () => Math.ceil(layoutFilterData.length / itemsPerPage),
    [layoutFilterData, itemsPerPage]
  )

  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [layoutFilterData])

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.fullscreenImageContainer}>
          <img className={styles.modalImage} src={fullImage} alt="Full screen" />
        </div>
      </Modal>
      <BaseApartment>
        {layoutFilterData ? (
          layoutFilterData.length > 0 ? (
            <div className={styles.container}>
              <div className={styles.layouts}>
                {paginatedData.map((layout) => (
                  <PlanCard layout={layout} key={layout.value} handleOpen={handleOpen} />
                ))}
              </div>
              <div className={styles.paginationWrapper}>
                <Select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                  sx={{
                    height: 40,
                    '.MuiSelect-select': {
                      padding: 1
                    }
                  }}
                  className={styles.select}
                >
                  {[5, 10, 20, 50].map((count) => (
                    <MenuItem key={count} value={count}>
                      {count}
                    </MenuItem>
                  ))}
                </Select>
                <IconButton
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.arrowButton}
                >
                  <ArrowBack />
                </IconButton>
                <div className={styles.pageButtons}>
                  {renderPageButtons(currentPage, totalPages, handlePageChange)}
                </div>
                <IconButton
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={styles.arrowButton}
                >
                  <ArrowForward />
                </IconButton>
              </div>
            </div>
          ) : (
            <NotFound />
          )
        ) : (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        )}
      </BaseApartment>
    </>
  )
}

export default Plan
