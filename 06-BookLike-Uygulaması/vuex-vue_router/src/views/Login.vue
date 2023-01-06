<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Login</h3>
        <input type="text" v-model="userData.userName" placeholder="Kullanıcı Adı" class="input mb-3" />
        <input type="password" v-model="userData.password" placeholder="Şifre" class="input mb-3" />
        <button class="default-button" @click="onSubmit">Giriş yap</button>
        <span class="text-center mt-3 text-sm">
          Üye değilim,
          <router-link :to="{name :'RegisterPage'}" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
        </span>
      </div>
</template>
<script>
import CryptoJS from 'crypto-js'
export default{
  data(){
    return{
      userData:{
        userName : null,
        password : null,
      }
    }
  },
  methods:{
    onSubmit(){
      let tempPass = CryptoJS.HmacSHA1(this.userData.password , this.$store.getters._saltKey).toString();
      this.$appAxios
      .get(`/users?userName=${this.userData.userName}&password=${tempPass}`)
      .then(response =>{
        if(response?.data?.length > 0){
          this.$store.commit("setUser",response?.data[0]);
          this.$router.push({name :"Home"})
        


        }else{
          alert("Böyle bir kullanıcı Bulunamadı")
        }
        console.log(response)})
      .catch(e => console.log(e));
    }
  }
}
</script>