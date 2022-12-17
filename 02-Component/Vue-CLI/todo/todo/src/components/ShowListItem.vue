<template>
    <div>
        <li class="d-flex justify-content-between align-items-center" v-for="item in todoList" :key="item.id" >
            {{item.text}}<button class="btn btn-danger" @click="$emit('deleteItem', item)" >Sil</button>      
        </li>
    </div>
</template>
<script>
export default{
   // props:['todoList']
   inject:['todoList']
}
</script>