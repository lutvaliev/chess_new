import React, { FC, ReactNode, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import CollapseBottomIcon from '../icons/SvgIcons/CollapseBottomIcon'
import styles from './CustomAccordion.module.scss'

type TAccordion = {
    summary: any,
    details: string | ReactNode
}
const CustomAccordion: FC<TAccordion> = ({ summary, details }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Accordion
        className={styles.accordion}
        onChange={() => setIsOpen(!isOpen)}
        disableGutters
        square
      >
        <AccordionSummary
          className={styles.title}
          expandIcon={<CollapseBottomIcon/>}>
          {summary}
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          {details}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
