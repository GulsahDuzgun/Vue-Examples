<template>
    <input type="text" v-model="temp">
    <button class="btn btn-primary" @click="$emit('addItem',temp)">Ekle</button>  
</template>
<script>
export default{
    data(){
        return{
        }
    },
    inject:['temp']
}
</script>