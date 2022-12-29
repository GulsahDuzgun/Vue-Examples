<template>
  <div class="container p-3 col-md-12">
    <div class=" d-flex flex-column col-md-8 justifycontent-center text-center " >
      <!-- <RedComp v-if="val === 'Red'"/>
      <BlueComp v-if="val ==='Blue'"/>
      <GreenComp v-if="val === 'Green'"/> -->
      {{val}}
      <keep-alive>
        <component :is="val" msg="Red Component Texti">
          <template v-slot:greenComp>
            <p class="bg-green text-white">Green Component</p>
          </template>
        </component>
      </keep-alive>
    </div>
    <button @click="val = 'RedComp'" class="mx-2 bg-danger btn">Red</button>
    <button @click="val='BlueComp'" class="bg-primary btn me-2">Blue</button>
    <button @click="val='GreenComp'" class="bg-success btn">Green</button>
  </div>
</template>

<script>
import RedComp from '@/components/RedComp.vue'
import BlueComp from '@/components/BlueComp.vue'
import GreenComp from '@/components/GreenComp.vue'
export default{
   components:{
    RedComp,
    BlueComp,
    GreenComp
   },
   data(){
    return{
      val:""
    }
   }
}
</script>