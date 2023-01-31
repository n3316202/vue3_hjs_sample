<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
//https://www.koderhq.com/tutorial/vue/http-axios/ 예제 참고
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response)
      console.log(response.data)
      this.posts = response.data
    })
  }
}
</script>

<style></style>
