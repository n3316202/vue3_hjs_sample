<template>
  <div>
    <h2>{{ count }}</h2>
    <h2>{{ countDouble }}</h2>
    <button @click="plus">Plus</button>
    <button @click="minus">Minus</button>
  </div>
</template>
<script>
import { ref, computed } from 'vue'

const countFunc = () => {
  // data와 같은 반응형 처리를 위해 ref를 사용하여 0값을 세팅
  const count = ref(0)
  const countDouble = computed(() => count.value * 2)

  // ref는 값에 접근 시 value 속성 사용
  const plus = () => ++count.value
  const minus = () => --count.value

  return { count, countDouble, plus, minus }
}

export default {
  name: 'CountView',
  setup() {
    const { count, countDouble, plus, minus } = countFunc()

    return {
      count,
      countDouble,
      plus,
      minus
    }
  }
}
</script>
