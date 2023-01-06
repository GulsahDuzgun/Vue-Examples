<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
        <input v-model="userData.fullName" type="text" placeholder="Tam Ad" class="input mb-3" />
        <input v-model="userData.userName" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
        <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
        <button class="default-button" @click="onSave">Kayıt ol</button>
        <span class="text-center mt-3 text-sm">
          Zaten Üyeyim,
          <router-link :to="{name : 'LoginPage'}" class="text-red-900 hover:text-black">Giriş yap!</router-link>
        </span>
      </div>
</template>
<script>
import CryptoJS from "crypto-js"
export default{
  data(){
    return{
      userData:{
        userName :null,
        fullName :null ,
        password :null
      }
    }
  },methods:{
    onSave(){
      const pass = this.userData.password;
      const cryptoPassword = CryptoJS.HmacSHA1(pass,this.$store.getters._saltKey).toString()
      console.log(cryptoPassword)

       this.$appAxios.post("/users",{...this.userData , password : cryptoPassword}).then(response => {
         console.log(response)
         this.$router.push("/")
       })

      // const decryptoPass = CryptoJS.AES.decrypt(cryptoPassword, key).toString(CryptoJS.enc.Utf8)
      // console.log(decryptoPass)
      
    }
  }
}
</script>