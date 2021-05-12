import { authApi } from "../../api/rest";

export const STORE_USER = "STORE_USER";
export const REMOVE_USER = "REMOVE_USER";

// Sync
export const storeUser = (authData) => ({
  type: STORE_USER,
  payload: authData,
});
export const removeUser = () => ({
  type: REMOVE_USER,
});

// Async
export const login = (username, password) => async (dispatch) => {
  const response = await authApi.login(username, password);
  if (response.code) {
    throw new Error("Auth failed");
  }
  dispatch(storeUser(response));
};

export const logout = () => (dispatch) => {
  authApi.logout();
  dispatch(removeUser());
};

// restoreUser
