<template>
  <div class="container my-2 ">
    <div class="offset-3 col-md-6 justify-content-center align-items-center text-center my-4 d-flex flex-column">
      <label for="alfabe">
        <input v-model="this.parameter.charakter" type="checkbox" id="alfabe" class="checkbox me-2 my-2">String Karakter
      </label>
      <label for="noktalamaIsareti">
        <input v-model="this.parameter.noktalama" type="checkbox" id="noktalamaIsareti" class="checkbox me-2 my-2 ">Noktalama
        İşaretleri
      </label>
      <label for="Numara">
        <input v-model="this.parameter.numeretic" type="checkbox" id="Numara" class="checkbox me-2 my-2 ">Sayısal Karakter
      </label>
      <label for="uzunluk">Şifre Uzunluğu
        <input v-model="this.leng" type="number" min="1" max="11" id="uzunluk" class="checkbox me-2 my-2 ">
      </label>
      <button @click="printPass"
        class="btn btn-success btn-md col-md-3  text-ceter justify-content-center align-items-center my-2"> Şifre
        Yarat</button>
      <p class="my-3">Şifreniz: <span id="printPass" class="p-2 m-3"
          style="background-color:darkgray ;color:white">{{ password }}</span></p>
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      parameter: {
        charakter: false,
        numeretic: false,
        noktalama: false,
      },
      leng: 0,
      password: "",
      charakter: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      numeretic: '0123456789',
      noktalama: '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\',
      randomLib: ""
    };
  },
  methods: {
    printPass() {

      if (this.leng == 0) {
        alert("Lütfen geçerli bir uzunluk giriniz");
        return;
      }

      this.password = ""
      this.randomLib = ""
      Object.keys(this.parameter).forEach(item => {
        if(this.parameter[item]) {
          this.randomLib += this[item]
        }
      })
      for (let i = 0; i < this.leng; i++) {
        this.password += this.randomLib.charAt(this.makeRandom(this.randomLib.length))
      }
      if(!this.control()) {
        this.printPass();
      } 
    },
    makeRandom(max) {
      return Math.floor(Math.random() * max);
    },
    control() {
      return this.isSet(this.parameter.charakter, this.charakter) && this.isSet(this.parameter.numeretic, this.numeretic) && this.isSet(this.parameter.noktalama, this.noktalama)
    },
    isSet(charakter, charSet){
      if (charakter) {
        return [...this.password].some(element =>  [...charSet].some(item=> item==element));
      }
      return true;
    }
  }
}


</script>
