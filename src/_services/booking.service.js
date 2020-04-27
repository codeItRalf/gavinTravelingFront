import { authHeader } from '../_helpers'
import { getTokenId } from '../_helpers'
import {apiUrl} from '../_helpers/api-config' 
import { handleResponse } from '../_helpers'

export const bookingService = {
    getAllBookingsByUser
};

function getAllBookingsByUser() {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body : {"token" : getTokenId()} 
    };

    return fetch(`${apiUrl}/rest/booked-rooms/user`, requestOptions).then(handleResponse);
}

