import React, { ReactNode } from 'react'
import { ApartmentViewProvider, useApartmentViewContext } from '../state/ApartmentViewState'
import { TView } from '../types'
import { Tile, TilePlus, List, Plan } from '../../index'
// import { Chess, Tile, TilePlus, List, Plan } from '../../index'

const viewMap: {[key in TView]: ReactNode} = {
  // CHESS: <Chess/>,
  TILE: <Tile/>,
  TILE_PLUS: <TilePlus/>,
  LIST: <List/>,
  PLAN: <Plan/>
}

const ApartmentView = () => {
  const { formReturn: { watch } } = useApartmentViewContext()
  return (
    <>
      {viewMap[watch('view')]}
    </>
  )
}

export default () => (
  <ApartmentViewProvider>
    <ApartmentView/>
  </ApartmentViewProvider>
)
