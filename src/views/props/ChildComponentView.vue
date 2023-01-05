<template>
  <div>{{ childValue }}</div>
</template>

<script>
export default {
  props: ['childValue'],
  created() {
    console.log('this.childValue', this.childValue)
  }
}
</script>

<style lang="scss" scoped></style>
