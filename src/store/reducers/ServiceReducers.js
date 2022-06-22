const initialState = {
    services: [],
    serviceRequest:[],
    
    service : null,
    serviceByName:null,
    newService:null
}

export default function serviceReducer(state = initialState, action) {

    if (action.type === 'SERVICE/FETCHALL') {
        console.log(action.payload);
        return ({
            ...state,
            services: action.payload
        })
    }
   if(action.type==='SERVICE/UPDATESUCCESS'){
    console.log(action.payload);
    return({
        ...state,
        services:action.payload
    })
   }

   if (action.type === 'SERVICE/ADDSUCCESS') {
    console.log(action.payload);
    return ({
        ...state,
        newService: action.payload
    })
}

if (action.type === 'SERVICENAME/FETCHBYNAME') {
    console.log(action.payload);
    return ({
        ...state,
        serviceByName: action.payload
    })


}   

if (action.type === 'STATUS/FETCHALL') {
        
    return ({
        ...state,
        serviceRequest: action.payload
    })
}
    else {
        return state;
    }
}
