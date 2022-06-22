const initialState = {
    enquiry: [],
    
}

export default function enquiryReducer(state = initialState, action){
if(action.type === 'enquiry/saveSuccess')
{
    return({
        ...state,
        enquiry: action.payload
    })
}

else{
    return state;
}
}