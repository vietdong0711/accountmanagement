import * as Types from "../Contant/PositionActionType";

var initialState = [];

const ListPosition = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_POSITION_LIST:
      // console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};

export default ListPosition;
