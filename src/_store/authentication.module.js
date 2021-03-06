import { userService } from '../_services'
import  router  from '../router/index.js'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {loggedIn: false}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({commit }, { username, password }) {
            commit('loginRequest', { username });

            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/user');
                    },
                    error => {
                        commit('loginFailure', error);
                       console.log("Failed to login!")
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
            router.push('/');
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = { loggedIn: false};
            state.user = null;
        }
    }
}
