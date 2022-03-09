<template>
    <b-col cols="3">
        <b-card class="mt-4" title="Cadastro de usuários">
            <b-form-group>
                <b-form-input 
                    class="my-1"
                    type="text"
                    v-model="dados_usuario.name" 
                    placeholder="nome">
                </b-form-input>        
                <b-form-input
                    class="my-1" 
                    type="email"
                    v-model="dados_usuario.email"  
                    placeholder="email">
                </b-form-input>
                <b-form-input
                    class="my-1" 
                    type="text"
                    v-model="dados_usuario.senha" 
                    placeholder="senha">
                </b-form-input>
                <b-form-datepicker 
                    class="my-1" 
                    v-model="dados_usuario.data_nascimento" 
                    placeholder="data de nascimento">
                </b-form-datepicker>
                    <b-button type="submit" @click="save">Cadastrar</b-button>
            </b-form-group>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name:'formCadastro',
    data(){
        return{
            dados_usuario: {
                name: null,
                email: null,
                senha: null,
                data_nascimento: null,
            }
        }
    },
    methods:{
        save(){
            
            this.$store.dispatch('setUsuario', this.dados_usuario).then(() => {
                alert(JSON.stringify(this.$store.getters.getUsuario))
            })
        }
    }
}


</script>


<style>

</style>