<template>
<b-col cols="2">
    <b-card class="mt-4" title="Login">
        <b-form @submit.prevent="validate">
            <b-form-group>
                <b-form-input class="my-1" type="text" v-model="login_usuario.email" placeholder="Email" required/>
                <b-form-input class="my-1" type="password" v-model="login_usuario.senha" placeholder="Senha" required/>
                <b-button type="submit" >Login</b-button>
            </b-form-group>
        </b-form>
    </b-card>
</b-col>
</template>

<script>
export default {
    name: "loginView",
    data() {
        return {
            login_usuario: {
                email: null,
                senha: null,
            },
        };
    },
    methods: {
        validate() {
            const payload = this.$store.getters.getUsuario;
            if (payload.email == this.login_usuario.email && payload.senha == this.login_usuario.senha) {
                this.$swal({
                    title: 'Sucesso!',
                    html: 'Login efetuado com sucesso',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                    }); 
            } else {
                this.$swal({
                    title: 'Erro!',
                    html: 'Email ou senha do usuario incorreta',
                    icon: 'error',
                    timer: 2000, 
                    showConfirmButton: false                   
                    });  
            }
        },
    },
};
</script>

<style>
</style>
