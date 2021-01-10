<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <dashboard msg="Welcome to Your dashboard"/>
  </div>
</template>

<script>
// @ is an alias to /src
import dashboard from '@/components/dashboard/index.vue'

export default {
  name: 'Home',
  components: {
    dashboard
  }
}
</script>
