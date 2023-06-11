<template>
  <div id="app">
    <PageHeader />
    <div class="container">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'

export default {
  components: { PageHeader },
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  position: relative;
  display: flex;
}

.main {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
