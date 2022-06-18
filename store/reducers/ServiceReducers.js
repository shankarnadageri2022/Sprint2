const initialState = {
    services: [],
    product : null,
}

export default function serviceReducer(state = initialState, action) {

    if (action.type === 'SERVICE/FETCHALL') {
        console.log(action.payload);
        return ({
            ...state,
            services: action.payload
        })
    }
    // if (action.type === 'PRODUCT/FETCHBYID') {
    //     console.log(action.payload);
    //     return ({
    //         ...state,
    //         product: action.payload
    //     })
    // }
    
    else {
        return state;
    }
}