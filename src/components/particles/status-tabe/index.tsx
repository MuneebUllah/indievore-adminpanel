import { FC } from "react";
import { StatusTabeCart } from "./style"

interface StatusTabeProps{
    active?:any
    onclick?:() => void;
    title?:string
}

const StatusTabe:FC<StatusTabeProps> = ({
  active,
  onclick,
  title
}) => {
  return (
    <StatusTabeCart active={active} onClick={onclick}>
    <h2>
      {title}
    </h2>
  </StatusTabeCart>
  )
}

export default StatusTabe;