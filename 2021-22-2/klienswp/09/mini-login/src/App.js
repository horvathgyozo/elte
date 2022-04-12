import { useAuth } from "./authContext";
import Login from "./Login";
import Private from "./Private";

function App() {
  const { loggedInUser, login, logout } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <Private logout={logout} username={loggedInUser} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
}

export default App;
