export default {
    state: {
        pontos: []
    },
    getters: {
        getHorario(state) {
            return state.pontos;
        }
    },
    mutations: {
        SET_HORARIO(state, payload) {
            state.pontos.push(payload);
        }
    },
    actions: {
        setHorario({ commit }, payload) {
            commit('SET_HORARIO', payload)
        }
    }
}