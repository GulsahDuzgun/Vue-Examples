<template>
    <AppHeader></AppHeader>
    <div class="flex flex-row">
        <SideBar></SideBar>
        <BookMarkList/>
    </div>
</template>
<script>
import Sidebar from "@/components/Home/SideBar.vue"
export default{
    data(){},
    components:{
      SideBar:Sidebar  
    }

}
</script>