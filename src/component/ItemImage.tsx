import { Show } from 'solid-js'

function getValue(status: string, valueSource: boolean | any[]) {
  switch (status) {
    case 'unlocked':
      if (Array.isArray(valueSource)) return valueSource[0]
      return valueSource
      break;
    case 'beaten':
      if (Array.isArray(valueSource)) return valueSource[1]
      return false
      break;
    case 'changed':
      if (Array.isArray(valueSource)) return valueSource[2]
      return false
      break;
  }
}

function ItemImage(props: { source: string, unlocked: boolean, beaten: boolean, changed: boolean }) {
  const { source } = props

  return (
    <div class="relative rounded-xl overflow-hidden">
      <div
        class="rounded-xl"
        classList={{
          'border-[.5vw] border-solid [border-image-slice:1] [border-image-source:conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]': getValue('changed', props.changed)
        }}>
        <img
          src={`${source}`}
          class="relative w-[100%] h-[100%] object-contain align-middle"
          classList={{
            'blur-[.5vw]': !getValue('unlocked', props.unlocked),
            'grayscale': getValue('beaten', props.beaten),
            // 'border-[.5vw] border-solid [border-image-slice:1] [border-image-source:conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]': getValue('changed', props.changed)
          }}
        />
      </div>
      {/* <div
        style={{ 'background-image': `url(${source})` }}
        class={`bg-cover w-[100%] h-[100%] aspect-square relative`}
        classList={{
          'blur-[.5vw]': !getValue('unlocked', props.unlocked),
          'backdrop-grayscale': getValue('beaten', props.beaten),
          'border-[.5vw] border-solid [border-image-slice:1] [border-image-source:conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]': getValue('changed', props.changed)
        }}
      ></div> */}
      <Show
        when={!getValue('unlocked', props.unlocked)}
        fallback={<></>}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          stroke="white"
          class="size-[50%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <path
            fill-rule="evenodd"
            d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
            clip-rule="evenodd" />
        </svg>
      </Show>

    </div >
  )
}

export default ItemImage
