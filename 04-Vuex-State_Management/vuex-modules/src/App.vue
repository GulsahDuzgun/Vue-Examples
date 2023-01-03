<template>
  <p>{{$store.state.name}}</p>
  <p>{{$store.state.iletisim.contactAdress}}</p>
  <p>{{indexItem}}</p>
  <p>{{nick}}</p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted(){
    console.log(this.$store)
    console.log(this.indexItem)
    console.log(this.iletisimItem)
    console.log(this.$store.getters['taskManager/item'])
    console.log(this.taskManager)

    this.$store.dispatch("taskManager/setProperty",{name:"Esra",lastname:"Düzgün"})

  },
  computed:{
    ...mapGetters({
      indexItem : ["item"],
      iletisimItem : ["iletisim/item"],
      taskManager : ["taskManager/item"],
    })
  }
}
</script>
