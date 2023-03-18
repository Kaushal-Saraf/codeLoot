const userInfo =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

export const initialState = {
  user: userInfo,
  newRoom:[],
};
const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NEW_ROOM":
        return {
          ...state,
          newRoom: action.newRoom,
        };
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
      default:
        return state;
    }
  };
  export default reducer;