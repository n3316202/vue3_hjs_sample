<!--childComponent-->
<template>
  <button @click="updateParentValue">
    클릭시 부모의 데이터 값이 증가합니다.
  </button>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    updateParentValue() {
      this.$emit('childEvent')
    }
  }
}
</script>
