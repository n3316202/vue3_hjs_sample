
<template>
<div>
  <input type="text" @keyup="checkValue" v-model="valueModel" />
</div>
</template>
<script>
import { ref } from "vue";

export default { 
  
  setup(){
    let valueModel =  ref('South Korea');

    const checkValue = () =>{
      console.log(valueModel.value);
    }
    return{valueModel,checkValue}
  }
}
</script>

