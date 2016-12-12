<template>
  <div id="app">
         <!-- <router-link to="/EC2">EC2</router-link>
         <router-link to="/S3">S3</router-link> -->
    <!-- Drop Down List Location  -->
     <select v-model="getLocation" @click="queryLocation()">
      <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
          {{ dropdownLocations.text }}
      </option>
     </select>
     <span>Selected Location : {{ getLocation }}</span><br><br>

     <!-- Drop Down List OS  -->
     <div  v-show="showOS">
      <select v-model="getOS" @click="queryOS()">
       <option v-for="dropdownOS in dropdownOS " v-bind:value="dropdownOS.value" v-show = "dropdownOS.value.status !== 0">
           {{ dropdownOS.value.text  }}
       </option>
      </select>
      <span>Selected OS : {{ getOS.text  }}</span><br><br>
     </div>
    <!-- Drop Down List vCPU  -->
    <div  v-show="showCPU"  @click="queryCPU()">
     <select v-model="getCPU">
       <option v-for="dropdownCPU in dropdownCPU " v-bind:value="dropdownCPU.newvCPU" >
          {{ dropdownCPU.newvCPU }}
      </option>
     </select>
     <span>Selected vCPU : {{ getCPU }}</span><br><br>
    </div>
    <!-- Drop Down List RAM  -->
    <div  v-show="showRAM" @click="queryRAM()">
     <select v-model="getRAM">
       <option v-for="dropdownRAM in dropdownRAM " v-bind:value="dropdownRAM.newRAM" >
          {{ dropdownRAM.newRAM }}
      </option>
     </select>
     <span>Selected RAM : {{ getRAM }}</span><br><br>
    </div>
    <!-- Drop Down List Hdd  -->
    <div  v-show="showHdd">
     <select v-model="getHdd">
       <option v-for="dropdownHdd in dropdownHdd " v-bind:value="dropdownHdd.newHdd" >
          {{ dropdownHdd.newHdd }}
      </option>
     </select>
     <span>Selected Memory : {{ getHdd }}</span><br><br>
    </div>
    {{dataQLocation.length}}
     <!-- <button @click="showdata()">GET DATA</button> -->
     <!-- <option v-for="dataQLocation in dataQLocation">
        {{ dataQLocation |JSON }}
    </option> -->

    <transition name="slide-fade" mode="out-in">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataQLocation: [],
      dataQOS: [],
      dataQCPU: [],
      getLocation: '-',
      getLocation2: '',
      getOS: '-',
      getOS2: '',
      getCPU: '-',
      getCPU2: '',
      getRAM: '-',
      getRAM2: '',
      getHdd: '-',
      getHdd2: '',
      dropdownLocations: [
       { text: 'US-East / US Standard (Virginia)', value: 'US East (N* Virginia)' },
       { text: 'US-West-2 (Oregon)', value: 'US West (Oregon)' },
       { text: 'US-West (Northern California)', value: 'US West (N* California)' },
       { text: 'Europe (Ireland)', value: 'EU (Ireland)' },
       { text: 'Europe Central (Frankfurt)', value: 'EU (Frankfurt)' },
       { text: 'Asia Pacific (Singapore)', value: 'Asia Pacific (Singapore)' },
       { text: 'Asia Pacific (Sydney)', value: 'Asia Pacific (Sydney)' },
       { text: 'Asia Pacific (Seoul)', value: 'Asia Pacific (Seoul)' },
       { text: 'Asia Pacific (Mumbai)', value: 'Asia Pacific (Mumbai)' },
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)' }],
      nameOS: [
       { value: {text: 'Windows', os: 'Windows', preInstall: 'NA', status: 1} },
       { value: {text: 'Windows and Std. SQL Server', os: 'Windows', preInstall: 'SQL Std', status: 1} },
       { value: {text: 'Windows and Web SQL Server', os: 'Windows', preInstall: 'SQL Web', status: 1} },
       { value: {text: 'Windows and Enterprise SQL Server', os: 'Windows', preInstall: 'SQL Server Enterprise', status: 0} },
       { value: {text: 'Linux', os: 'Linux', preInstall: 'NA', status: 1} },
       { value: {text: 'Red Hat Enterprise Linux', os: 'RHEL', preInstall: 'NA', status: 1} },
       { value: {text: 'SUSE Linux Enterprise Server', os: 'SUSE', preInstall: 'NA', status: 1} }
      ],
      dropdownOS: [],
      dropdownCPU: [],
      dropdownRAM: []
    }
  },
  computed: {

    showOS: function () {
      if (this.dataQLocation.length !== 0) {
        return true
      } else {
        return false
      }
    },
    showCPU: function () {
      if (this.dataQOS.length !== 0) {
        return true
      } else {
        return false
      }
    },
    showRAM: function () {
      if (this.dataQCPU.length !== 0) {
        return true
      } else {
        return false
      }
    },
    showHdd: function () {
      if (this.dataQRAM.length !== 0) {
        return true
      } else {
        return false
      }
    }
  },
  components: {},
  methods: {
    showdata: function () {
      var aa = JSON.stringify(this.ec2Json, null, '  ')
      console.log(aa)
    },
    queryLocation: function () {
      if (this.getLocation !== '-' && this.getLocation !== this.getLocation2) {
        // Clear Data -----------
        this.dataQLocation = []
        this.dataQOS = []
        this.dataQCPU = []
        this.getOS = '-'
        this.dropdownOS = []
        this.dropdownOS = this.nameOS
        // ---------------------
        this.getLocation2 = this.getLocation
        this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/products.json').then(function (res) {
          var arrData = Object.keys(res.body).map(key => res.body[key])
          arrData.forEach(item => {
            if (item.attributes.tenancy === 'Shared' && item.attributes.location === this.getLocation) {
              this.dataQLocation.push(item)
              this.banOS(item.attributes.location)
            }
          })
        })
      }
      // var dictstring = JSON.stringify(this.dataQLocation)
      // var fs = require('fs')
      // fs.writeFile('thing.json', dictstring)
    },
    banOS: function (location) {
      if (location === 'US East (N* Virginia)') this.dropdownOS[3].value.status = 1
      // ******************
      else if (location === 'US West (Oregon)') this.dropdownOS[3].value.status = 1
      else if (location === 'EU (Ireland)') this.dropdownOS[3].value.status = 1
    },
    queryOS: function () {
      if (this.getOS !== '-' && this.getOS !== this.getOS2) {
        // Clear Data -----------
        this.dataQOS = []
        this.dropdownCPU = []
        this.getCPU = '-'
        // ---------------------
        this.getOS2 = this.getOS
        var arrData = Object.keys(this.dataQLocation).map(key => this.dataQLocation[key])
        arrData.forEach(item => {
          if (item.attributes.operatingSystem === this.getOS.os && item.attributes.preInstalledSw === this.getOS.preInstall) {
            this.dataQOS.push(item)
            // แยก vCPU ลงใน  dropdownCPU
            let CPUExist = this.dropdownCPU.find(function (vCPU) {
              return vCPU.newvCPU === item.attributes.vcpu
            })
            if (!CPUExist) {
              let newvCPU = item.attributes.vcpu
              newvCPU = { newvCPU }
              this.dropdownCPU.push(newvCPU)
            }
            // --------------------------
          }
        })
      }
    },
    queryCPU: function () {
      if (this.getCPU !== '-' && this.getCPU !== this.getCPU2) {
        // Clear Data -----------
        this.dataQCPU = []
        this.dropdownRAM = []
        this.getRAM = '-'
        // ---------------------
        this.getCPU2 = this.getCPU
        var arrData = Object.keys(this.dataQOS).map(key => this.dataQOS[key])
        arrData.forEach(item => {
          if (item.attributes.vcpu === this.getCPU) {
            this.dataQCPU.push(item)
            // แยก RAM ลงใน  dropdownRAM
            let RAMExist = this.dropdownRAM.find(function (ram) {
              return ram.newRAM === item.attributes.memory
            })
            if (!RAMExist) {
              let newRAM = item.attributes.memory.replace('*', '.') // สลับตัว * เป็น .
              newRAM = { newRAM }
              this.dropdownRAM.push(newRAM)
            }
            // --------------------------
          }
        })
      }
    },
    queryRAM: function () {
      if (this.getRAM !== '-' && this.getRAM !== this.getRAM2) {
        // Clear Data -----------
        this.dataQRAM = []
        this.dropdownRAM = []
        this.getRAM = '-'
        // ---------------------
        this.getRAM2 = this.getRAM
        var arrData = Object.keys(this.dataQCPU).map(key => this.dataQCPU[key])
        arrData.forEach(item => {
          if (item.attributes.vRAM === this.getRAM.replace('.', '*')) {  // สลับกลับเป็นตัว . เป็น *  เพื่อเอาไปหาใน Json
            this.dataQRAM.push(item)
            // แยก Hdd ลงใน  dropdownHdd
            let HddExist = this.dropdownHdd.find(function (Hdd) {
              return Hdd.newHdd === item.attributes.storage
            })
            if (!HddExist) {
              let newHdd = item.attributes.storage
              newHdd = { newHdd }
              this.dropdownHdd.push(newHdd)
            }
            // --------------------------
          }
        })
      }
    }
    // selectCPU: function () {
    //   if (this.getCPU !== '-' && this.getLocation !== this.getCPU2) {
    //     this.getCPU = this.getCPU2
    //     this.dataQCPU = []
    //     var arrCPU = Object.keys(this.dataQLocation.attributes).map(key => this.dataQLocation.attributes[key])
    //     arrCPU.forEach(item => {
    //       if (item.attributes.tenancy === 'Shared' && item.attributes.location === this.getLocation) {
    //         this.dataQLocation.push(item)
    //       }
    //     })
    //   }
    // }
  }
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
