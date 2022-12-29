<template>
    <div class=" col-md-8 mt-3 ">
        <ul v-if="itemList.length > 0">
          <li class="d-flex  my-1 justify-content-between" v-for="i in itemList" :key="i.id">
            <span>{{i.text || i.title}}</span>
            <button class="btn btn-danger" @click="$emit('delete',i)">Sil</button>
          </li>
        </ul>
        <p v-else>
          Henüz elman eklenmemiştir
        </p>
    </div>
</template>
<script>
export default{
    props:["itemList"]
}
</script>