<template>
  <b-navbar type="dark" variant="dark" class="d-flex w-100">
          <b-img alt="Vue logo" :src="img" fluid />
          <router-link :to="{name:'home'}" class="text-light">Cadastro</router-link>
          <b-nav-bar-item class="text-light"> | </b-nav-bar-item>
          <router-link :to="{name:'login'}" class="text-light">Login</router-link>
        </b-navbar>
</template>

<script>
export default {
    name:"NavBar",

data() {
    return {
      img: require('@/assets/logo.png')
    }
  }
}
</script>