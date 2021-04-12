import { combineReducers } from "redux";

import loginReducer from "./Login/login-reducers";

const rootReducer = combineReducers({

  login: loginReducer,
});

export default rootReducer;
