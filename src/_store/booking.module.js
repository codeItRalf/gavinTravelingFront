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
            state.all = { loading: true };
        },
        getAllBookingsByUserSuccess(state, bookings) {
            state.all = { items: bookings };
        },
        getAllBookingsByUserFailure(state, error) {
            state.all = { error };
        }
    }
}