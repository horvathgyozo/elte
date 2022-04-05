import { Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import styles from "./Login.module.css";

const Login = ({ login }) => {
  const usernameRef = useRef(null);

  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  return (
    <form className={styles.keretes}>
      {/* <label htmlFor="username">Felhasználónév: </label> */}
      <TextField
        ref={usernameRef}
        variant="standard"
        type="text"
        id="usrname"
        name="usrname"
        defaultValue=""
        label="Felhasználónév"
        autoFocus
      />
      <br />
      {/* <label htmlFor="password">Jelszó: </label> */}
      <TextField
        variant="standard"
        type="password"
        id="password"
        name="password"
        defaultValue=""
        label="Jelszó"
      />
      <br />
      <Button variant="contained" type="submit">
        Hello World
      </Button>
    </form>
  );
};

export default Login;
