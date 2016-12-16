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








<br>
<div class="deploy_block_step">1. </div>
<h3 class="servlocation"style="font-size:19px;"> Server Location	</h3>

  <div class="choicezone">

    <div  class="buttonchoice" @click="queryLocation(dropdownLocations[0].value,1)" :style="{'border-color': bgcolor }" >
        <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
        <br><br>US-East / US Standard <br>(Virginia)
  </div>

    <div  class="buttonchoice" @click="queryLocation(dropdownLocations[1].value,2)" :style="{'border-color': bgcolor2 }">
      <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
      <br><br>US-West-2 <br>(Oregon)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[2].value,3)" :style="{'border-color': bgcolor3 }">
    <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
    <br><br>US-West <br>(Northern California)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[3].value,4)" :style="{'border-color': bgcolor4 }">
    <img src="http://upic.me/i/p0/ireland.png" alt="" align="center">
    <br><br>Europe <br>(Ireland)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[4].value,5)" :style="{'border-color': bgcolor5 }">
    <img src="http://upic.me/i/57/germany.png" alt="" align="center">
    <br><br>Europe Central <br>(Frankfurt)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[5].value,6)" :style="{'border-color': bgcolor6 }">
    <img src="http://upic.me/i/79/singapore.png" alt="" align="center">
    <br><br>Asia Pacific <br>(Singapore)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[6].value,7)" :style="{'border-color': bgcolor7 }">
    <img src="http://upic.me/i/o9/japan.png" alt="" align="center">
    <br><br>Asia Pacific <br>(Japan)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[7].value,8)" :style="{'border-color': bgcolor8 }">
    <img src="http://upic.me/i/on/australia.png" alt="" align="center">
    <br><br>Asia Pacific <br>(Sydney)
  </div>
  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[8].value,9)" :style="{'border-color': bgcolor9 }">
    <img src="http://upic.me/i/4h/korea-south.png" alt="" align="center">
    <br><br>Asia Pacific <br>(Seoul)
  </div>

  <div  class="buttonchoice" @click="queryLocation(dropdownLocations[9].value,10)" :style="{'border-color': bgcolor10 }">
    <img src="http://upic.me/i/x9/india.png" alt="" align="center">
    <br><br>Asia Pacific <br>(Mumbai)
  </div>


  <div class="buttonchoice" @click="queryLocation(dropdownLocations[9].value,11)" :style="{'border-color': bgcolor11 }">
    <img src="http://upic.me/i/db/brazil.png" alt="" align="center">
    <br><br>South America<br> (Sao Paulo)

  </div>


    </div>

<br>
<hr>
<br>
<div class="deploy_block_step2">2. </div>
<h3 class="servlocation"style="font-size:19px;"> Windows	</h3>

  <div class="choiceos">


       <div class="buttonchoiceos"@click="queryos1(0)" :style="{'border-color': num }">
        <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px" >
        <br><br>{{nameOS[0].value.text}}
      </div>

      <div class="buttonchoiceos"@click="queryos1(1)" :style="{'border-color': num2 }">
       <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center"  width="100px">
      <br> {{nameOS[1].value.text}}
     </div>

     <div class="buttonchoiceos"@click="queryos1(2)" :style="{'border-color': num3 }">
      <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px">
      <br>{{nameOS[2].value.text}}
    </div>

    <div class="buttonchoiceos" @click="queryos1(3)" :style="{'border-color': num4 }">
     <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px">
     <br>{{nameOS[3].value.text}}
   </div>

   <div class="buttonchoiceos"  @click="queryos1(4)" :style="{'border-color': num5 }">
    <img src="http://upic.me/i/x5/linux1600.png" alt="" align="center" width="100px">
    <br><br>{{nameOS[4].value.text}}
  </div>

  <div class="buttonchoiceos" @click="queryos1(5)" :style="{'border-color': num6 }">
   <img src="http://upic.me/i/8x/redhat.png" alt="" align="center" width="100px">
  <br> {{nameOS[5].value.text}}
 </div>

 <div class="buttonchoiceos" @click="queryos1(6)" :style="{'border-color': num7 }">
  <img src="http://upic.me/i/nw/esuse.png" alt="" align="center" width="100px">
  <br>{{nameOS[6].value.text}}
</div>

</div><br>

<hr>

<div class="Showsum">
พันล้าน
<p class="inset">  1,000,000,000   </p>
</div>

<hr>



  <div class="signup-form--container">
<div class="signup-form--container--inner">
          <div class="herounit__signup">
            <div class="herounit__title">
              <div class="herounit__title-heading">Try Wake free for 30 days</div>
              <p class="signup-form__text">No credit card required. Cancel anytime.</p>
              <a href="#" class="btn btn-hero btn-hero--white">Home</a>
            </div>
          </div>
        </div>
        </div>


<a rel="nofollow" style="display:scroll;position:fixed;bottom:10px;right:5px;" href="#" title="Back to Top"><img src="http://2.bp.blogspot.com/-BkNGUImcIV4/USDcBMHYjqI/AAAAAAAAAig/qEtwRO4pH6Q/s1600/back+to+top.png "/></a><!--mybloggersworld.com-->


<hr><br>
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

sadasdsdad



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
      bgcolor: '#bdbdbd',
      bgcolor2: '#bdbdbd',
      bgcolor3: '#bdbdbd',
      bgcolor4: '#bdbdbd',
      bgcolor5: '#bdbdbd',
      bgcolor6: '#bdbdbd',
      bgcolor7: '#bdbdbd',
      bgcolor8: '#bdbdbd',
      bgcolor9: '#bdbdbd',
      bgcolor10: '#bdbdbd',
      bgcolor11: '#bdbdbd',
      num: '#bdbdbd',
      num2: '#bdbdbd',
      num3: '#bdbdbd',
      num4: '#bdbdbd',
      num5: '#bdbdbd',
      num6: '#bdbdbd',
      num7: '#bdbdbd',
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
    queryLocation: function (dropdownLocation, br) {
      console.log(br)
      if (br === 1) {
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor = '#0d47a1'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 2) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#0d47a1'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 3) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#0d47a1'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 4) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#0d47a1'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 5) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#0d47a1'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 6) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#0d47a1'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 7) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#0d47a1'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 8) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#0d47a1'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 9) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#0d47a1'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 10) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#0d47a1'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 11) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#0d47a1'
      }
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
    queryos1: function (num) {
      if (num === 0) {
        this.num = '#0d47a1'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 1) {
        this.num = '#bdbdbd'
        this.num2 = '#0d47a1'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 2) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#0d47a1'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 3) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#0d47a1'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 4) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#0d47a1'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 5) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#0d47a1'
        this.num7 = '#bdbdbd'
      }
      if (num === 6) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#0d47a1'
      }
    },
    banOS: function (location) {
      if (location === 'US East (N* Virginia)') this.dropdownOS[3].value.status = 1
      // ******************
      else if (location === 'US West (Oregon)') this.dropdownOS[3].value.status = 1
      else if (location === 'EU (Ireland)') this.dropdownOS[3].value.status = 1
    },
    queryOS: function (dropdownLocation, br) {
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
background-color: #ffffff;
height: 100%; /* ให้ html และ body สูงเต็มจอภาพไว้ก่อน */
   margin: 0;
   padding: 0;
   font-size: 100%;
}
h1, h2 {
  font-weight: normal;
}


.choicezone {
  padding-left: 17%;
  padding-right: 3%;
  text-align: left;

}
.buttonchoice {
  width: 12%;
  height: 18.2vh;
  border: 1px solid #bdbdbd;
  border-width: 2px;
  border-radius: 5%;
  display: inline-table;
    cursor: pointer;
   margin: 7px;
   padding: 17px;
   text-align: center;;
   background-color: #ffffff;
}
.buttonchoice:hover {
  border: 2px solid #0d47a1;
  background-color: #e0f7fa;
}

.buttonchoice:active{


  background-color: #bbdefb;
}


.choiceos {
  padding-left: 17%;
  padding-right: 3%;
  text-align: left;

}

.buttonchoiceos {
  width: 10vw ;
  height: 24.5vh;
  border: 1px solid #bdbdbd;
  border-width: 2px;
  border-radius: 5%;
  display: inline-table;
  cursor: pointer;
   margin: 7px;
   padding: 17px;
   text-align: center;;
   background-color: #ffffff;
}

.buttonchoiceos:hover {
  border: 2px solid #0d47a1;
  background-color: #e0f7fa;
}

.buttonchoiceos:active{


  background-color: #bbdefb;
}

.deploy_block_step {
   position:absolute;
   top:15.5%;
   left:12%;margin-top:0%;
   height:5%;
   width:3%;
   border:3px solid #000000;
   color:#000000;
   font-size:2;
   font-weight:20;
   text-align:center;
   line-height:220%;
   border-radius:50%;

 }
 .deploy_block_step2 {
    position:absolute;
    top:96.8%;
    left:12%;margin-top:0%;
    height:5%;
    width:3%;
    border:3px solid #000000;
    color:#000000;
    font-size:2;
    font-weight:20;
    text-align:center;
    line-height:220%;
    border-radius:50%;


  }


 .servlocation {
   padding-left: 16%;
   /*background-color: red ;*/
}
.number{
  padding-left: 40%;
  padding-right: 25%;
  text-align: center;


}

input[type=text] {
       width: 100%;
       padding:15px 20px;
       margin: 8px 0;
       box-sizing: border-box;
       border: 3px solid #ccc;
      -webkit-transition: 0.5s;
       transition: 0.5s;
       outline: none;
       font-size: 15px;

   }

   input[type=text]:focus {
       border: 3px solid #ef5350;
 font-size: 20px;
  padding:20px 15px;
background-color: #fce4ec;
   }

.Showsum{
/*border-style: groove;*/
padding-left: 40%;
padding-right: 38%;
text-align: center;
}


.inset{
       width: 100%;
       padding: 5% 10% 5% 10%;
       box-sizing: border-box;
       outline: none;
       text-align: center;
       font-size:17px;
       border: 3px solid #4caf50;
       background-color: #b9f6ca;
       font-family: fantasy;
       letter-spacing: 2.5pt;
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




.signup-form--container--inner {
    height: 100%;
     transition: opacity .2s;
      background: linear-gradient(to bottom,#010101 0,#003197 60%,#5540cb 100%);
}
.herounit__signup {
    font-size: 18px;
    color: #8abfff;
    margin: 0 auto;
    padding: 80px 0 70px;
    width: 38%;
    min-width: 600px;
    transition: all .4s;
}
.herounit__title {
    margin: 0 auto 40px;
    line-height: 1.45;
    transition: all .4s;
}
.herounit__title-heading {
    font-size: 30px;
    color: #fff;
}
.herounit__signup a {
    padding: .4em 1.5em;
}
.btn-hero--play, .btn-hero--white {
    color: #006dfe;
    background-color: #fff;
}

.btn-hero {
    font-size: 17px;
    box-sizing: border-box;
    height: 2.4em;
    border-radius: 1.2em;
    padding: .6em 1.5em;
}
.btn {
    font-size: 100%;
    text-decoration: none;
    font-family: inherit;
    white-space: nowrap;
    vertical-align: middle;
    border: none;
    display: inline-block;
    cursor: pointer;
}









</style>
