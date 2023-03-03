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
    <router-link to="/axiosget">엑시오스Get 방식</router-link> |
    <router-link to="/axiospost">엑시오스Post 방식</router-link> |
    <router-link to="/axiospost2">엑시오스Post2 방식</router-link> |
    <router-link to="/axiosglobal">엑시오스 글로벌겟 예제</router-link> |
    <router-link to="/axiossync">엑시오스 동기화 예제</router-link> |
  </div>
  <hr />
  <div id="nav">
    <router-link to="/compo1">컴포지션 기본</router-link> |
    <router-link to="/compsition/parent">parent</router-link> |
  </div>
  <hr />
  <!-- <hr />
  <div id="nav">
    <router-link :to="{ name: 'Home' }">홈링크</router-link> |
    <router-link :to="{ name: 'About' }">어바웃링크</router-link> |
    <router-link :to="{ name: 'About2', params: { name: '홍길동' } }"
      >어바웃링크2</router-link
    >
    |
  </div>
  <hr /> -->

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
