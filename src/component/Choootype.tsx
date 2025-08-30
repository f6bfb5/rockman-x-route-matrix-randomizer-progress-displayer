import { createSignal, onCleanup, onMount, createEffect } from 'solid-js';

type ChoootypeProps = {
  children: any;
  min?: number;
  class?: string; // 額外 Tailwind class
};

export default function Choootype(props: ChoootypeProps) {
  let containerRef: HTMLDivElement | undefined;
  let spanRef: HTMLSpanElement | undefined;
  const minAspect = props.min ?? 0;
  const delay = 500;
  let timeoutId: number;
  const [transform, setTransform] = createSignal({ transform: "", transformOrigin: "" })

  const applyTransform = () => {
    // console.log('choootype triggered')

    if (!containerRef || !spanRef) return;

    const boxWidth = containerRef.offsetWidth;
    const spanWidth = spanRef.offsetWidth;
    // console.log(boxWidth, spanWidth)

    if (boxWidth < spanWidth) {
      let aspect = boxWidth / spanWidth;
      if (aspect < minAspect) aspect = minAspect;

      // 動態縮放文字寬度，inline style
      // spanRef.style.transform = `scaleX(${aspect})`;
      // spanRef.style.display = "inline-block";
      // spanRef.style.transformOrigin = "top left";
      setTransform({ transform: `scaleX(${aspect})`, transformOrigin: "top left" })
    } else {
      // spanRef.style.transform = "";
      // spanRef.style.display = "";
      setTransform({ transform: "", transformOrigin: "" })
    }
  };

  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      applyTransform();
    }, delay);
  };

  onMount(() => {
    applyTransform();
    window.addEventListener('resize', handleResize);
  });

  onCleanup(() => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(timeoutId);
  });

  createEffect(() => {
    setTimeout(() => {
      applyTransform();
    }, 400)
  });

  return (
    <div
      ref={containerRef}
      class={`overflow-hidden ${props.class ?? ''}`} // Tailwind overflow-hidden
    >
      <span
        ref={spanRef}
        class="px-2 whitespace-nowrap js-addChoootype" // Tailwind 空白不換行
        // style={{ display: 'inline-block' }}
        style={{
          'display': 'inline-block',
          'transform': transform().transform,
          'transform-origin': transform().transformOrigin
        }}
      >
        {props.children}
      </span>
    </div>
  );
}
