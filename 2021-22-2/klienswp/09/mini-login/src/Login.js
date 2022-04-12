import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";

const Login = ({ login }) => {
  // const usernameRef = useRef(null);
  // const passwordRef = useRef(null);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const username = usernameRef.current.value;
    // const password = passwordRef.current.value;
    const { username, password } = data;
    const newErrors = {};

    if (username === "") {
      newErrors.username = "Username is required";
    }
    if (password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).length > 0) {
      return;
    }

    if (login) {
      login(username);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.keretes}
      style={{ backgroundColor: "yellow" }}
    >
      {/* <label htmlFor="username">Felhasználónév: </label> */}
      <TextField
        variant="standard"
        type="text"
        id="username"
        name="username"
        value={data.username}
        label="Felhasználónév"
        autoFocus
        error={errors.username !== undefined}
        helperText={errors.username}
        onChange={handleChange}
      />
      <br />
      {/* <label htmlFor="password">Jelszó: </label> */}
      <TextField
        variant="standard"
        type="password"
        id="password"
        name="password"
        value={data.password}
        label="Jelszó"
        error={errors.password !== undefined}
        helperText={errors.password}
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" type="submit">
        Hello World
      </Button>
    </form>
  );
};

export default Login;
