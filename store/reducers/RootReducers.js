import { combineReducers } from "redux";

import serviceReducer from "./ServiceReducers";
import updateDetailsReducer from "./UpdateDetailsReducer";
import authenticationReducer from "./AuthenticateReducers";
import enquiryReducer from "../reducers/EnquiryReducer";

const rootReducer = combineReducers({
   
    serviceReducer,
    updateDetailsReducer,
    authenticationReducer,
    enquiryReducer


})

export default rootReducer;