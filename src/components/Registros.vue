<template>
    <div>
        <ul id="listagem">
            <li v-for="item in this.$store.getters.getHorario" :key="item">
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
            horarios: {}      
        }       
    },
}
</script>