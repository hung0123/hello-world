<template>
  <div class="item" :style=styles v-on:click.ctrl="quickStash()" v-on:click.shift="quickStash()" draggable="true" droppable="true" 
  @dragstart="drag" @drop="drop" @dragover.prevent @dragend="dragEnd">
  </div>
</template>

<!-- https://segmentfault.com/a/1190000013606983 拖拉參考-->
<script>
var dropResult = "NG";



export default {
  name: 'Pocket',
  data(){
      return{
        dragging:false,//正在拖曳
        item:this.itemprop,
      }
  },
  props: {
      itemprop:{
        type: Object
      }
  },
  computed: {
        styles() {
            if(this.item !== null){
              if(this.dragging){
                return{
                  'background-image': 'url(' + require('../../src/assets/img/items/' + this.item.name + '.png') +')',
                  'border':'1px solid red',
                }
              }

              return {
                  'background-image': 'url(' + require('../../src/assets/img/items/' + this.item.name + '.png') +')',
              }
            }
            return{}
        },
    },
  methods:{
    quickStash: function() {
      if(this.item != null)
      {
        console.log(this.item.data);
      }
    },
    drag: function(event) {
      this.dragging = true;
      event.dataTransfer.setData('item', JSON.stringify(this.item))
      //this.item = null;
    },
    drop: function(event) {
      console.log("drop");
      console.log(event);
      var draggingItem = JSON.parse(event.dataTransfer.getData('item'));
      console.log(draggingItem);

      if(this.item !== null)//原本的位置上有東西了
      {
        console.log('原本的位置上有東西了');
        dropResult = 'NG';
      }
      else
      {
        this.item = draggingItem;
        dropResult = 'OK';
      }
      console.log(dropResult);

    },
    dragEnd: function(event) {
      console.log("dragEnd");
      this.dragging = false;

      if(dropResult=='OK'){
        console.log("清掉原本的");
        this.item = null;
      }
      event.dataTransfer.clearData()
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