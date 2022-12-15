<template>
  <div class="row mt-5">
    <div class="container">
      <h3 >To-do App</h3>
      <hr class="my-3"/>
      <InputSection/>
      <hr class="my-3"/>
      <ListItem/>
      <ResultLine/>
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
    ResultLine:resultLine
  },
  data(){
    return{
      todoList:[
        {id:1, text:"Todo1"},
        {id:2, text:"Todo2"},
        {id:3, text:"Todo3"},
        {id:3, text:"Todo4"}
      ]
    }
  },
  methods:{
    pushList(event){
     
      this.todoList.push(
        {
          id: new Date(),
          text:event.target.value
        });
    },
    removeList(item){
      let index=this.todoList.findIndex(i => i == item)
      this.todoList.splice(index,1)
    }
  },
  computed:{
    getCountItems(){
      return this.todoList.length;
    }
  }
}
</script>