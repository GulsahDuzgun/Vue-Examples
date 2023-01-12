<template>
    <AppHeader></AppHeader>
    <div class="flex flex-row">
        <SideBar @updateToCategory="itemInCategory"></SideBar>
        <BookMarkList v-if="showItemList.length > 0" :itemList="showItemList" />
        <div v-else class="text-start"><b>Henüz Bookmark oluşturulmamıştır</b> </div>
    </div>
</template>
<script>
import Sidebar from "@/components/Home/SideBar.vue"
export default{
    data(){
        return{
        showItemList:[]
    }},
    components:{
      SideBar:Sidebar  
    },
    created(){
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(_showResponse => {
        //     //console.log("created",_showResponse?.data)
            this.showItemList = _showResponse?.data || []
        //     console.log("uzunluk", this.showItemList.length)
           // this.$store.dispatch("ascySetAllData", _showResponse?.data) 
         })
      
    },methods:{
        itemInCategory(categoriId){
            const url = categoriId ? `/bookmarks?_expand=user&_expand=category&categoryId=${categoriId}`:'/bookmarks?_expand=user&_expand=category'
            this.$appAxios.get(url).then(updateBookmarks =>{
                this.showItemList = updateBookmarks?.data || []
                console.log("uzunluk", this.showItemList.length)
                
            })
        },
        // showItemInCategory(categoryID){
        //     if(categoryID){
        //         this.showItemList = this.$store.dispatch("getCategoryItems",categoryID)
        //         console.log(this.showItemList)
        //     }else{
        //         this.showItemList = this.$store.getters._getAllData
        //         console.log(this.showItemList.Target)
        //     }
            
        // }
    }

}
</script>