import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthStatus } from "./auth/AuthStatus";
import Login from "./auth/Login";
import { RequireAuth } from "./auth/RequireAuth";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <GraphiLogics />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
