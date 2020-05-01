import { bookingService } from '../_services';

export const bookings = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAllBookingsByUser({ commit }) {
            commit('getAllBookingsByUserRequest');

            bookingService.getAllBookingsByUser()
                .then(
                    bookings => commit('getAllBookingsByUserSuccess', bookings),
                    error => commit('getAllBookingsByUserFailure', error)
                );
        }
    },
    mutations: {
        getAllBookingsByUserRequest(state) {
            console.log("getAllBookingsByUserRequest:booking.module"); 
            state.all = { loading: true };
        },
        getAllBookingsByUserSuccess(state, bookings) {
            console.log("getAllBookingsByUserSuccess:booking.module");
            state.all = { items: bookings };
        },
        getAllBookingsByUserFailure(state, error) {
            console.log("getAllBookingsByUserFailure:booking.module");
            state.all = { error };
        }
    }
}