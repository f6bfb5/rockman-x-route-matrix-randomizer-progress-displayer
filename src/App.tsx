import { createSignal, Show, onMount } from 'solid-js'
import { Motion, Presence } from "solid-motionone"

import { progressFilePath, initItemStatus } from './utils/variable'
import parseText from './utils/parseText'

import X1 from "./component/X1"
import X2 from "./component/X2"
import X3 from "./component/X3"
import Miscellaneous from "./component/Miscellaneous"

function App() {
  const [itemStatus, setItemStatus] = createSignal(initItemStatus)
  const [displayMode, setDisplayMode] = createSignal(0)

  async function fetchFile() {
    // only on displaymode1&2
    // rename to fetch progress?
    const text = await fetch(progressFilePath).then(r => r.text());
    // setItemStatus(() => parseText(initItemStatus, text))
    setItemStatus({ ...parseText(initItemStatus, text) })
    return;
  }

  onMount(() => {
    setInterval(() => {
      fetchFile()
    }, 1000)
  })

  return (
    <>
      {/* <div class="grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-[repeat(9,min(10vw,8vh))]">
        {itemStatus().x1.e[0]}
        </div> */}
      <div
        onClick={() => setDisplayMode(displayMode() == 0 ? 1 : 0)}
      // class="max-w-[720px] m-auto"
      >
        <Presence exitBeforeEnter>
          {/* show all games */}
          <Show when={displayMode() == 0}>
            <Motion
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, easing: "ease" }}
            >
              <X1 itemStatus={itemStatus().x1} />
              <X2 itemStatus={itemStatus().x2} />
              <X3 itemStatus={itemStatus().x3} />
              <Miscellaneous itemStatus={itemStatus().miscellaneous} />
            </Motion>
          </Show>

          {/* show by current game */}
          <Show when={displayMode() == 1}>
            <Show when={itemStatus().miscellaneous.title[0] == 1}>
              <Motion
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
              >
                <X1 itemStatus={itemStatus().x1} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion>
            </Show>
            <Show when={itemStatus().miscellaneous.title[0] == 2}>
              <Motion
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
              >
                <X2 itemStatus={itemStatus().x2} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion>
            </Show>
            <Show when={itemStatus().miscellaneous.title[0] == 3}>
              <Motion
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, easing: "ease" }}
              >
                <X3 itemStatus={itemStatus().x3} />
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Motion>
            </Show>
          </Show>
        </Presence >
      </div>
    </>
  )
}

export default App
