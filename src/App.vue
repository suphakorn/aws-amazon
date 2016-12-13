<template>
  <div id="app">
      <router-link to="/EC2">EC2</router-link>
      <router-link to="/S3">S3</router-link>
      <router-link to="/RDS">RDS</router-link>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
// item.attributes.instanceType === 'm3*xlarge' && item.attributes.tenancy === 'Shared' && item.attributes.operatingSystem === 'Windows' && item.attributes.location === 'Asia Pacific (Singapore)'
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
#app a.router-link-active {
  color: #f66;
}
#app li.router-link-active a {
  color: #f66;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
