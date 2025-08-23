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
      <GridContainer cols={'8'}>
        {/* Sigma Key */}
        <ItemImage source={`${imgBasePath}${imgSource.sigma}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().sigma} />

        {/* Life */}
        <ItemImage source={`${imgBasePath}${imgSource.hp}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().hp} />

        {/* Energy */}
        <ItemImage source={`${imgBasePath}${imgSource.wp}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().wp} />

        {/* Death */}
        {/* <ItemImage source={`${imgBasePath}${imgSource.d}`} unlocked={false} beaten={false} changed={false} />
        <span class="text-black text-[8vw] scale-x-80 origin-top-left [text-shadow:rgb(255,_255,_255)_2px_0px_0px,_rgb(255,_255,_255)_1.75517px_0.958851px_0px,_rgb(255,_255,_255)_1.0806px_1.68294px_0px,_rgb(255,_255,_255)_0.141474px_1.99499px_0px,_rgb(255,_255,_255)_-0.832294px_1.81859px_0px,_rgb(255,_255,_255)_-1.60229px_1.19694px_0px,_rgb(255,_255,_255)_-1.97999px_0.28224px_0px,_rgb(255,_255,_255)_-1.87291px_-0.701566px_0px,_rgb(255,_255,_255)_-1.30729px_-1.51361px_0px,_rgb(255,_255,_255)_-0.421592px_-1.95506px_0px,_rgb(255,_255,_255)_0.567324px_-1.91785px_0px,_rgb(255,_255,_255)_1.41734px_-1.41108px_0px,_rgb(255,_255,_255)_1.92034px_-0.558831px_0px]">
          <Text text={itemStatus().d} />
        </span> */}

        {/* IGF */}
        {/* <ItemImage source={`${imgBasePath}${imgSource.igf}`} unlocked={false} beaten={false} changed={false} />
        <span class="text-black text-[8vw] scale-x-80 origin-top-left [text-shadow:rgb(255,_255,_255)_2px_0px_0px,_rgb(255,_255,_255)_1.75517px_0.958851px_0px,_rgb(255,_255,_255)_1.0806px_1.68294px_0px,_rgb(255,_255,_255)_0.141474px_1.99499px_0px,_rgb(255,_255,_255)_-0.832294px_1.81859px_0px,_rgb(255,_255,_255)_-1.60229px_1.19694px_0px,_rgb(255,_255,_255)_-1.97999px_0.28224px_0px,_rgb(255,_255,_255)_-1.87291px_-0.701566px_0px,_rgb(255,_255,_255)_-1.30729px_-1.51361px_0px,_rgb(255,_255,_255)_-0.421592px_-1.95506px_0px,_rgb(255,_255,_255)_0.567324px_-1.91785px_0px,_rgb(255,_255,_255)_1.41734px_-1.41108px_0px,_rgb(255,_255,_255)_1.92034px_-0.558831px_0px]">
          <Text text={itemStatus().igf} />
        </span> */}

        {/* Game Time */}
      </GridContainer>

      {/* Buster */}
      <GridContainer cols={'10'}>
        <ItemImage source={`${imgBasePath}${imgSource.b}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().b} />
        <ItemImage source={`${imgBasePath}${imgSource.ba}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().ba} />
        <ItemImage source={`${imgBasePath}${imgSource.br}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().br} />
        <ItemImage source={`${imgBasePath}${imgSource.bd}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().bd} />
        <ItemImage source={`${imgBasePath}${imgSource.bc}`} unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().bc} />
      </GridContainer>
    </>
  )
}

export default Miscellaneous
