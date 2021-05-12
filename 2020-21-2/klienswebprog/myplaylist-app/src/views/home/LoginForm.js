import { useState } from "react";
import { useDispatch } from "react-redux";
import { Message } from "semantic-ui-react";
import { login } from "../../state/auth/actions";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      await dispatch(login(username, password));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Username</label>
        <div className="ui left icon input">
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field">
        <label>Password</label>
        <div className="ui left icon input">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <i className="lock icon"></i>
        </div>
      </div>
      {error && <Message negative>{error}</Message>}
      <button type="submit" className="ui blue submit button">
        Login
      </button>
    </form>
  );
}
