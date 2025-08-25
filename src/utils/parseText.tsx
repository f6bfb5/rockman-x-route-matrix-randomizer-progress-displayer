import { addressMapping } from '../utils/variable'

function parseTextFile(text: string) {
  const lines = text.split('\n');
  const valueMap: { [key: string]: string } = {};

  lines.forEach(line => {
    const [key, value] = line.split('=');
    if (key && value !== undefined) {
      valueMap[key.trim()] = value.trim();
    }
  });

  return valueMap;
}

function populateInitItemStatus(
  valueMap: { [x: string]: any; },
  mapping: { [x: string]: any; },
  targetObject: { [x: string]: any; }
) {
  for (const game in mapping) {
    const items = mapping[game];
    for (const itemKey in items) {
      const item = items[itemKey];

      for (let i = 0; i < item.length; i++) {
        const itemIDs = item[i];
        const values = itemIDs.map((id: string) => {
          if (Array.isArray(id)) {
            return id.reduce((sum, key) => sum + (+valueMap[key] || 0), 0)
          } else {
            const raw = valueMap[id];
            return parseInt(raw, 10)
          }
        });

        // console.log(itemKey, itemIDs, values)
        targetObject[game][itemKey][i] = values;
      }
    }
  }
}

function parseText(initItemStatus: any, text: string) {
  const itemStatus = initItemStatus
  const valueMap = parseTextFile(text)

  populateInitItemStatus(valueMap, addressMapping, itemStatus)

  return itemStatus
}

export default parseText
