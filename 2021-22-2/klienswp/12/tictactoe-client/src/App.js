import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import "./App.css";

//TODO: socket létrehozása
const socket = io("http://localhost:3031");
console.log(socket);

function App() {
  const [game, setGame] = useState(Array(9).fill(""));
  const [turnNumber, setTurnNumber] = useState(0);
  const [myTurn, setMyTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [xo, setXO] = useState("X");
  const [player, setPlayer] = useState("");
  const [hasOpponent, setHasOpponent] = useState(false);
  const [share, setShare] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsRoom = params.get("room");
  const [room, setRoom] = useState(paramsRoom);

  const [turnData, setTurnData] = useState(false);

  const sendTurn = (index) => {
    if (!game[index] && !winner && myTurn && hasOpponent) {
      //TODO: lépés elküldése (reqTurn)
      socket.emit(
        "reqTurn",
        JSON.stringify({
          index,
          value: xo,
          room,
        })
      );
    }
  };

  const sendRestart = () => {
    //TODO: játék újrakezdésének jelzése a szerver felé (reqStart)
    socket.emit("reqRestart", room);
  };

  const restart = () => {
    setGame(Array(9).fill(""));
    setWinner(false);
    setTurnNumber(0);
    setMyTurn(false);
  };

  useEffect(() => {
    combinations.forEach((c) => {
      if (
        game[c[0]] === game[c[1]] &&
        game[c[0]] === game[c[2]] &&
        game[c[0]] !== ""
      ) {
        setWinner(true);
      }
    });

    if (turnNumber === 0) {
      setMyTurn(xo === "X" ? true : false);
    }
  }, [game, turnNumber, xo]);

  useEffect(() => {
    //TODO: szervertől kapott válaszok kezelése (playerTurn, restart, opponent_joined)
    socket.on("opponent_joined", function () {
      setHasOpponent(true);
    });
    socket.on("playerTurn", function (data) {
      setTurnData(data);
    });
    socket.on("restart", function () {
      restart();
    });
  }, []);

  useEffect(() => {
    if (turnData) {
      const data = JSON.parse(turnData);
      let g = [...game];
      if (!g[data.index] && !winner) {
        g[data.index] = data.value;
        setGame(g);
        setTurnNumber(turnNumber + 1);
        setTurnData(false);
        setMyTurn(!myTurn);
        setPlayer(data.value);
      }
    }
  }, [turnData, game, turnNumber, winner, myTurn]);

  useEffect(() => {
    //TODO: szoba létrehozása, csatlakozás (create, join)
    if (!paramsRoom) {
      const roomName = random();
      socket.emit("create", roomName);
      setRoom(roomName);
      setMyTurn(true);
    } else {
      socket.emit("join", paramsRoom);
      setRoom(paramsRoom);
      setXO("O");
      setMyTurn(false);
    }
  }, [paramsRoom]);

  return (
    <div className="container">
      Room: {room}
      <button className="btn" onClick={() => setShare(!share)}>
        Share
      </button>
      {share ? (
        <>
          <br />
          <br />
          Share link:{" "}
          <input
            type="text"
            value={`${window.location.href}?room=${room}`}
            readOnly
          />
        </>
      ) : null}
      <br />
      <br />
      Turn: {myTurn ? "You" : "Opponent"}
      <br />
      {hasOpponent ? "" : "Waiting for opponent..."}
      <p>
        {winner || turnNumber === 9 ? (
          <button className="btn" onClick={sendRestart}>
            Restart
          </button>
        ) : null}
        {winner ? (
          <span>We have a winner: {player}</span>
        ) : turnNumber === 9 ? (
          <span>It's a tie!</span>
        ) : (
          <br />
        )}
      </p>
      <div className="row">
        <Box index={0} turn={sendTurn} value={game[0]} />
        <Box index={1} turn={sendTurn} value={game[1]} />
        <Box index={2} turn={sendTurn} value={game[2]} />
      </div>
      <div className="row">
        <Box index={3} turn={sendTurn} value={game[3]} />
        <Box index={4} turn={sendTurn} value={game[4]} />
        <Box index={5} turn={sendTurn} value={game[5]} />
      </div>
      <div className="row">
        <Box index={6} turn={sendTurn} value={game[6]} />
        <Box index={7} turn={sendTurn} value={game[7]} />
        <Box index={8} turn={sendTurn} value={game[8]} />
      </div>
    </div>
  );
}

const Box = ({ index, turn, value }) => {
  return (
    <div className="box" onClick={() => turn(index)}>
      {value}
    </div>
  );
};

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const random = () => {
  return Array.from(Array(8), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
};

export default App;
