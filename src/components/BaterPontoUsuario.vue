<template>
<div class="d-flex justify-content-center mt-5">
    <b-card class="d-flex">
        <b-button size="lg" class="d-flex" @click="setHorario()">Bater Ponto</b-button>
        <b-button size="md" class="d-flex flex-row-reverse mt-3" v-b-modal.registros>Abrir Registros</b-button>
    </b-card>
    
    <b-modal title="Registros" id="registros" size="lg"><RegistrosUsuario/></b-modal>
</div>
</template>

<script>
import RegistrosUsuario from '@/components/Registros.vue'
export default {
    name: "BatePonto",
    components: {
        RegistrosUsuario
    },

    methods: {
        setHorario() {
            var ponto = new Date();
            console.log(ponto)
            this.$store.dispatch('setHorario', ponto).then(() => {
                this.$swal({
                    title: 'Sucesso!',
                    html: 'Ponto salvo com sucesso',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            })
        }
    }
}
</script>
