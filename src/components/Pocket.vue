<template>
  <div
    class="item"
    :style="styles"
    v-on:click.ctrl="quickStash()"
    v-on:click.shift="quickStash()"
    draggable="true"
    droppable="true"
    @dragstart="drag"
    @drop="drop"
    @dragover.prevent
    @dragend="dragEnd"
  ></div>
</template>

<!-- https://segmentfault.com/a/1190000013606983 拖拉參考-->
<script>
var dropResult = "NG";

export default {
  name: "Pocket",
  data() {
    return {
      dragging: false, //正在拖曳
      item: this.itemprop,
      itemIndex: this.index,
    };
  },
  props: {
    itemprop: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    styles() {
      if (this.item !== null) {
        if (this.dragging) {
          return {
            "background-image":
              "url(" +
              require("../../src/assets/img/items/" + this.item.name + ".png") +
              ")",
            border: "1px solid red",
          };
        }

        return {
          "background-image":
            "url(" +
            require("../../src/assets/img/items/" + this.item.name + ".png") +
            ")",
        };
      }
      return {};
    },
  },
  methods: {
    quickStash: function () {
      if (this.item != null) {
        console.log(this.item.data);
      }
    },
    drag: function (event) {
      this.dragging = true;
      event.dataTransfer.setData("item", JSON.stringify(this.item));
      event.dataTransfer.setData("itemIndex", JSON.stringify(this.itemIndex));
      //this.item = null;
    },
    drop: function (event) {
      console.log("drop");
      var draggingItem = JSON.parse(event.dataTransfer.getData("item"));
      var draggingItemIndex = JSON.parse(
        event.dataTransfer.getData("itemIndex")
      );

      console.log(draggingItemIndex);
      console.log(this.itemIndex);
      console.log(draggingItemIndex != this.itemIndex);
      if (draggingItemIndex == this.itemIndex) {
        console.log("拖曳到同一格");
        dropResult = "NG";
      } else if (this.item !== null) {
        //原本的位置上有東西了
        if (draggingItem.name === this.item.name && this.item.data.canMerge) {
          dropResult = "OK";
          console.log(
            "原本的位置上有東西了，這個東西跟拖曳的東西是相同的且可以堆疊"
          );
          if (this.item.data.qty === this.item.max) {
            //   $.post("http://wm_inventoryhud/SwapItems", JSON.stringify({
            //       originOwner: origin.parent().data('invOwner'),
            //       originItem: origin.find('.item').data('item'),
            //       originSlot: origin.data('slot'),
            //       originTier: origin.parent().data('invTier'),
            //       destinationOwner: destination.parent().data('invOwner'),
            //       destinationItem: destination.find('.item').data('item'),
            //       destinationSlot: destination.data('slot'),
            //       destinationTier: destination.parent().data('invTier'),
            //   }));
            console.log("堆疊=max");
          } else if (draggingItem.data.qty + this.item.data.qty <= 100) {
            // $.post(
            //   "http://wm_inventoryhud/CombineStack",
            //   JSON.stringify({
            //     originOwner: origin.parent().data("invOwner"),
            //     originSlot: origin.data("slot"),
            //     originTier: origin.parent().data("invTier"),
            //     originItem: originItem,
            //     originQty: originItem.qty,
            //     destinationOwner: destination.parent().data("invOwner"),
            //     destinationSlot: destinationItem.slot,
            //     destinationQty: destinationItem.qty,
            //     destinationTier: destination.parent().data("invTier"),
            //     destinationItem: destinationItem,
            //   })
            // );
            draggingItem.data.qty += this.item.data.qty;
            console.log("堆疊後有:" + draggingItem.data.qty);
            console.log("堆疊<=max");
            this.item = draggingItem;
            dropResult = "OK";
          }
        } else {
          console.log("原本的位置上有東西了，且跟正在拖曳的不同");
          dropResult = "NG";
        }
      } else {
        // $.post("http://wm_inventoryhud/MoveToEmpty", JSON.stringify({
        //         originOwner: origin.parent().data('invOwner'),
        //         originSlot: origin.data('slot'),
        //         originTier: origin.parent().data('invTier'),
        //         // originItem: item,
        //         destinationOwner: destination.parent().data('invOwner'),
        //         destinationType: destination.find('.item').data('invType'),
        //         destinationSlot: item.slot,
        //         destinationTier: destination.parent().data('invTier'),
        //         // destinationItem: destination.find('.item').data('item'),
        //     }));
        console.log("拖曳到空白格");
        this.item = draggingItem;
        dropResult = "OK";
      }
    },
    dragEnd: function (event) {
      console.log("dragEnd");
      this.dragging = false;

      if (dropResult == "OK") {
        console.log("清掉原本的");
        this.item = null;
      }
      event.dataTransfer.clearData();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
.item {
  width: 100%;
  min-width: 100%;
  padding-bottom: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>