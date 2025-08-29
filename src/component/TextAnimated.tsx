import { createSignal, For, onMount, createEffect } from 'solid-js';
import { Motion, Presence } from 'solid-motionone';
import Text from './Text';

function TextAnimated(props: { text: number }) {
  const [items, setItems] = createSignal<{ key: number }[]>([]);

  onMount(() => {
    setItems([{ key: props.text }])
  })

  createEffect(() => {
    const prev = items()[0]?.key;

    if (JSON.stringify(props.text) != JSON.stringify(prev)) {
      setItems([{ key: props.text }, ...items()].slice(0, 2));
    }
  });

  return (
    <div class="overflow-y-clip">
      <Presence exitBeforeEnter>
        <For each={items()}>
          {(item) => (
            <Motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.3, easing: 'ease' }}
            >
              <Text text={item.key} />
            </Motion.div>
          )}
        </For>
      </Presence>
    </div>
  );
}

export default TextAnimated;
