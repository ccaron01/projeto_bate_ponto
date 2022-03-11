export default {
    state: {
        usuarios: {
            email: {}
        }
    },
    getters: {
        getUsuario(state) {
            return state.usuarios;
        }
    },
    mutations: {
        SET_USUARIO(state, payload) {
            state.usuarios[payload.email] = payload;
        }
    },
    actions: {
        setUsuario({ commit }, payload) {
            commit('SET_USUARIO', payload)
        }
    }
}