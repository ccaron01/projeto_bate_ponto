import Vue from 'vue'
import Vuex from 'vuex'

import cadastroModule from '@/store/modules/cadastroModule.js'
import horaModule from '@/store/modules/horaModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cadastroModule,
        horaModule
    }
})