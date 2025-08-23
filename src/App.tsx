import { createSignal, onMount } from 'solid-js'
import { recordFilePath, initItemStatus } from './utils/variable'
import parseText from './utils/parseText'

import X1 from "./component/X1"
import X2 from "./component/X2"
import X3 from "./component/X3"
import Miscellaneous from "./component/Miscellaneous"

function App() {
  const [itemStatus, setItemStatus] = createSignal(initItemStatus)

  async function fetchFile() {
    const text = await fetch(recordFilePath).then(r => r.text());
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
      {/* <div class="grid-cols-8 grid-cols-10 bg-[url()]">
        {itemStatus().x1.e[0]}
      </div> */}
      <X1 itemStatus={itemStatus().x1} />
      <div class="mt-1"></div>
      <X2 itemStatus={itemStatus().x2} />
      <div class="mt-1"></div>
      <X3 itemStatus={itemStatus().x3} />
      <div class="mt-1"></div>
      <Miscellaneous itemStatus={itemStatus().miscellaneous} />
    </>
  )
}

export default App
