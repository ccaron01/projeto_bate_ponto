<template>
<div class="d-flex justify-content-center mt-5">
    <b-card class="w-25 d-flex">
        <b-button size="lg" @click="setHorario()">Bater Ponto</b-button>
        <router-link :to="{name:'registros'}" class="d-flex justify-content-end">Registros</router-link>
    </b-card>
</div>
</template>

<script>
export default {
    name: "BatePonto",

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
