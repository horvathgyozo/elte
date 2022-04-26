import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import {
  addHaiku,
  changeText,
  modifyHaiku,
  selectEditor,
  selectHaikus,
} from "./haikuSlice";

export const Editor = () => {
  const { text, counts, isHaiku } = useSelector(selectEditor);
  const { selectedIndex } = useSelector(selectHaikus);
  const dispatch = useDispatch();
  console.log(counts);
  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={(e) => dispatch(changeText(e.target.value))}
      ></textarea>
      <p>Vowels per row: {counts.join(",")}</p>
      {isHaiku && <button onClick={() => dispatch(addHaiku(text))}>Add</button>}
      {isHaiku && selectedIndex !== null && (
        <button onClick={() => dispatch(modifyHaiku(text))}>Save</button>
      )}
    </div>
  );
};
