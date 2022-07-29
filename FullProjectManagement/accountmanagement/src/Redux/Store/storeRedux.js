import { createStore, applyMiddleware } from "redux";
import RootReducers from "./../Reducer/RootReducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const storeRedux = createStore(RootReducers, middleware);

export default storeRedux;
