<template>
    <div class="container">
        <div class="d-flex flex-column col-6 offset-3 mt-4 p-3 card">
            <div class="mb-3">
                <label for="title" class="form-label">Başlık</label>
                <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Vue Router Dokümantasyon">
              </div>
              <div class="mb-3">
                <label for="path" class="form-label">Url</label>
                <input type="url" v-model="userData.url" class="form-control" id="path" placeholder="https://router.vuejs.org/">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Açıklama</label>
                <textarea  v-model="userData.description" class="form-control" id="description" rows="3"></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-danger me-2" @click="goToHomePages">Cancel</button>
                <button class="btn btn-success" @click="addItem">Add</button>

              </div>
        </div>
    </div>
</template>
<script>
export default{
  data(){
    return{
      userData:{
        title:null,
        url:null,
        description:null
      }
    };
  },
    methods:{
        goToHomePages(){
            //$router.go(-1) ile bir önceki sayfaya gider
            this.$router.push("/")
        },
        addItem(){
          this.$appAxios.post("/bookMarks", this.userData).then(response =>{
            console.log(response)
            this.reset()
            this.$router.push("/")
          })
        },
        reset(){
          Object.keys(this.userData).forEach(key =>{
            this.userData[key] = null
          })
        }
    }
}
</script>