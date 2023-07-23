import classNames from 'classnames'
import { useObjectChessQuery, useSectionQuery } from '../../querries'
import { ChessProvider, useChessContext } from '../../state/useChessState'
import { splitArrIntoChunks } from '../../utils/splitArrIntoChunks'
import Card from '../Card/Card'
import RowDescription from '../RowDescription/RowDescription'
import ObjectFilterMain from '../ChessFilters/ObjectFilter/ObjectFilterMain/ObjectFilterMain'
import AdditionalFilterMain from '../ChessFilters/AdditionalFilter/AdditionalFilterMain/AdditionalFilterMain'
import GeneralFilterMain from '../ChessFilters/GeneralFilter/GeneralFilterMain/GeneralFilterMain'
import { TSection } from '../../types'
import styles from './Chess.module.scss'

const useChessParams = () => {
  const { watch } = useChessContext()
  const { section: sectionId, building: buildingId } = watch()
  return {
    id: sectionId || buildingId,
    filter: sectionId ? 'section' : 'building'
  }
}

const useDefaultChessMetrics = () => {
  const { watch } = useChessContext()
  const { building: buildingId, section: sectionId } = watch()

  const { data: allSectionsData } = useSectionQuery(buildingId, 'building')
  const { data: sectionData } = useSectionQuery(sectionId, 'section')

  if (!allSectionsData?.data && !sectionData?.data) {
    return
  }

  const maxFlatCount = () => {
    const flat = allSectionsData?.data?.map((elem: TSection) => elem?.number_per_floor)
    return Math.max(...flat)
  }

  const maxFloorCount = () => {
    const floors = allSectionsData?.data?.map((elem: TSection) => elem?.number_of_floors)
    return Math.max(...floors)
  }

  const maxFlat = maxFlatCount()
  const maxFloor = maxFloorCount()

  const numberPerFloor = sectionId ? sectionData?.data?.[0]?.number_per_floor : maxFlat
  const numberOfFloors: any = sectionId ? sectionData?.data?.[0]?.number_of_floors : maxFloor

  // eslint-disable-next-line consistent-return
  return {
    numberPerFloor,
    numberOfFloors
  }
}

const Chess = () => {
  const chessParams = useChessParams()
  const { data: chessData } = useObjectChessQuery(chessParams)
  const chessMetrics = useDefaultChessMetrics()

  const sortedBySection = chessData?.reduce((acc: any, cur: any) => {
    // eslint-disable-next-line no-underscore-dangle
    acc[cur?.section_] = [...acc[cur?.section_] || [], cur]
    return acc
  }, {})

  const chunkedBySection = Object?.values(sortedBySection || {})

  const chunkedArray = chunkedBySection?.map((elem: any) =>
    // eslint-disable-next-line max-len
    splitArrIntoChunks(chessMetrics?.numberOfFloors, chessMetrics?.numberPerFloor, elem || []))

  return (
    <>
      <div className={styles.header}>
        <GeneralFilterMain/>
        <ObjectFilterMain/>
        <AdditionalFilterMain />
      </div>
      <div >
        <div className={styles.container}>
          { chunkedArray
            && chunkedArray
              .map((chunkedItem: any) => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.wrapper}>
                  {chunkedItem?.reverse()?.map((chunk: any, chunkIdx: number) => (
                    <div
                    // eslint-disable-next-line react/no-array-index-key
                      key={chunkIdx}
                      className={styles.row}
                      style={{
                        gridTemplateColumns:
                              `126px repeat(${chessMetrics?.numberPerFloor}, 170px)`
                      }}
                    >
                      <div className={classNames(styles.order, styles.rowNumber)}>
                        <RowDescription
                          floor={
                            Number(chessMetrics?.numberOfFloors) - chunkIdx
                          }/>
                      </div>
                      {chunk.map((item: any, index: number) => (
                        <>
                          {item && (
                            <div key={item.id}>
                              {!chunkIdx && (
                                <p className={classNames(styles.order, styles.columnNumber)}>
                                  {index}
                                </p>
                              )}
                              <Card
                                area={item?.area}
                                flatNumber={item?.number_of_object}
                                rooms={item?.rooms}
                                pricePerSquare={item?.priceM2}
                              />
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </>
  )
}

export default () => (
  <ChessProvider>
    <Chess/>
  </ChessProvider>
)
