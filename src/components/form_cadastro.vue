<template>
        <b-col cols="3">
            <b-card class="mt-4" title="Cadastro de usuários">
                <b-form @submit.prevent="save">
                    <b-form-group>
                        <b-form-input 
                            class="my-1"
                            type="text"
                            v-model="dados_usuario.name" 
                            placeholder="nome"
                            required>
                        </b-form-input>        
                        <b-form-input
                            class="my-1" 
                            type="email"
                            v-model="dados_usuario.email"  
                            placeholder="email"
                            required>
                        </b-form-input>
                        <b-form-input
                            class="my-1" 
                            type="password"
                            v-model="dados_usuario.senha" 
                            placeholder="senha"
                            required>
                        </b-form-input>
                        <b-form-datepicker 
                            class="my-1" 
                            v-model="dados_usuario.data_nascimento" 
                            placeholder="data de nascimento"
                            required>
                        </b-form-datepicker>
                            <b-button type="submit">Cadastrar</b-button>
                    </b-form-group>
                </b-form>
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
                this.$swal({
                    title: 'Sucesso!',
                    html: 'Cadastro efetuado com sucesso',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                    }); 
                this.$router.push({name: 'home'})
            }).catch((error)=> {
                console.log(error, this)
                this.$swal({
                    title: 'Erro!',
                    text: 'Cadastro não efetuado',
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false
                    });  
            })
        }
    }
}


</script>