export default {
    state: {
        usuarioLogado: null,
        pontosUsuario: {

        }
    },
    getters: {
        getUsuarioLogado(state) {
            return state.pontosUsuario;
        },
        getHorario(state) {
            return state.pontosUsuario[state.usuarioLogado];
        },
    },
    mutations: {
        SET_HORARIO(state, payload) {
            if (state.pontosUsuario[state.usuarioLogado] == undefined) {
                state.pontosUsuario[state.usuarioLogado] = [];
            }
            state.pontosUsuario[state.usuarioLogado].push(payload)
        },
        SET_USUARIO_LOGADO(state, payload) {
            state.usuarioLogado = payload
        }
    },
    actions: {
        setHorario({ commit }, payload) {
            commit('SET_HORARIO', payload)
        },
        setUsuarioLogado({ commit }, payload) {
            commit('SET_USUARIO_LOGADO', payload)
        }
    }
}