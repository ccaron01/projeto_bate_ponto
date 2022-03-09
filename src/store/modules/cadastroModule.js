export default {
    state: {
        usuario: {
            nome: null,
            email: null,
            senha: null,
            data_nascimento: null
        },
    },
    getters: {
        getUsuario(state) {
            return state.usuario;
        }
    },
    mutations: {
        SET_USUARIO(state, payload) {
            state.usuario = payload
        }
    },
    actions: {
        setUsuario({ commit }, payload) {
            commit('SET_USUARIO', payload)
        }
    }
}