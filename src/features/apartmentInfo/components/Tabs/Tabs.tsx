import { useState } from 'react'
// @ts-ignore
import { TabContext, TabPanel } from '@mui/lab'
import Tabs from '../../../../core/components/tabs/Tabs/Tabs'
import Tab from '../../../../core/components/tabs/Tab/Tab'
import Object from '../Object/Object'
import Advertising from '../Advertising/Advertising'
import Statistics from '../Statistics/Statistics'
import styles from './Tabs.module.scss'

const ObjectTabs = ({ info }: any) => {
  const [filterIndex, setFilterIndex] = useState('1')

  return (
    <TabContext value={filterIndex}>
      <Tabs
        disableRipple
        className={styles.tabsWrapper}
        value={filterIndex}
        onChange={
          (_, newValue) => setFilterIndex(newValue.toString())
        }>
        <Tab disableRipple value="1" label="Объект"/>
        <Tab disableRipple value="2" label="Реклама"/>
        <Tab disableRipple value="3" label="Статистика"/>
      </Tabs>
      <TabPanel value="1">
        <Object info={info}/>
      </TabPanel>
      <TabPanel value="2">
        <Advertising/>
      </TabPanel>
      <TabPanel value="3">
        <Statistics/>
      </TabPanel>
    </TabContext>
  )
}

export default ObjectTabs
