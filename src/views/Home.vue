<template>
  <div class="home">
    <img :alt="$t('main.logo')" src="../assets/logo.png">
    <HelloWorld :msg="$t('main.welcome')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
