import classNames from 'classnames'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import { BaseApartment } from '../../../BaseApartment'
import { TObject } from '../../../BaseApartment/types'
import PlanCard from '../PlanCard/PlanCard'
import Spinner from '../../../../../core/components/Spinner/Spinner'
import RowDescription from '../../../chess/components/RowDescription/RowDescription'
import styles from '../../../chess/components/Chess/Chess.module.scss'

const Plan = () => {
  const { objectQuery: { data, isFetching },
    preparedApartmentData: preparedChessData
  } = useApartmentViewContext()
  return (
    <div>empty</div>
    // <BaseApartment>
    //   {data && !isFetching
    //     ? (
    //       <div className={styles.container}>
    //         {!!preparedChessData.length && preparedChessData.map(({
    //           resultArray,
    //           flats,
    //           floors
    //         }) => (
    //           <div key={`${floors}_${flats}_chess`} className={styles.wrapper}>
    //             {resultArray.map((objects: TObject[], objectsIdx) => (
    //               <div
    //                 key={objects[objectsIdx]?.id}
    //                 className={styles.row}
    //                 style={{ gridTemplateColumns: `repeat(${flats}, 270px)` }}
    //               >
    //                 {objects.map((object: TObject, objectIdx) => (
    //                   <>
    //                     {object && (
    //                       <div key={object.id} id={object.id}>
    //                         {/* {!objectsIdx && (
    //                           <p className={classNames(styles.order, styles.columnNumber)}>
    //                             {objectIdx}
    //                           </p>
    //                         )} */}
    //                         <PlanCard
    //                           info={object}
    //                           color={object.color}
    //                           area={object.area}
    //                           flatNumber={object.number_of_object}
    //                           rooms={object.rooms}
    //                           pricePerSquare={object.priceM2}
    //                           isDisabled={object?.opacity}
    //                           cost={object.cost}
    //                           balconies={object.Balconies}
    //                         />
    //                       </div>
    //                     )}
    //                   </>
    //                 ))}
    //               </div>
    //             ))}
    //           </div>
    //         ))}
    //       </div>
    //     )
    //     : (
    //       <div className={styles.spinnerWrapper}>
    //         <Spinner/>
    //       </div>
    //     )}
    // </BaseApartment>
  )
}

export default Plan
