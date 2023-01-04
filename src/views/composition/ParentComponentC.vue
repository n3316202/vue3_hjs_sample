<template>
 <ChildComponentC @send-message="sendMessage" ref="child_component" />
</template>
<script>

import ChildComponentC from './ChildComponentC';
import { onMounted,ref } from 'vue';
// 다만, 컴포지션 API의 경우 this 컨텍스트가 존재하지 않으므로 조금 다른 방법으로 사용

export default {
 components: {ChildComponentC},
//  mounted() {
//    this.$refs.child_component.$refs.btn.click();
//  }
  setup(props,ctx){
    const child_component =  ref(null);

    onMounted(() => {
      //console.log(child_component.value.childFunc());
      console.log(child_component.value.btn);
      
    });

    return {child_component}
  }
}
</script>