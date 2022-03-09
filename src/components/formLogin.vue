<template>
    <b-col cols="2">
        <b-card class="mt-4" title="Login">
            <b-form-group>
                <b-form-input
                    class="my-1"
                    type="text"
                    v-model="login_usuario.email"
                    placeholder="Email"
                />
                <b-form-input
                    class="my-1"
                    type="text"
                    v-model="login_usuario.senha"
                    placeholder="Senha"
                />
                <b-button @onclick="validate">Login</b-button>
            </b-form-group>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "loginView",
    data(){
        return{
            login_usuario: {
                email: null,
                senha: null,
            }
        }
    },
    methods: {
        validate(){
                   
        }
    }

}
</script>

<style>

</style>