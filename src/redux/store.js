import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
//alow broser to cash the state
import { persistStore } from "redux-persist";

//an array of middleware we wont to apply
const middlewares = [logger];

//takes the root reducer and all the middleware we have
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
