<template>
    <div class="d-flex justify-content-between">
        <small class="text-green">{{count}} adet item vardır</small>
        <small>{{mydata}}</small>
    </div>
</template>
<script>
export default{
    props:{
        mydata:{
            type:String,
            required:false,
            default:""
        },
        count:{
            type : Number,
            required: false,
            default:0
        }
    },


}
</script>