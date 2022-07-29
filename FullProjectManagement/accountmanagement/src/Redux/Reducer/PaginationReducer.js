import * as Types from "../Contant/PageActionType";

var initialState = {
  page: 1,
  size: 5,
  totalPages: 1,
  sort: { sortField: "createDate", sortDirection: "asc" },
  search: "",
};

const pageFilter = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_PAGE:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        page: action.payload,
      };

    case Types.SET_TOTAL_PAGE:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        totalPages: action.payload,
      };

    case Types.CHANGE_SIZE:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        size: action.payload,
      };

    case Types.CHANGE_SORT_FIELD:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        sort: {
          ...state.sort,
          sortField: action.payload,
        },
      };

    case Types.CHANGE_SORT_DIRECTION:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        sort: {
          ...state.sort,
          sortDirection: action.payload,
        },
      };

    case Types.SEARCH:
      //   console.log("payload: ", action.payload);
      return {
        ...state,
        search: action.payload,
        page: 1, // Hiển thị kết quả bắt đầu ở trang 1
      };
    default:
      return { ...state };
  }
};

export default pageFilter;
