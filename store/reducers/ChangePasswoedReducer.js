if (action.type === 'FORGETPASS') {

    console.log(action.payload);

    return ({

        ...state,

        loggedInUser: action.payload

    })
    

}