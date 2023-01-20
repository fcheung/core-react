import { type FC } from "react"
import { createPortal } from "react-dom"

type Props = {
  info: string
  buttonBoundingRect?: DOMRect
}

const PopOver: FC<Props> = ({ info, buttonBoundingRect }) => {
  const positionStyle1 = {
    left: buttonBoundingRect?.width / 2,
    top: 0,
  }

  const positionStyle2 = {
    left: buttonBoundingRect?.x + buttonBoundingRect?.width / 2,
    top: buttonBoundingRect?.y,
  }

  return (
    <div
      className="absolute border border-gray-200 rounded shadow mb-6 w-64 bg-white z-10 -translate-x-32 -translate-y-full"
      style={positionStyle1}
    >
      <div className="p-3">{info}</div>
    </div>
  )
}

export default PopOver
