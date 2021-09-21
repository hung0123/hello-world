<template>
  <div id="app">
    
      <div class="inventory-wrapper">
        
          <Inventory :items="item"/>
       
        </div>
      <div class="control"> <Control/></div>
      <div class="inventory-wrapper"><Inventory :items="itemGround"/></div>
    
   </div>
</template>


<script>
import Inventory from './components/Inventory.vue'
import Control from './components/Control.vue'
export default {
  name: 'App',
  components: {
    Inventory,
    Control
  },
  data(){
    return{
      item:{
            "invTier":"player",
            "itemList":{
            "1":{
            "name":"bread",
            "hash":1520635147,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252236,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "2":{
            "name":"bread",
            "hash":1845990004,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252237,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "3":{
            },
            "4":{
            },
            "5":{
            "name":"bread",
            "hash":1845990004,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252237,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "6":{
            "name":"vehicle_key",
            "hash":-1739315070,
            "content":"<div class= \"context-tittle\">車鑰匙</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">功能道具</span></div><div class=\"context-type\">車牌 : <span class=\"float-right\">UNWETQMY</span></div><div class=\"line\"></div><div class= \"context-desc\">可用於遠程遙控的鑰匙</div>",
            "data":{
            "canuse":true,
            "candelete":true,
            "plate":"UNWETQMY",
            "istool":true
            }
            },
            "7":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "8":{
            },
            "9":{
            },
            "10":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "12":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "13":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "14":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "15":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "16":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "17":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "18":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "27":{
            },
            "40":{
            }
            },
            "action":"setItems",
            "invOwner":"steam:11000010ccac5d9",
            "playerinfo":{
            "slot":40,
            "cash":406,
            "weight":4.94999999999999,
            "maxWeight":24
            }
      },
      itemGround:{
            "invTier":"player",
            "itemList":{
            "1":{
            "name":"bread",
            "hash":1520635147,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252236,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "2":{
            "name":"bread",
            "hash":1845990004,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252237,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "3":{
            },
            "4":{
            },
            "5":{
            "name":"bread",
            "hash":1845990004,
            "content":"<div class= \"context-tittle\">麵包</div><div class=\"line\"></div><div class=\"context-type\">* <span class=\"float-right\">需冷藏</span></div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">食物</span></div><div class=\"context-type\">單位 : <span class=\"float-right\">尚未開封</span></div><div class = \"opts\">保存期限 : <span class=\"float-right\"><span style=\"color:yellow\">已過期</span></span></div><div class=\"line\"></div><div class= \"context-desc\">這是塊美味可口的小麵包<br>傳說中吃了的人會變幸運兒</div>",
            "data":{
            "cansplit":true,
            "mfd":1631252237,
            "lasttick":1631768561,
            "qty":1,
            "canuse":true,
            "isfood":true,
            "duration":86400,
            "candelete":true
            }
            },
            "6":{
            "name":"vehicle_key",
            "hash":-1739315070,
            "content":"<div class= \"context-tittle\">車鑰匙</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">功能道具</span></div><div class=\"context-type\">車牌 : <span class=\"float-right\">UNWETQMY</span></div><div class=\"line\"></div><div class= \"context-desc\">可用於遠程遙控的鑰匙</div>",
            "data":{
            "canuse":true,
            "candelete":true,
            "plate":"UNWETQMY",
            "istool":true
            }
            },
            "7":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "8":{
            },
            "9":{
            },
            "10":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "12":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "13":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "14":{
            "name":"money_coin",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">銅板</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 枚 (1元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的銅板</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "15":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "16":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "17":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "18":{
            "name":"money_paper",
            "hash":-1131246330,
            "content":"<div class= \"context-tittle\">紙鈔</div><div class=\"line\"></div><div class=\"context-type\">類型 : <span class=\"float-right\">貨幣</span></div><div class=\"context-type\">數量 : <span class=\"float-right\">1 張 (100元)</span></div><div class=\"line\"></div><div class= \"context-desc\">平凡無奇的紙鈔</div>",
            "data":{
            "candelete":true,
            "cansplit":true,
            "qty":1,
            "canMerge":true,
            "iscurrency":true
            }
            },
            "27":{
            },
            "40":{
            }
            },
            "action":"setItems",
            "invOwner":"steam:11000010ccac5d9",
            "playerinfo":{
            "slot":40,
            "cash":406,
            "weight":4.94999999999999,
            "maxWeight":24
            }
      }
      
    }
  }
}
</script>

<style>
#app {
  position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    min-width: 95%;
    max-width: 95%;
    height: 65%;
    -webkit-box-shadow: 1px 1px 57px rgb(0 0 0 / 40%);
    box-shadow: 1px 1px 57px rgb(0 0 0 / 40%);
    background-color: rgba(0, 0, 0, 0.29);



}
.inventory-wrapper{
    display: inline-block;
    height: 100%;
    width: 35%;
    overflow: visible;
    position: absolute;
    left: 0;
}
.inventory-wrapper:last-child {
    right: 0;
    left: auto;
}
.control{
  display: inline-block;
    width: 30%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}
::-webkit-scrollbar {
    width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255,0,0,0.8); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
</style>
