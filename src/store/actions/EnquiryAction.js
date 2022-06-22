import axios from "axios";
export function sendQuiry(payload){
    return(dispatch) => {
       return axios.post("http://localhost:8080/enquiry/save",payload).then(
       resp =>{
        alert("enquiry saved with enquiryid:" + resp.data.enquiryId);

        dispatch(sendQuirySuccess(resp.data))
       
       })
       .catch(error=>{
        alert(error.response.data);
       })
    }
}
export function sendQuirySuccess(data)
{
    return{
        type: "enquiry/saveSuccess",
        payload: data
    }
}