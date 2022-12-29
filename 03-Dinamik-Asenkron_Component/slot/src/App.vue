<template>
  <!-- <ShowModal modalTitle="Baslik" :openAlert="showAlert" :content="contentHtml"></ShowModal> -->
  <ShowModal>
    <template v-slot:title>
      <h1>Slot Kavramı</h1>
    </template>
    <template #icerik>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquam consectetur nam, ullam at aliquid voluptatibus. Minima dolor quidem ea incidunt, blanditiis quam quae corporis autem nobis. Pariatur veritatis facilis atque eos ducimus aliquam!</p>
    </template>
    <template #default>
      <span>İsimsiz slot çağrısı</span>
    </template>
  </ShowModal>
</template>

<script>
import showModal from '@/components/Show_Modal.vue'
export default{
  components:{
    ShowModal:showModal
  },
  data(){
    return{
    contentHtml:`
    <p class="text-red text-center">İçerik ağacı</p>`
    }
  },
  methods:{
    showAlert(){
      alert("Show Alert");
    }
  }
}
</script>