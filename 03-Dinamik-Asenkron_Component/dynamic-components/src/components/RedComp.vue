<template>
    <p class="bg-red text-white ">{{ msg }}</p>
</template>
<script>
export default{
  props:["msg"],
  mounted(){
      console.log("Red Mounted")
  },
  unmounted(){
    console.log("Red koptu")
  },
  activated(){
    console.log("Kırmızı active oldu")
  },
  deactivated(){
    console.log("Kırmızı deactive oldu")
  }

}
</script>