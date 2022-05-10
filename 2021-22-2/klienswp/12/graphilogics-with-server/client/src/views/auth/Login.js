import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/authSlice";
import { useLoginMutation } from "../../state/nonogramApiSlice";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [authLogin] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password: password,
      }).unwrap();
      dispatch(
        login({
          user: result.user,
          token: result.accessToken,
        })
      );
      navigate("/", { replace: true });
    } catch (err) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
