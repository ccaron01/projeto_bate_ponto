import Vue from 'vue'

export default {
    state: {
        usuarioLogado: null,
        pontosUsuario: {

        }
    },
    getters: {
        getUsuarioLogado(state) {
            return state.usuarioLogado;
        },
        getHorario(state) {
            if (state.pontosUsuario[state.usuarioLogado] == undefined) {
                return null
            }
            return state.pontosUsuario[state.usuarioLogado]
        },
    },
    mutations: {
        SET_HORARIO(state, payload) {
            if (state.pontosUsuario[state.usuarioLogado] == undefined) {
                state.pontosUsuario[state.usuarioLogado] = {};
            }
            Vue.set(state.pontosUsuario[state.usuarioLogado], Object.keys(state.pontosUsuario[state.usuarioLogado]).length, payload)
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