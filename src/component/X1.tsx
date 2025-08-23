import Common from './Common'
import type { X1ItemStatus } from '../utils/variable'

function X1(props: {
  itemStatus: X1ItemStatus,
}) {
  const itemStatus = () => props.itemStatus

  return (
    <Common itemStatus={itemStatus()} title='x1'>{null}</Common>
  )
}

export default X1
