<template>
  <div>
    <ul>
        <ShowItem @deleteItem="$emit('updateListAfterDelete',$event)" />
    </ul> 
  </div>
</template>
<script>
import showItem from '@/components/ShowListItem.vue'
export default{
  data(){},
  props:{
    todoListe:{
      type:Array,
      required : false,
      default :()=>[]
    }
  },
  components:{
      ShowItem:showItem 
  },
  
}
</script>