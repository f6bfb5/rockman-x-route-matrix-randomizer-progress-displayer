import { createSignal, Show, onMount } from 'solid-js'
import { Motion, Presence } from "solid-motionone"
import { crc32 } from 'js-crc'

import { progressFilePath, itemLogFilePath, initItemStatus } from './utils/variable'
import { getNewItemStatus, getNewItemLogs } from './utils/parseText'

import X1 from "./component/X1"
import X2 from "./component/X2"
import X3 from "./component/X3"
import Miscellaneous from "./component/Miscellaneous"

import ItemIconTextLine from './component/ItemIconTextLine'

function App() {
  const [itemStatus, setItemStatus] = createSignal(initItemStatus)
  const [itemLogs, setItemLogs] = createSignal<string[][]>([])
  const [displayMode, setDisplayMode] = createSignal(2)
  const [fileCRC, setFileCRC] = createSignal(['', ''])

  async function fetchFile() {
    if (displayMode() == 0 || displayMode() == 1) {
      const newItemStatusLines = await fetch(progressFilePath).then(r => r.text())

      const newCRC = crc32(newItemStatusLines)
      if (fileCRC()[0] != newCRC) {
        setFileCRC([newCRC, fileCRC()[1]])
        // setItemStatus(() => parseText(initItemStatus, text))
        setItemStatus({ ...getNewItemStatus(initItemStatus, newItemStatusLines) })
      }
      // console.log(fileCRC(), newCRC)
    }
    if (displayMode() == 2) {
      const newItemLogsLines = await fetch(itemLogFilePath).then(r => r.text())

      const newCRC = crc32(newItemLogsLines)
      if (fileCRC()[1] != newCRC) {
        setFileCRC([fileCRC()[0], newCRC])
        setItemLogs([...getNewItemLogs(newItemLogsLines)])
      }
      // console.log(fileCRC(), newCRC)
    }
    return;
  }

  onMount(() => {
    setInterval(() => {
      fetchFile()
    }, 1000)
  })

  return (
    <>
      {/* <div class="grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-[repeat(9,min(10vw,8vh))] tracking-wider">
        {itemStatus().x1.e[0]}
        </div> */}
      <div
        onClick={() => setDisplayMode((displayMode() + 1) % 3)}
      >
        <Presence exitBeforeEnter>
          {/* show all games and last 5 got items */}
          <Show when={displayMode() == 0}>
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, easing: "ease" }}
              class="✏️MuzaiPixel"
            >
              <X1 itemStatus={itemStatus().x1} />
              <X2 itemStatus={itemStatus().x2} />
              <X3 itemStatus={itemStatus().x3} />
              <Miscellaneous itemStatus={itemStatus().miscellaneous} />
            </Motion.div>
          </Show>

          {/* show by current game */}
          <Show when={displayMode() == 1}>
            <Show when={itemStatus().miscellaneous.title[0] == 1}>
              <Motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
                class="✏️MuzaiPixel"
              >
                <X1 itemStatus={itemStatus().x1} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion.div>
            </Show>
            <Show when={itemStatus().miscellaneous.title[0] == 2}>
              <Motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
                class="✏️MuzaiPixel"
              >
                <X2 itemStatus={itemStatus().x2} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion.div>
            </Show>
            <Show when={itemStatus().miscellaneous.title[0] == 3}>
              <Motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
                class="✏️MuzaiPixel"
              >
                <X3 itemStatus={itemStatus().x3} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion.div>
            </Show>
          </Show>

          {/* show last logs */}
          <Show when={displayMode() == 2}>
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, easing: "ease" }}
            >
              <ItemIconTextLine lines={itemLogs()} />
            </Motion.div>
            {/* <div>
              <ItemIconTextLine lines={itemLogs()} />
            </div> */}
          </Show>
        </Presence >
      </div>
    </>
  )
}

export default App
