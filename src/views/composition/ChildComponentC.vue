<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const btn = ref(null)

    onMounted(() => {
      console.log(btn)
      console.log(btn.value.click)
    })

    const childFunc = () => {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }

    return { childFunc, btn }
  }
}
</script>
