<template>
  <div class="item" :style=styles v-on:click.ctrl="getData()" v-on:click.shift="getData()">
  </div>
</template>

<script>

export default {
  name: 'Pocket',
  data(){
      return{
        
      }
  },
  props: {
      itemprop:{
        type: Object
      }
  },
  computed: {
        styles() {
            if(this.itemprop !== null){
              return {
                  'background-image': 'url(' + require('../../src/assets/img/items/' + this.itemprop.name + '.png') +')',
              }
            }
            return{}
        }
    },
  methods:{
    getData: function() {
      if(this.itemprop != null)
      {
        console.log(this.itemprop.data);
      }
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    max-width:100%;
    max-height:100%;
}
.item{
  width: 100%;
  min-width: 100%;
  padding-bottom: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}


</style>