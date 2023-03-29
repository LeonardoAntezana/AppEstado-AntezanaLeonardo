import { AUTH_API } from "../../../data/database";
export const SIGN_UP = 'SIGN_UP';   

export const signUp = (email, password) => {
    return async dispatch => {
        const resp = await fetch(AUTH_API, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            
        })
    }
}