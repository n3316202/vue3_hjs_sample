<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> |
    <router-link to="/databindingInputText">Data Binding InputText</router-link>
    |
    <router-link to="/databindingInputNumber"
      >Data Binding InputNumber</router-link
    >
    | <router-link to="/watchData">watch data</router-link> |
    <router-link to="/watchExample">watch example</router-link> |
    <router-link to="/nested">Nested Componet</router-link> |
    <router-link to="/databindinglist">Data Binding list</router-link> |
    <router-link to="/firstcomponent">Inject-Provide</router-link> |
    <router-link to="/props/parentcomponentview">Props 예제</router-link> |
    <router-link to="/computedvsmethodview">Computed VS Method</router-link> |
    <router-link to="/computedvswatch">Computed VS Wathch</router-link> |
  </div>
  <hr />
  <div id="nav">
    <router-link to="/">Component Home</router-link> |
    <router-link to="/compsition/parent">parent</router-link> |
  </div>
  <hr />
  <router-view />
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
