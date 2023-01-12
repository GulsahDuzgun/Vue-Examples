<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
          <BookMarkItemList  v-for="i in itemList" :key="i.id" :item="i" ></BookMarkItemList>
        </div>
    </div>
</template>
<script>
    import BookmarkItem from "./BookmarkListItem.vue"
    export default{
        components:{
            BookMarkItemList : BookmarkItem

       },props:{
            itemList : Array
        }
    }
</script>