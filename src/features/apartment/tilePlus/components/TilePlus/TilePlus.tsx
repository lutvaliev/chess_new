import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment } from '../../../BaseApartment'
import TilePlusCard from '../TilePlusCard/TilePlusCard'
import { TObject } from '../../../BaseApartment/types'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './TilePlus.module.scss'

const TilePlus = () => {
  const {
    objectQuery: { data, isFetching },
    preparedApartmentData: preparedTilePlusData
  } = useApartmentViewContext()

  return (
    <BaseApartment>
      {data && !isFetching
        ? (
          <div className={styles.container} >
            {!!preparedTilePlusData.length && preparedTilePlusData.map(({
              resultArray,
              flats,
              floors,
              section
            }) => (
              <div key={`${flats}_${floors}_${section}_tile_plus`} className={styles.wrapper}>
                {resultArray.map((objects: TObject[], objectsIdx) => (
                  <div
                    key={objects[objectsIdx]?.id}
                    className={styles.row}
                    style={{ gridTemplateColumns: `36px repeat(${flats}, 165px)` }}
                  >
                    <div className={classNames(styles.order, styles.rowNumber)}>
                      {Number(floors) - objectsIdx}
                    </div>
                    {objects.map((object: TObject, objectIdx) => (
                      <>
                        {object && (
                          <div key={object.id} >
                            {!objectsIdx && (
                              <p className={classNames(styles.order, styles.columnNumber)}>
                                {objectIdx}
                              </p>
                            )}
                            <TilePlusCard
                              key={object.id}
                              rooms={object.rooms}
                              flatNumber={object.number_of_object}
                              cost={object.cost}
                              area={object.area}
                              pricePerMeter={object.priceM2}
                              isDisabled={object.opacity}
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

export default TilePlus
