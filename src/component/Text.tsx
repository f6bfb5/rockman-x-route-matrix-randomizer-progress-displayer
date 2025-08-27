import type { JSX } from "solid-js/jsx-runtime"

function Text(props: { text: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined }) {
  return (
    <span
      class="text-[8vw] text-center break-keep text-nowrap text-black [text-shadow:rgb(255,_255,_255)_2px_0px_0px,_rgb(255,_255,_255)_1.75517px_0.958851px_0px,_rgb(255,_255,_255)_1.0806px_1.68294px_0px,_rgb(255,_255,_255)_0.141474px_1.99499px_0px,_rgb(255,_255,_255)_-0.832294px_1.81859px_0px,_rgb(255,_255,_255)_-1.60229px_1.19694px_0px,_rgb(255,_255,_255)_-1.97999px_0.28224px_0px,_rgb(255,_255,_255)_-1.87291px_-0.701566px_0px,_rgb(255,_255,_255)_-1.30729px_-1.51361px_0px,_rgb(255,_255,_255)_-0.421592px_-1.95506px_0px,_rgb(255,_255,_255)_0.567324px_-1.91785px_0px,_rgb(255,_255,_255)_1.41734px_-1.41108px_0px,_rgb(255,_255,_255)_1.92034px_-0.558831px_0px]"
    >
      {props.text}
    </span>
  )
}

export default Text