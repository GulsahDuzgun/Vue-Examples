<template>
    <div class="container">
        <div class="header">
           <slot name="title"/> 
        </div>
        <hr class="my-2">
        <!-- <div class="content" v-html="content">
        </div> -->
        <div class="content">
            <slot name="icerik"/>
        </div>
        <hr class="my-2">
        <div class="footer d-flex justify-content-end">
            <slot></slot>
            <button class="me-3">Aç</button>
            <button class="green" @click="openAlert">Kapat</button>
        </div>
    </div>
</template>
<script>
export default{
    props:['modalTitle','content','openAlert'],
    data(){
        return{}
    },
}
</script>