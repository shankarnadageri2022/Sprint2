import axios from 'axios';

export function recoverPassword(cId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/customer/recoverPassword/" + cId).then(resp => {
           
            console.log(resp.status);
            alert(resp.data)
            dispatch(recoverPasswordSuccess(resp.data))
        })
    }
}

export function recoverPasswordSuccess(data) {
    return {
        type: "RECOVER/PASSWORD",
        payload: data
    }
}



// export function getProductDetails(id) {
//     return (dispatch) => {
//         return axios.get("http://localhost:8081/product/find/" + id).then(resp => {
//             console.log(resp.status);
//             dispatch(getProductByIdSuccess(resp.data))
//         })
//     }
// }

// export function getProductByIdSuccess(data) {
//     return {
//         type: "PRODUCT/FETCHBYID",
//         payload: data
//     }
// }