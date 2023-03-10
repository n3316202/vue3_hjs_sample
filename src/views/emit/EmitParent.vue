<template>
  <div>
    <EmitChild v-on:childEvent="updateParentValue" />
    {{ parentVaule }}
  </div>
</template>

<script>
import EmitChild from '@/views/emit/EmitChild.vue'

export default {
  name: 'EmitParent',
  components: {
    EmitChild
  },
  data() {
    return {
      parentVaule: 20
    }
  },
  methods: {
    updateParentValue() {
      this.parentVaule++
      console.log(this.parentVaule) // 21, 22, 22, 누를때마다 증가하는 것 확인 가능//
    }
  }
}
</script>
