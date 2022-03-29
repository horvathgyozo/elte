import cn from "classnames";

const Letter = ({ missing, visible, children }) => (
  <span className={cn({hianyzo: missing})}>
    {visible && children}
  </span>
)

export default Letter;