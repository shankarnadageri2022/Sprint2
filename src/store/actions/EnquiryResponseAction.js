import axios from "axios";
export function getResponse(eId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/enquiry/find/" + eId).then(resp => {
           
            console.log(resp.status);
            
            dispatch(getResponsedSuccess(resp.data))
        })
    }
}

export function getResponsedSuccess(data) {
    return {
        type: "GET/RESPONSE",
        payload: data
    }
}
