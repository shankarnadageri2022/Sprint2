import axios from "axios";
export function changePassword(payload) {

    return (dispatch) => {

        return axios.put("http://localhost:8080/customer/changePassword", payload).then(

            resp => {

                console.log(resp);

               

                dispatch(changePasswordSuccess(resp.data));

            })

            .catch(error=>{
                alert(error.response.data);
               })

    }

}

export function changePasswordSuccess(data) {

    return {

        type: 'CHANGEPASSWORD',

        payload: data

    }

}