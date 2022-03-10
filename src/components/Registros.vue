<template>
    <div>
        <ul id="listagem">
            <li v-for="item in horarios" :key="item">
                {{item}}                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "RegistrosUsuario",
    data(){
        return {
            horarios: []        
        }       
    },
    mounted(){        
            this.horarios = this.$store.getters.getHorario;
    }
}
</script>