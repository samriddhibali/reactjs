import axios from 'axios';

export const validateLogin = (user) => {
    console.log("validateLogin")
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:9091/api/login/', user, { headers: { 'Access-Control-Allow-Origin': '*' } })
            dispatch({
                type: 'ON_VALIDATE',
            });
        }
        catch (e) {
            dispatch({
                type: 'ON_VALIDATE_ERROR',
            });
        }
    }
}

export const signup = (user) => {
    console.log("validateSignup")

    return async (dispatch) => {
        try {
            await axios.post('http://localhost:9091/api/signup/', user, { headers: { 'Access-Control-Allow-Origin': '*' } })
            //console.log('-->>',response);
            dispatch({
                type: 'VALID_SIGNUP'
            });
        }
        catch (e) {
           // console.log("errrorvalidateSignup")
            dispatch({
                type: 'ON_VALIDATE_SIGNUP_ERROR'
            });
            alert(e.response.data.errorMessage)
       }
    }
}