<template>
  <div class="Inventory column">
    

    <!-- <Pocket v-for="(item, index) in items.itemList" :key="index" :itemprop="item" :index="index"/> -->
    <div v-for="(item, index) in items.playerinfo.slot" :key="index" class="Pocket">
       
      <Pocket :itemprop="getItem(index)"/>

    </div>

  </div>
</template>

<script>
import Pocket from './Pocket.vue'

export default {
  name: 'Inventory',
  components: {
    Pocket
  },
  props: {
      items:{
        type: Object
      }
  },
  data(){
    return{
    }
  },
  methods:{
    getItem:function(index){
      if(this.items.itemList[index+1] === undefined || Object.keys(this.items.itemList[index+1]).length===0){
        return null;
      }
      else{
        return this.items.itemList[index+1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td{
    background-color: blue;
}
.Inventory{
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 19.35% 19.35% 19.35% 19.35% 19.35%;
    grid-template-columns: 19.35% 19.35% 19.35% 19.35% 19.35%;
    grid-gap: 0.7%;
    width: 100.5%;
    min-width: 100.5%;
    grid-auto-rows: min-content;
}
.Pocket{
    float: left;
    background-color: rgba(50, 50, 50, 0.24);
    position: relative;
    border: 1px solid #666;
    border-radius: 3px;
    -webkit-transition: -webkit-filter ease-in 0.15s;
    transition: -webkit-filter ease-in 0.15s;
    transition: filter ease-in 0.15s;
    transition: filter ease-in 0.15s, -webkit-filter ease-in 0.15s;
    overflow: hidden;
}
.Pocket:hover {
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
}
.hasItem{
    padding-top:10px;
}
.Item{
  width: 100%;
  min-width: 100%;
  padding-bottom: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}


</style>
