import axios from "axios";
import { BASE_URL } from "../store/actions/ActionConstant";

export function updateCustomerService(customer){
    return axios.put(BASE_URL+"/customer/update")
}
export function changePasswordService(payload){
    return axios.put(BASE_URL+"/customer/changePassword")
}