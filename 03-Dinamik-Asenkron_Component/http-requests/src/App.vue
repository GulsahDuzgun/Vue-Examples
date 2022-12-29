<template>
  <div class="container d-flex col-md-8 offset-2 my-5   flex-column">
    <h1>Alışverişe Ekle</h1>
    <InputSection @onSave="onSave"/>
    <TodoList :itemList="itemDb" @delete="onDelete"/>
    <ResultLine :listLenght="getListLenght"/>
  </div >
</template>
<script>
import axios from 'axios'
import InputSection from '@/components/InputSection.vue'
import ResultLine from '@/components/ResultLine.vue'
import TodoList from '@/components/TodoList.vue'
export default{
  data(){
    return{
      itemDb : [],
    }
  },
  components:{
    InputSection,
    ResultLine,
    TodoList
  },
  methods:{
    onSave(e){
      axios.post("http://localhost:3000/items",
      {
        text:e.target.value,
        createDate : new Date(),
        completed:false
      }).then(saveObjects => {
        console.log(saveObjects);
        this.itemDb.push(saveObjects.data)
        e.target.value = "";
        e.target.focus()
        
      });
    },
    onDelete(i){
     axios.delete(`http://localhost:3000/items/${i.id}`).then(deleteResponse => {
      console.log(deleteResponse)
      this.itemDb = this.itemDb.filter(item => i != item)
     }); 
    }
    
  },
  mounted(){
      axios.get("http://localhost:3000/items").then(ListItem =>{
        console.log("List Items", ListItem)
        this.itemDb = ListItem.data || [];
      });
    },
    computed:{
      getListLenght(){
       return  this.itemDb.length;
      }
    }
}
</script>