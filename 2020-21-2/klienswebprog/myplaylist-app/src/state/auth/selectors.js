export const getIsLoggedIn = (state) => !!state.auth.user;
export const getUserId = (state) => state.auth.user.id;
