import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; //one of the middelwares we using

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //takes the root reducer and all the middleware we have

export default store;
