const Buttons = ({ onClick }) => {
  return (
    <div id="betuk">
      <button disabled={false} onClick={(e) => onClick("a")}>
        a
      </button>
      <button disabled={true}>b</button>
    </div>
  );
};

export default Buttons;
