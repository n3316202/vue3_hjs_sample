<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: '1',
        title: 'Article title',
        body: 'Article body content'
      })
      .then((response) => console.log(response))
  }
}
</script>
