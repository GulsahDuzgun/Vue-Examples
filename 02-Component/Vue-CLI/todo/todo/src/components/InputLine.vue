<template>
    <div>
        <label>
            <input v-model="item" type="text" @keydown.enter="addItem(item)"/>
        </label> 
    </div>
</template>
<script>
export default{
    data(){
        return{
        item:""
        };
    },
    inject:['addItem'],
    methods:{
        addItemList(){
            this.$emit('addItem',this.item)
        }
    }
}
</script>