<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
        <input ref="title"  type="text" v-model="userData.title" placeholder="Başlık" class="input mb-3" />
        <input type="text" v-model="userData.url" placeholder="URL" class="input mb-3" />
        <select class="input mb-3" v-model="userData.categoryId">
          <option disabled value="" selected>Kategori</option>
          <option v-for="item in categoryList" :value="item.id" :key="item.id" >{{item.name}}</option>
        </select>
        <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
        <div class="flex items-center justify-end gap-x-1">
          <button @click="$router.push({name:'Home'})" class="secondary-button">İptal</button>
          <button @click="onSave" class="default-button">Kaydet</button>
        </div>
      </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default{
  data(){
    return{
      categoryList:[],
      userData:{
        title : null,
        url : null,
        categoryId :null,
        description :null
      }
    }
  },
  mounted(){
     this.$appAxios.get("/categories").then( response_categories =>{
        // console.log(response_categories)
        this.categoryList = response_categories?.data || [];
      })

     // this.$nextTick(()=>{
     // console.log(this.$refs.title)
     //})
     
    },
    computed:{
      ...mapGetters({
        getUserData :"_getCurrentUser"
      })
    },
    methods:{
      onSave(){
        const saveData = {
          ...this.userData,
          userId : this.getUserData?.id,
          created_at : new Date()
        }
        this.$appAxios.post("/bookmarks",saveData).then(bookmarksResponse => {
          console.log(bookmarksResponse)
          Object.keys(this.userData)?.forEach(field => (this.userData[field] = null ));
          this.$router.push({ name : "Home"})
        })
      }
    }
}
</script>