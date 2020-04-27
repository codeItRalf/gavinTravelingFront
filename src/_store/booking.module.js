import { bookingService } from '../_services';

export const bookings = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAllBookingsByUser({ commit }) {
            commit('getAllRequest');

            bookingService.getAllBookingsByUser()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}