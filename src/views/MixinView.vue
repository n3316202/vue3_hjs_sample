<template>
  <div><span v-text="this.name"></span></div>
  <!-- myMixin 출력 -->
</template>
<script>
import { myMixin } from '@/mixins/myMixin.js'

export default {
  mixins: [myMixin],
  created() {
    console.log(`created hook : Mixed in view`)
  }
}
</script>
