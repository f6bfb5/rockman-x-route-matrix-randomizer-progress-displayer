import { children, type JSX } from "solid-js";

export default function GridContainer(props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; cols: any; }) {
  const c = children(() => props.children)
  return <div class={`relative grid grid-flow-row grid-cols-${props.cols} items-center`}>
    {c()}
  </div>
}