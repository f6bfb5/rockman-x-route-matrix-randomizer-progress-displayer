import { For, Show, children, type JSX } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'

import GridContainer from './GridContainer'
import ItemImage from './ItemImage'
// import Text from './Text'
import TextAnimated from './TextAnimated'

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

  const titleMap: { [key: string]: string } = {
    'x1': imgSourceObject.title.x1,
    'x2': imgSourceObject.title.x2,
    'x3': imgSourceObject.title.x3
  }
  const title = titleMap[props.title]

  const bMapping: { [key: number]: { [key: string]: string } } = [
    {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5'
    },
    {
      0: '50%',
      1: '100%',
      2: '150%'
    },
    {
      0: '2/s',
      1: '3/s',
      2: '4/s',
      3: '5/s',
      4: '6/s',
      5: '30/s',
      6: '60/s'
    },
    {
      0: '0',
      1: '1',
      2: '∞'
    },
    {
      0: '50%',
      1: '75%',
      2: '100%',
      3: '125%',
      4: '150%'
    }
  ]
  const itemStatus = () => props.itemStatus
  const c = children(() => props.children)
  // console.log(itemStatus())

  return (
    <>
      <GridContainer cols={9}>
        <ItemImage source={`${imgBasePath}${title}`} />

        {/* Bosses */}
        <For each={imgSource.bosses}>{(boss, i) =>
          <>
            <ItemImage
              source={`${imgBasePath}${boss}`}
              itemStatus={itemStatus().bosses[i()]}
            />
          </>
        }</For>

        {/* Armor */}
        <div class="relative">
          <ItemImage source={`${imgBasePath}x.png`} />
          <For each={imgSource.armor}>{(armor, i) =>
            <Show
              when={i() < 4 && itemStatus().armor[i()][0]}
              fallback={<></>}
            >
              <div class="absolute left-0 top-0 size-[100%]">
                <ItemImage source={`${imgBasePath}${armor}`} />
              </div>
            </Show>
          }</For>
        </div>

        {/* Weapon */}
        <For each={imgSource.weapon}>{(weapon, i) =>
          <ItemImage
            source={`${imgBasePath}${weapon}`}
            itemStatus={itemStatus().weapon[i()]}
          />
        }</For>
      </GridContainer >

      <GridContainer cols={'9'}>
        {/* Misc */}
        <For each={['sigma', 'hp', 'wp', 'e'] as const}>{(miscItem) =>
          <div class="relative">
            <ItemImage source={`${imgBasePath}${imgSource[miscItem]}`} />
            <div class="absolute size-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
              <TextAnimated text={itemStatus()[miscItem][0]} />
            </div>
          </div>
        }</For>

        {/* Buster */}
        <For each={['b', 'ba', 'br', 'bd', 'bc'] as const}>{(_bItem, i) =>
          <div class="relative">
            <ItemImage source={`${imgBasePath}${imgSource.b[i()]}`} />
            <div class="absolute size-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
              <TextAnimated text={bMapping[i()][itemStatus().b[i()]]} />
            </div>
          </div>
        }</For>

        {/* <ItemImage source={`${imgBasePath}${imgSourceObject.miscellaneous.b}`} />
        <div class="relative size-[100%]">
          <div class="absolute size-[100%] left-[100%] top-[50%] translate-y-[-50%] flex justify-center">
            <TextAnimated text={itemStatus().b[0]} />
            <Text text={'/'} />
            <TextAnimated text={itemStatus().b[1]} />
            <Text text={'/'} />
            <TextAnimated text={itemStatus().b[2]} />
            <Text text={'/'} />
            <TextAnimated text={itemStatus().b[3]} />
            <Text text={'/'} />
            <TextAnimated text={itemStatus().b[4]} />
          </div>
        </div> */}

        {/* <div class="relative size-[100%]">
          <div class="absolute top-[-10%] size-[100%] flex flex-col items-center justify-center scale-[.5]">
            <Text text={`attack`} />
            <Text text={`${itemStatus().b[0]}`} />
          </div>
        </div> */}
      </GridContainer>

      <GridContainer cols={9}>
        {/* Special Armor */}
        <ItemImage
          source={`${imgBasePath}${imgSource.armor[4]}`}
          itemStatus={itemStatus().armor[4]} />

        {/* Children */}
        {c()}
      </GridContainer>
    </>
  )
}

export default Common