import { combineReducers } from "redux";

import serviceReducer from "./ServiceReducers";
import updateDetailsReducer from "./UpdateDetailsReducer";
import authenticationReducer from "./AuthenticateReducers";
import enquiryReducer from "../reducers/EnquiryReducer";
import enquiryResponse from "../reducers/EnquiryResponseReducer";
const rootReducer = combineReducers({
   
    serviceReducer,
    updateDetailsReducer,
    authenticationReducer,
    enquiryReducer,
    enquiryResponse,

})

export default rootReducer;