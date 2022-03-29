import cn from "classnames";
import Letter from "./Letter";

const Word = ({ letters, won }) => {
  return (
    <div id="szo" className={cn({ nyer: won })}>
      {letters.map(({ letter, visible }, i) => (
        <Letter visible={visible} missing={false} key={i}>
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default Word;
