import axios from 'axios';
import { BASE_URL, CUSTOMER_FETCHBYID } from './ActionConstant';

export function getCustomerDetails(id) {
    return (dispatch) => {
        return axios.get(BASE_URL+"/customer/find/" + id).then(resp => {
            console.log(resp.status);
            dispatch(getCustomertByIdSuccess(resp.data))
        })
    }
}

export function getCustomertByIdSuccess(data) {
    return {
        type: CUSTOMER_FETCHBYID,
        payload: data
    }
}

export function updateCustomer(customer) {

    return (dispatch) => {
        return axios.post("http://localhost:8080/customer/update", customer).then(
            resp => {
                dispatch(updateCustomerSuccess(resp.data));
            }
        )       
    }
}

export function updateCustomerSuccess(data) {
    return {
        type: 'CUSTOMER/UPDATESUCCESS',
        payload: data
    }
}