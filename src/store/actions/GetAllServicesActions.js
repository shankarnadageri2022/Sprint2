import axios from "axios"

export function GetAllServices() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/serviceList/all").then(
            resp => {
                dispatch(getAllServiceSuccess(resp.data));
            }
        )
    }
}

export function getAllServiceSuccess(data) {
    return {
        type: "SERVICE/FETCHALL",
        payload: data
    }
}

export function addService(customerId,payload) {

    return (dispatch) => {
        return axios.post("http://localhost:8080/serviceRequest/save/"+customerId,payload).then(
            resp => {
                alert("Service request completed")
                dispatch(addServiceSuccess(resp.data));
            }
        )
        .catch(error=>{
            alert(error.response.data);
           })       
    }
}

export function addServiceSuccess(data) {
    return {
        type: 'SERVICE/ADDSUCCESS',
        payload: data
    }
}

export function getServiceStatus(){
    return (dispatch)=>{
    return axios.get("http://localhost:8080/serviceRequest/find/all").then(
        resp=>{
            dispatch(fetchStatusSuccess(resp.data));
        }
    )
}

}

export function fetchStatusSuccess(data) {
    return {
        type: "STATUS/FETCHALL",
        payload: data
    }
}
