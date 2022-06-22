const initialState = {
    cgPassword: null,
    password:null
}



export default function authenticationReducer(state = initialState, action) {



    if (action.type === 'CHANGEPASSWORD') {
        console.log(action.payload);
        return ({
            ...state,
            cgPassword: action.payload
        })
    }



    if (action.type === 'RECOVER/PASSWORD') {
        console.log(action.payload);
        return ({
            ...state,
           password : action
        })
    }


    else {
        return state;
    }
}



// if (action.type === 'PRODUCT/FETCHBYID') {
//     console.log(action.payload);
//     return ({
//         ...state,
//         product: action.payload
//     })
// }