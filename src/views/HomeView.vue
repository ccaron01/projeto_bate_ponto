<template> 
    <div class="d-flex justify-content-center">
        <formCadastro/>
    </div>
</template>

<script>
import formCadastro from '@/components/form_cadastro.vue'

export default {
  name: 'HomeView',
  components: {
    formCadastro
  },
}
</script>

