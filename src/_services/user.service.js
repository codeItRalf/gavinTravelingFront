import {apiUrl} from '../_helpers/api-config' 
import { handleResponse } from '../_helpers'

export const userService = {
    login,
    logout
};

function login(eMail, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eMail, password })
    };

    return fetch(`${apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user)
            // login successful if there's a jwt token in the response
            if (user.tokenId) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    console.log("Logout called and user removed")
}





