<template>
  <div class="inventory column">
    

    <!-- <Pocket v-for="(item, index) in items.itemList" :key="index" :itemprop="item" :index="index"/> -->
    <div v-for="(item, index) in items.playerinfo.slot" :key="index" :class="stickStyle(index)">
       
      <Pocket :itemprop="getItem(index)" :index=index>
        
      </Pocket>
      <div v-show="index<5" class="item-keybind">{{index+1}}</div>
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
    },
    stickStyle: function(index) {
      if(index<5){
        return {
          pocket:true,
          stick:true
        }
      }
      else{
        return {
          pocket:true
        }
      }
    },
  },
  computed:{
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td{
    background-color: blue;
}
.inventory{
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
.pocket{
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
.pocket:hover {
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
}
.hasItem{
    padding-top:10px;
}
.item{
  width: 100%;
  min-width: 100%;
  padding-bottom: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}
.stick{
  position: sticky;
  top: 0px;
  z-index: 20000;
  background-color: rgb(75, 75, 75);
}
.item-keybind{
  position: absolute;
    text-align: center;
    font-size: 15px;
    line-height: 0px;
    color: #fff;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    top: 0;
    z-index: 999;
    background: #2c2c2c;
    padding: 10px;
    border-right: 1px solid #666;
    border-bottom: 1px solid #666;
}

</style>
