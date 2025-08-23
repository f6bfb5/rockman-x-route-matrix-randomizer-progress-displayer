import { For, children, type JSX } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'

import GridContainer from './GridContainer'
import ItemImage from './ItemImage'
import Text from './Text'

function Common(props: {
  children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined,
  itemStatus: any,
  title: string
}) {
  const imgSourceMap: { [key: string]: any } = {
    'x1': imgSourceObject.x1,
    'x2': imgSourceObject.x2,
    'x3': imgSourceObject.x3
  }
  const imgSource = imgSourceMap[props.title]

  const e = imgSourceObject.miscellaneous.e

  const titleMap: { [key: string]: string } = {
    'x1': imgSourceObject.title.x1,
    'x2': imgSourceObject.title.x2,
    'x3': imgSourceObject.title.x3
  }
  const title = titleMap[props.title]

  const itemStatus = () => props.itemStatus
  const c = children(() => props.children)
  // console.log(itemStatus())

  return (
    <>
      <GridContainer cols={8}>
        {/* Bosses */}
        <For each={imgSource.bosses}>{(boss, i) =>
          <>
            <ItemImage
              source={`${imgBasePath}${boss}`}
              unlocked={itemStatus().bosses[i()]}
              beaten={itemStatus().bosses[i()]}
              changed={itemStatus().bosses[i()]} />
          </>
        }</For>

        {/* Weapon */}
        <For each={imgSource.weapon}>{(weapon, i) =>
          <ItemImage
            source={`${imgBasePath}${weapon}`}
            unlocked={itemStatus().weapon[i()]}
            beaten={itemStatus().weapon[i()]}
            changed={itemStatus().weapon[i()]} />
        }</For>

        {/* Armor */}
        <For each={imgSource.armor}>{(armor, i) =>
          <ItemImage source={`${imgBasePath}${armor}`}
            unlocked={itemStatus().armor[i()]}
            // beaten={itemStatus().armor[i()]}
            beaten={false}
            changed={itemStatus().armor[i()]} />
        }</For>

        {/* E Tank */}
        <ItemImage source={`${imgBasePath}${e}`}
          unlocked={true} beaten={false} changed={false} />
        <Text text={itemStatus().e[0]} />

        <ItemImage source={`${imgBasePath}${title}`}
          unlocked={true} beaten={false} changed={false} />

        {c()}
      </GridContainer>
    </>
  )
}

export default Common