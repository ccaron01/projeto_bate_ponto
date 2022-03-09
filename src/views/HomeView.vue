<template> 
    <div class="d-flex justify-content-center">
        <loginUsuario/>
    </div>
</template>

<script>
import loginUsuario from "@/components/formLogin.vue"

export default {
  name: 'HomeView',
  components: {
    loginUsuario,
    }

}
</script>

