<template>
  <div>
    <h1>Hello, {{title}}!</h1>
  </div>
</template>

<script>
export default {
  setup () {
    const title = "World"

    return {title}
  }
}
</script>

<style scoped>

</style>