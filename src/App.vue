<template>
<div>
 <div>
                <svg id="svg" ref="svg" height="600" width="510">
                    <path class="bar" v-for="(state, index) in stateData"  v-model="stateData[index]"
                    :d="pathGenerator(state.feature)" :style="{stroke: 'darkslategray'}">
                    </path> 
                </svg>
            </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as d3 from "d3";
export default {
data(){
        return {
                statesJson: null,
                }
            },
        methods:{
          axiosCall() {
               axios.all([axios.get('https://raw.githubusercontent.com/smlab-niser/CRiAPGraph/master/India.json')])
              .then(axios.spread((user1) => {
               this.statesJson=user1.data
               console.log('api-res',this.statesJson)}
                ))
              .catch(error => { console.log(error)})
              },    
           },
        computed: {
        // Typical projection for showing all states scaled and positioned appropriately
        projection () {
          return d3.geoMercator().scale(900).translate([-1030, 700])
        },

        // Function for converting GPS coordinates into path coordinates
        pathGenerator () {
          return d3.geoPath().projection(this.projection)
        },
            // Combine the states GeoJSON with a rank-based gradient
        stateData (index) {
          return this.statesJson ? this.statesJson.features.map(feature => {
            return { feature  } }):[]
        }
       },
      created:function(index){
            this.axiosCall();
          },
}

</script>
