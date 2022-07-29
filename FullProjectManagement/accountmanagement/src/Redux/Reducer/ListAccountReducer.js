import * as Types from "../Contant/AccountActionType";

var initialState = [];

const ListAccount = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ACCOUNT_LIST:
      console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};

export default ListAccount;
