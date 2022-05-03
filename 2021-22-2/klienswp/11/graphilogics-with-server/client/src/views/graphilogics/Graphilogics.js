import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../state/authSlice";
import { useGetPuzzlesQuery } from "../../state/nonogramApiSlice";
import { selectTable } from "../../state/nonogramSlice";
import Login from "../auth/Login";

export const GraphiLogics = () => {
  const { isLoading, data } = useGetPuzzlesQuery();
  // console.log(puzzles);
  const table = useSelector(selectTable);
  const user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Login />;
  }

  if (isLoading) {
    return "Loading";
  }

  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  <td>
                    <span>1</span>
                    <span>2</span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                <tr>
                  <td>
                    <span>1</span>
                    <span>1</span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span>1</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>2</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                <tr>
                  <td className="feher"></td>
                  <td className="szurke"></td>
                  <td className="fekete"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
