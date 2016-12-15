<template>
  <div id="ec2" >
    <!-- Drop Down List Location  -->
    <!-- <a class="button"> -->
        <!-- <div class="testbutton"><img src="https://firebasestorage.googleapis.com/v0/b/aws-amazon-fe7a5.appspot.com/o/United-States-of-America.png?alt=media&token=76b363de-b3bc-4a4e-bd54-b5d859ffd69e" placeholder="First name" alt="">
            <br>{{ dropdownLocations[0].text }}
        </div> -->

    <!-- </a> -->
      <!-- <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
          <a class="button">{{ dropdownLocations.text }}</a>
      </option> -->









<h3 class="servlocation"style="font-size:19px;"> 1. Server Location	</h3>

  <div class="choicezone">
      <div  class="buttonchoice" v-for="dropdownLocation in dropdownLocations" @click="queryLocation(dropdownLocation.value)" >
        <img :src="dropdownLocation.img" alt="" align="center">
        <br><br>{{ dropdownLocation.text}}
      </div>
  </div>
<hr>
      <div

      <br>

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
    <div  v-show="showHdd" @click="queryHdd()">
     <select v-model="getHdd">
       <option v-for="dropdownHdd in dropdownHdd " v-bind:value="dropdownHdd.newHdd" >
          {{ dropdownHdd.newHdd }}
      </option>
     </select>
     <span>Selected storage : {{ getHdd }}</span><br><br>
    </div>

      <button @click="priceSum()">GET DATA</button><br>
    <br>{{priceEc2}}

     <!-- <option v-for="dataQLocation in dataQLocation">
        {{ dataQLocation |JSON }}
    </option> -->
  </div>
</template>

<script>
export default {
  name: 'EC2',
  props: [],
  data () {
    return {
      dataQLocation: [],
      dataQOS: [],
      dataQCPU: [],
      dataQRAM: [],
      dataQHdd: [],
      // -------------------
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
      // -------------------
      dropdownLocations: [
       { text: 'US-East / US Standard (Virginia)', value: 'US East (N* Virginia)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'US-West-2 (Oregon)', value: 'US West (Oregon)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'US-West (Northern California)', value: 'US West (N* California)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'Europe (Ireland)', value: 'EU (Ireland)', img: 'http://upic.me/i/p0/ireland.png' },
       { text: 'Europe Central (Frankfurt)', value: 'EU (Frankfurt)', img: 'http://upic.me/i/57/germany.png' },
       { text: 'Asia Pacific (Singapore)', value: 'Asia Pacific (Singapore)', img: 'http://upic.me/i/79/singapore.png' },
       { text: 'Asia Pacific (Japan)', value: 'Asia Pacific (Tokyo)', img: 'http://upic.me/i/o9/japan.png' },
       { text: 'Asia Pacific (Sydney)', value: 'Asia Pacific (Sydney)', img: 'http://upic.me/i/on/australia.png' },
       { text: 'Asia Pacific (Seoul)', value: 'Asia Pacific (Seoul)', img: 'http://upic.me/i/4h/korea-south.png' },
       { text: 'Asia Pacific (Mumbai)', value: 'Asia Pacific (Mumbai)', img: 'http://upic.me/i/x9/india.png' },
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)', img: 'http://upic.me/i/db/brazil.png' }],
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
      dropdownRAM: [],
      dropdownHdd: [],
      priceEc2: []
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
    // priceSum2: function () {
    //   if (this.dataQRAM.length !== 0) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  components: {},
  methods: {
    queryLocation: function (dropdownLocation) {
      console.log(dropdownLocation)
      if (this.getLocation !== '-' && this.getLocation !== this.getLocation2) {
        // Clear Data -----------
        this.getOS = '-'
        // --- DATA -------
        this.dataQLocation = []
        this.dataQOS = []
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownOS = []
        this.dropdownOS = JSON.parse(JSON.stringify(this.nameOS))
        this.dropdownOS = this.nameOS
        //  ---------------------
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
        this.getCPU = '-'
        // --- DATA -------
        this.dataQOS = []
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownCPU = []
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
        this.getRAM = '-'
        // --- DATA -------
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownRAM = []
        //  --------------------
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
        this.getHdd = '-'
        // --- DATA -------
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownHdd = []
        // ---------------------
        this.getRAM2 = this.getRAM
        var arrData = Object.keys(this.dataQCPU).map(key => this.dataQCPU[key])
        arrData.forEach(item => {
          if (item.attributes.memory === this.getRAM.replace('.', '*')) {  // สลับกลับจากตัว . เป็น *  เพื่อเอาไปหาใน Json
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
    },
    queryHdd: function () {
      if (this.getHdd !== '-' && this.getHdd !== this.getHdd2) {
        // Clear Data -----------
        // --- DATA -------
        this.dataQHdd = []
        // ---------------------
        this.getHdd2 = this.getHdd
        var arrData = Object.keys(this.dataQCPU).map(key => this.dataQRAM[key])
        arrData.forEach(item => {
          if (item.attributes.storage === this.getHdd) {  // สลับกลับจากตัว . เป็น *  เพื่อเอาไปหาใน Json
            this.dataQHdd.push(item)
          }
        })
        let sku = this.dataQHdd[0].sku
        let text = 'https://aws-amazon-fe7a5.firebaseio.com/terms/OnDemand/' + sku + '/' + sku + '*JRTCKXETXF/priceDimensions/' + sku + '*JRTCKXETXF*6YS6EN2CT7/pricePerUnit/USD.json'
        this.$http.get(text).then(function (res) {
          this.priceEc2 = res.body
        })
      }
    },
    priceSum: function () {
      let sku = this.dataQHdd[0].sku
      let text = 'https://aws-amazon-fe7a5.firebaseio.com/terms/OnDemand/' + sku + '/' + sku + '*JRTCKXETXF/priceDimensions/' + sku + '*JRTCKXETXF*6YS6EN2CT7/pricePerUnit/USD.json'
      this.$http.get(text).then(function (res) {
        this.priceEc2 = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ec2 {
background-color: #eeeeee;
}
h1, h2 {
  font-weight: normal;
}

/**							{box-sizing:border-box;}*/
.choicezone {
  padding-left: 20%;
  padding-right: 20%;
}
.buttonchoice {
  width: 20%;
  height: 15vh;
  border: 5px solid #e6e9eb;
  border-width: 2px;
  border-radius: 5%;
  display: inline-table;
  cursor: pointer;
   margin: 7px;
   padding: 17px;
}
.buttonchoice:hover {
  border: 2px solid #1e88e5;
  background-color: #b5b5b5;
}

div{

align-content: center;
}

h1{
  align-content: center;

}
h3{
  text-align: left;

}
.servlocation {
  padding-left: 10%;
  background-color: red;
}

</style>
