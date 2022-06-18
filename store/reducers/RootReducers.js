import { combineReducers } from "redux";

import serviceReducer from "./ServiceReducers";

const rootReducer = combineReducers({
   
    serviceReducer,
})

export default rootReducer;