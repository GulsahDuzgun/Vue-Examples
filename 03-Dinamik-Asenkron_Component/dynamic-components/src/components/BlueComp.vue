<template>
    <div>
         <p class="bg-blue text-dark">Blue Component</p>
         <input type="text" >
    </div>
</template>
<script>
export default{
    mounted(){
        console.log("Blue Mounted")
    },
    activated(){
        console.log("Blue activeted oldu")
    },
    deactivated(){
        console.log("Blue deactivated")
    }
}
</script>