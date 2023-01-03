<template>
  <div class="container">
    <p>{{$store.state.theme}}</p>
    <p>{{setActiveUser}}</p>
    <pre>{{woodItem}}</pre>
    <ul>
      <!-- <li v-for="item , index in $store.state.permissions" :key="index">
        {{ item }}
      </li><br><hr>
      <li v-for="i in $store.state.employeeList" :key="i">{{i}}</li>-->
      <li v-for="item in showWoodList" :key="item.id">{{ item.name }}</li>
    </ul> 
    <button class="btn" @click="addList">Ekle</button>
   
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  mounted(){
   // console.log(this.$store.state.permissions)
    // //console.log(this.$store.state.person)
    // console.log(this.$store.getters.setActiveUser)
    console.log("yüklendi")
  },
   methods:{
    addList(){
     console.log(this.$store)
     //this.$store.state.furniture.push({id:new Date().getTime(), name:"raf", content:"wood"})
     this.$store.commit("addItem", {id:new Date().getTime(), name:"raf", content:"wood"})
    //this.$store.dispatch("addItemAsync",{id:new Date().getTime(), name:"raf", content:"wood"})
    },
    showWoodList(){
      return this.$store.getters.woodItem()
    }
  },computed :{
    ...mapGetters(["woodItem","setActiveUser"]),
  
  } 
}
</script>