import { CUSTOMER_FETCHBYID } from "../actions/ActionConstant";
const initialState = {
    
    customer : [],
    newCustomer : null,
    updateCustomer : null,
}
export default function updateDetailsReducer(state = initialState, action) {

    if (action.type === CUSTOMER_FETCHBYID) {
        console.log(action.payload);
        return ({
            ...state,
            customer: action.payload
        })
    }

    if (action.type === 'CUSTOMER/UPDATESUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            updateCustomer: action.payload
        })
    }

    else{
        return state;
    }

}