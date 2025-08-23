import { For } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'
import type { X2ItemStatus } from '../utils/variable'

import ItemImage from './ItemImage'
import Common from './Common'

function X2(props: {
  itemStatus: X2ItemStatus,
}) {
  const imgSource = imgSourceObject.x2

  const itemStatus = () => props.itemStatus

  return (
    <>
      <Common itemStatus={itemStatus()} title='x2'>
        {/* Zero */}
        <For each={imgSource.zero}>{(zero, i) =>
          <ItemImage source={`${imgBasePath}${zero}`}
            unlocked={itemStatus().zero[i()]}
            beaten={false}
            changed={itemStatus().zero[i()]} />
        }</For>
      </Common>
    </>
  )
}

export default X2
