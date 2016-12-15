<template>
  <div id="app" >
      <!-- <button @click="Test()">GET DATA</button>
       {{dropdownrds}} -->
         <div id="header">
           <h1>    		W T F (EC2)      		</h1>
         </div>
      <EC2 ></EC2>
      <transition name="slide-fade" mode="out-in">
      </transition>
  </div>
</template>

<script>
import EC2 from './components/EC2.vue'
export default {
  name: 'app',
  components: {
    EC2
  },
  data () {
    return {
      dropdownrds: []
    }
  },
  methods: {
    Test: function () {
      this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/RDS/products.json').then(function (res) {
        var arrData = Object.keys(res.body).map(key => res.body[key])
        arrData.forEach(item => {
          let CPUExist = this.dropdownrds.find(function (vCPU) {
            return vCPU.newvCPU === item.attributes.deploymentOption
          })
          if (!CPUExist) {
            let newvCPU = item.attributes.deploymentOption
            newvCPU = { newvCPU }
            this.dropdownrds.push(newvCPU)
          }
        })
      })
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
  padding-top: 1%;
  background-color: #4fc3f7;
}
body{
    height: 100%;
    width: 100%;
    padding-bottom: 0%;
    padding-right: 0%;
    padding-left: 0%;
    padding-top: 0%;
    margin-left: 0%;
    margin-top: 0%;
    margin-right: 0%;
    margin-bottom: 0%;
}
h1{
  text-align: center;
}

.header {

  height: 10%;
}



</style>
