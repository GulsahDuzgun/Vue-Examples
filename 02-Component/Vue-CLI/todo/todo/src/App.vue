<template>
  <div class="row mt-5">
    <div class="container">
      <h3 >To-do App</h3>
      <hr class="my-3"/>
      <InputSection @addItem="pushList"/>
      <hr class="my-3"/>
      <ListItem  @updateListAfterDelete="removeList"  />
      <ResultLine mydata="bu benim string datam" :count="data.todoList.length"/>
    </div>
  </div>
</template>
<script>
import itemList from '@/components/ListItem.vue'
import inputSection from '@/components/InputLine.vue'
import resultLine from '@/components/ResultLine.vue'
export default{
  components:{
    InputSection:inputSection,
    ListItem:itemList,
    ResultLine:resultLine},
  data(){
    return{
      data:{
        todoList:[
          {id:1, text:"Todo1"},
          {id:2, text:"Todo2"},
          {id:3, text:"Todo3"},
          {id:3, text:"Todo4"}
        ],
      }
    }
  },
  provide(){
    return{
        todoList:this.data.todoList,
        addItem:this.pushList
    }
  },
 
  methods:{
    pushList(event){
     
      this.data.todoList.push(
        {
          id: new Date(),
          text:event
        });
    },
    removeList(item){
      let index=this.data.todoList.findIndex(i => i == item)
      this.data.todoList.splice(index,1)
    }
  },
  computed:{
    getCountItems(){
      return this.data.todoList.length;
    }
  }
}
</script>