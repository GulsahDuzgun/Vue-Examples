<template>
  <slot name="greenComp"></slot>
</template>
<script>
export default{
  mounted(){
      console.log("Green Mounted")
  },
  activated(){
    console.log("Yeşil aktive oldu")
  },
  deactivated(){
    console.log("Yeşil deactive oldu")
  }
}
</script>