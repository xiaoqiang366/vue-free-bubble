<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>{{msg}}</h3>

    <vue-free-bubble
      :size="60"
      :isFreeMove="false"
      :distanceToEdge = "20"
      @click="bubbleClick" />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to use vue-free-bubble',
      size: 60
    }
  },
  methods: {
    bubbleClick() {
      console.log('ok')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
