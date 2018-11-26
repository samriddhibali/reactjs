import axios from 'axios';

export const createUser = (user) => {
    console.log("handleSave")
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:9091/api/user/', user, { headers: { 'Access-Control-Allow-Origin': '*' } })
            dispatch({
                type: 'ON_SAVE',
                payload: [user]
            });
        }
        catch (e) {
           console.log(e.response)
            alert(e.response.data.errorMessage ? e.response.data.errorMessage : "Some Invalid data.")
        }
    }
}

export const showData = () => {
    console.log("showData")
    return async (dispatch) => {
        try {
            return await axios.get('http://localhost:9091/api/user/', { headers: { 'Access-Control-Allow-Origin': '*' } }
            )
        }
        catch (e) {
            console.log(e.response)
            dispatch({
                type: 'ON_ERROR_DISPLAY',
            })
        }
    }
}

export const showDataSuccessful = (temp) => {
    console.log("showDataSuccessful")
    return (dispatch) => {
        dispatch({
            type: 'SHOW_DATA',
            payload: temp
        })
    }
}

export const showEditData = (temp) => {
    console.log("showEditData")
    return (dispatch) => {
        dispatch({
            type: 'SHOW_EDIT_DATA',
            payload: temp
        })
    }
}

export const deleteRecord = (e) => {
    console.log("deleteRecord")
    return async (dispatch) => {
        await axios.delete('http://localhost:9091/api/user/' + e.target.name, { headers: { 'Access-Control-Allow-Origin': '*' } })

    }
}

export const editRecord = (user, id) => {
    console.log("editRecord")
    return async (dispatch) => {
        try {
            await axios.put('http://localhost:9091/api/user' + id, user, { headers: { 'Access-Control-Allow-Origin': '*' } })
            dispatch({
                type: 'ON_SAVE',
                payload: [user]
            });
        }
        catch (e) {
            console.log(e.response)
        }
    }
}

export const getEditRecord = (id) => {
    console.log("getEditRecord")
    return async (dispatch) => {
        try {
            return await axios.get('http://localhost:9091/api/user/' + id, { headers: { 'Access-Control-Allow-Origin': '*' } }
            )
        }
        catch (e) {
            console.log(e.response)
        }
    }
}
export const reset = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET',
        })
    }
}