const initialState = {
    response: null
}
export default function enquiryResponseReducer(state=initialState,action) {
    if (action.type === 'GET/RESPONSE') {

        console.log(action.payload);

        return ({

            ...state,

            response: action.payload

        })



    }
    else {
        return state;
    }
}