/* eslint-disable */
import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment } from '../../../BaseApartment'
import { TObject } from '../../../BaseApartment/types'
import TileCard from '../TileCard/TileCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import styles from './Tile.module.scss'
import { memo, useMemo, useState } from 'react'
import lightenColor from '../../../utils/lightenColor'

const Legend = memo(({ legendItems }: { legendItems: [string, string][] }) => {
  const [isLegendVisible, setLegendVisible] = useState(false)

  if (legendItems.length === 0) return <div className={styles.legendWrapper}></div>

  return (
    <div className={styles.legendWrapper}>
      <button onClick={() => setLegendVisible(!isLegendVisible)} className={styles.legendToggle}>
        {isLegendVisible ? 'Скрыть легенду' : 'Показать легенду'}
      </button>
      <div className={`${styles.legend} ${isLegendVisible ? styles.open : ''}`}>
        <div className={styles.legend_wrapper}>
          {legendItems.map(([status, color]) => (
            <div key={status} className={styles.legendItem}>
              <span className={styles.legendColor} style={{ backgroundColor: color }} />
              <span className={styles.legendText}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const Tile = () => {
  const {
    objectQuery: { data, isFetching },
    preparedApartmentData
  } = useApartmentViewContext()

  const legendItems = useMemo(() => {
    const uniqueStatuses = new Map<string, string>()

    preparedApartmentData.forEach(({ resultArray }) =>
      resultArray.forEach((objects) =>
        objects.forEach((object) => {
          if (object?.status && object?.color) {
            if (object.status === 'Не для продажи' || object.color === 'Авто') return
            uniqueStatuses.set(object.status, lightenColor(object.color, 40))
          }
        })
      )
    )

    return Array.from(uniqueStatuses.entries())
  }, [preparedApartmentData])

  return (
    <BaseApartment>
      {data && !isFetching ? (
        <div className={styles.container}>
          {!!preparedApartmentData.length &&
            preparedApartmentData.map(({ resultArray, flats, floors, section }) => (
              <div className={styles.build} key={section}>
                <h4 className={styles.build_title}>{section}</h4>
                <div key={`${flats}_${floors}_tile`} className={styles.wrapper}>
                  {resultArray.map((objects: TObject[], objectsIdx) => (
                    <Row
                      key={`row_${objectsIdx}`}
                      objects={objects}
                      objectsIdx={objectsIdx}
                      flats={flats}
                      floors={floors}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={styles.spinnerWrapper}>
          <Spinner />
        </div>
      )}
      {data && !isFetching && <Legend legendItems={legendItems} />}
    </BaseApartment>
  )
}

const Row = memo(
  ({
    objects,
    objectsIdx,
    flats,
    floors
  }: {
    objects: TObject[]
    objectsIdx: number
    flats: number
    floors: number
  }) => {
    return (
      <div className={styles.row} style={{ gridTemplateColumns: `36px repeat(${flats}, 45px)` }}>
        <div className={classNames(styles.order, styles.rowNumber)}>
          {Number(floors) - objectsIdx}
        </div>
        {objects.map(
          (object) =>
            object && (
              <div key={object.id}>
                <TileCard
                  info={object}
                  key={object.id}
                  discounts={object.discounts}
                  secondestate={object.secondestate}
                  rooms={object.rooms}
                  flatNumber={object.number_of_object}
                  cost={object.cost}
                  area={object.area}
                  pricePerMeter={object.priceM2}
                  isDisabled={object?.opacity || object?.status === 'Не для продажи'}
                />
              </div>
            )
        )}
      </div>
    )
  }
)

export default Tile
