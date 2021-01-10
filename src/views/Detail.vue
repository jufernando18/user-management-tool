<template>
  <div class="detail">
    <h1>This is an detail page</h1>
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
