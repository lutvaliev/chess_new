import React, { ReactNode } from 'react'
import { ApartmentViewProvider, useApartmentViewContext } from '../state/ApartmentViewState'
import { TView } from '../types'
import { Chess, Tile, TilePlus, List } from '../../index'

const viewMap: {[key in TView]: ReactNode} = {
  CHESS: <Chess/>,
  TILE: <Tile/>,
  TILE_PLUS: <TilePlus/>,
  LIST: <List/>
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
