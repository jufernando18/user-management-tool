<template>
  <div class="detail">
    <todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import todos from '@/components/todos/index.vue'

export default {
  name: 'Detail',
  components: {
    todos
  }
}
</script>
