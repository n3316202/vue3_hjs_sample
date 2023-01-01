<template>
  <div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  setup () {
    const htmlString =  '<p style="color:red;">This is a red string.</p>'

    return {htmlString}
  }
}
</script>

<style lang="scss" scoped>

</style>