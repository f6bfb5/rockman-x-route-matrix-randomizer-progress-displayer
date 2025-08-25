import { For } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'
import type { X3ItemStatus } from '../utils/variable'

import ItemImage from './ItemImage'
import Common from './Common'

function X3(props: {
  itemStatus: X3ItemStatus,
}) {
  const imgSource = imgSourceObject.x3

  const itemStatus = () => props.itemStatus

  return (
    <>
      <Common itemStatus={itemStatus()} title='x3'>
        {/* Subbosses */}
        <For each={imgSource.subbosses}>{(subbosses, i) =>
          <ItemImage source={`${imgBasePath}${subbosses}`}
            itemStatus={itemStatus().subbosses[i()]}
          />
        }</For>

        {/* Ride Armor */}
        <For each={imgSource.ridearmor}>{(ridearmor, i) =>
          <ItemImage source={`${imgBasePath}${ridearmor}`}
            itemStatus={itemStatus().ridearmor[i()]}
          />
        }</For>
      </Common>
    </>
  )
}

export default X3
