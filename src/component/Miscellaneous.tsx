import { For } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'

import GridContainer from './GridContainer'
import ItemImage from './ItemImage'
import Text from './Text'

import type { MiscellaneousItemStatus } from '../utils/variable'

function Miscellaneous(props: { itemStatus: MiscellaneousItemStatus, }) {
  const imgSource = imgSourceObject.miscellaneous

  const itemStatus = () => props.itemStatus

  return (
    <>
      <GridContainer cols={'9'}>
        {/* <For each={['sigma', 'hp', 'wp', 'd', 'igf'] as const}>{(miscItem) => */}
        <For each={['sigma', 'hp', 'wp', 'igf'] as const}>{(miscItem) =>
          <div class="relative">
            <ItemImage source={`${imgBasePath}${imgSource[miscItem]}`} />
            <div class="absolute size-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
              <Text text={itemStatus()[miscItem]} />
            </div>
          </div>
        }</For>

        {/* Game Time */}
      </GridContainer>
    </>
  )
}

export default Miscellaneous
