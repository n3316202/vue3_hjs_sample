<template>
  <div>
    <label>기본 숫자:<input type="number" v-model.number.lazy="num" /></label>
    <p>제곱: {{squareC}}, {{squareW}}</p>
    <p>제곱근: {{sqrtC}}, {{sqrtW}}</p>
</div>
</template>

<script>
import {  ref, watch, computed} from "vue";

export default {
  setup() {
    const num = ref(4);

    // computed: 값이 변경되면 계산 후 반환 --> template에서 사용
    const squareC = computed(() => {
      return num.value * num.value;
    });

    const sqrtC = computed(() => {
      return Math.sqrt(num.value);
    });

    const squareW = ref(0);
    const sqrtW = ref(0);

    watch(
      num, // 감시 대상
      (nv, ov) => {
        console.log(`num 변경:${ov} -> ${nv}`);
        squareW.value = nv * nv; // side effect로 처리(반환X)
        sqrtW.value = Math.sqrt(nv);
      },
      { immediate: true } // 옵션 객체
    );

    return { num, squareC, squareW, sqrtC, sqrtW };
  }

};
</script>