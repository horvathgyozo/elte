import { AuthStatus } from "./auth/AuthStatus";
import { GraphiLogics } from "./graphilogics/Graphilogics";

function App() {
  return (
    <>
      <h1>GraphiLogics</h1>
      <AuthStatus />
      <GraphiLogics />
    </>
  );
}

export default App;
