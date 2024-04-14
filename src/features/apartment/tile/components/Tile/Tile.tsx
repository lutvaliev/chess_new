import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment } from '../../../BaseApartment'
import { TObject } from '../../../BaseApartment/types'
import TileCard from '../TileCard/TileCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './Tile.module.scss'

const Tile = () => {
  const {
    objectQuery: { data, isFetching },
    preparedApartmentData: preparedTileData
  } = useApartmentViewContext()

  return (
    <BaseApartment>
      {data && !isFetching
        ? (
          <div className={styles.container}>
            {!!preparedTileData.length && preparedTileData.map(({
              resultArray,
              flats,
              floors
            }) => (
              <div key={`${flats}_${floors}_tile`} className={styles.wrapper}>
                {resultArray.map((objects: TObject[], objectsIdx) => (
                  <div
                    key={objects[objectsIdx]?.id}
                    className={styles.row}
                    style={{ gridTemplateColumns: `36px repeat(${flats}, 65px)` }}
                  >
                    <div className={classNames(styles.order, styles.rowNumber)}>
                      {Number(floors) - objectsIdx}
                    </div>
                    {objects.map((object: TObject, objectIdx) => (
                      <>
                        {object && (
                          <div key={object.id}>
                            {!objectsIdx && (
                              <p className={classNames(styles.order, styles.columnNumber)}>
                                {objectIdx}
                              </p>
                            )}
                            <TileCard
                              info={object}
                              key={object.id}
                              rooms={object.rooms}
                              flatNumber={object.number_of_object}
                              cost={object.cost}
                              area={object.area}
                              pricePerMeter={object.priceM2}
                              isDisabled={object?.opacity}
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
        )
        : (
          <div className={styles.spinnerWrapper}>
            <Spinner/>
          </div>
        )}
    </BaseApartment>
  )
}

export default Tile
