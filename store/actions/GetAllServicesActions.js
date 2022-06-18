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