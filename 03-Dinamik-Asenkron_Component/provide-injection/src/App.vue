<template>
  <div class="container">
    <InputSection @addItem="addItem"/>
    <ShowItem/>
  </div>
</template>

<script>
import showItem from '@/components/ShowList.vue'
import inputSection from '@/components/InputSection.vue'
export default{
  components:{
    ShowItem:showItem,
    InputSection:inputSection
  },
  data(){
    return{
      itemList:["Ahmet","Gülşah","Deniz","Esra","Aden","Tuğçe"],
      tempValue:""
    }
  },
  provide(){
    return{
      NameList:this.itemList,
      temp:this.tempValue
    }
  },
  methods:{
    addItem(val){
      this.itemList.push(val)
    }
  }
}
</script>