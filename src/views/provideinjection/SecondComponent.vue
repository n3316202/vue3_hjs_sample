<template>
  <div class="comp comp-scolor">
    <p class="comp-name">Second Component</p>
    <p>props : {{ name }}</p>

    <third :name="name" />
  </div>
</template>

<script>
import ThirdComponent from '@/views/provideinjection/ThirdComponent.vue'

export default {
  name: 'second',
  components: { ThirdComponent },
  props: {
    name: String
  }
}
</script>
