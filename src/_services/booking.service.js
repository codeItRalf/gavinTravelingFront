import { authHeader, getTokenId, apiUrl, handleResponse } from '../_helpers'

export const bookingService = {
    getAllBookingsByUser
};

function getAllBookingsByUser() {
    const requestOptions = {
        method: 'POST',
        headers:  authHeader() ,
        body : JSON.stringify( getTokenId() )
    };

    return fetch(`${apiUrl}/rest/bookings/user`, requestOptions).then(handleResponse);
}

