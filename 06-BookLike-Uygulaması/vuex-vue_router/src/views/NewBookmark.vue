<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
        <input type="text" placeholder="Başlık" class="input mb-3" />
        <input type="text" placeholder="URL" class="input mb-3" />
        <select class="input mb-3">
          <option disabled value="" selected>Kategori</option>
          <option v-for="item in categoryList" :value="item.id" :key="item.id" >{{item.name}}</option>
        </select>
        <textarea placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
        <div class="flex items-center justify-end gap-x-1">
          <button class="secondary-button">İptal</button>
          <button class="default-button">Kaydet</button>
        </div>
      </div>
</template>
<script>
export default{
  data(){
    return{
      categoryList:[]
    }
  },
  mounted(){
     this.$appAxios.get("/categories").then( response_categories =>{
        console.log(response_categories)
        this.categoryList = response_categories?.data || [];
      })
    }
}
</script>