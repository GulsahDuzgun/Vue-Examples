<template>
  <div class="container blackBorder ">
    <div class="col-md-10 offset-1 ">
      <div class="d-flex col-md-12  justify-content-end ">
        <button type="button" class="my-3 btn btn-primary me-2 p-2 " data-bs-toggle="modal"
          data-bs-target="#exampleModal"> Add Item </button>
      </div>
      <div class="col-md-12 d-flex justify-content-around">

        <div id="todo" class="col-md-4 blackBorder   text-danger p-2 text-center  " @drop="onDrop($event, 'to do')"
          @dragover.prevent @dragenter.prevent>
          <h5>To do</h5>
          <hr class="text-dark fw-bold mb-0" />
          <div class="card m-1 p-0" :style="{ 'color': 'white', 'background-color': item.backgroundColor }"
            v-for='item in list.filter(item => item.durum == "to do")' :key="item.AddDate" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="text-end m-0 pe-1 p-0">
              <button type="button" class=" mt-2 btn-close btn-close-white" @click="removeItem(item.AddDate)"
                aria-label="Close"></button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
                @click="updateComponentItem(item)"
                :style="{ 'background-color': item.backgroundColor, 'color': 'white', 'border': ' 1px solid white' }"
                class=" mt-2 ms-1 m-0"><i class="bi bi-pencil mb-5"></i></button>
            </div>
            <div class="card-title  text-center m-0 ">{{ item.baslik }}
            </div>
            <div class="card-body text-start my-0 ">
              <p>Summary: {{ item.not.length < 10 ? item.not : item.not.substring(0, 15) + '...' }}</p>
                  <p>Date: {{ item.AddDate }}</p>
            </div>
          </div>
        </div>
        <div id="inProgress" class="col-md-4 text-center  blackBorder text-primary p-2"
          @drop="onDrop($event, 'in progress')" @dragover.prevent @dragenter.prevent>
          <h5>In progress</h5>
          <hr class="text-dark fw-bold mb-0" />
          <div class="card  m-1 p-0" :style="{ 'background-color': item.backgroundColor, 'color': 'white' }"
            v-for='item in list.filter(item => item.durum == "in progress")' :key="item.AddDate" draggable
            @dragstart="startDrag($event, item)">
            <div class="text-end m-0 pe-1 p-0">
              <button type="button" class=" mt-2 btn-close btn-close-white " @click="removeItem(item.AddDate)"
                aria-label="Close"></button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
                @click="updateComponentItem(item)"
                :style="{ 'background-color': item.backgroundColor, 'color': 'white', 'border': ' 1px solid white' }"
                class=" mt-2 ms-1 m-0"><i class="bi bi-pencil mb-5"></i></button>
            </div>
            <div class="card-title text-center p-0 m-0">{{ item.baslik }}</div>
            <div class="card-body text-start my-0 ">
              <p>Summary: {{ item.not.length <= 15 ? item.not : item.not.substring(0, 15) + '...' }}</p>
                  <p>Date: {{ item.AddDate }}</p>
            </div>
          </div>
        </div>
        <div id="done" class="col-md-4  text-center  blackBorder text-success p-2 " @drop="onDrop($event, 'done')"
          @dragover.prevent @dragenter.prevent>
          <h5>Done</h5>
          <hr class="text-dark fw-bold mb-0" />
          <div class="card m-1 p-0" :style="{ 'background-color': item.backgroundColor, 'color': 'white' }"
            v-for='item in list.filter(item => item.durum == "done")' :key="item.AddDate" draggable
            @dragstart="startDrag($event, item)">
            <div class="text-end m-0 pe-1 p-0">
              <button type="button" class=" mt-2 btn-close btn-close-white " @click="removeItem(item.AddDate)"
                aria-label="Close"></button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
                @click="updateComponentItem(item)"
                :style="{ 'background-color': item.backgroundColor, 'color': 'white', 'border': ' 1px solid white' }"
                class=" mt-2 ms-1 m-0"><i class="bi bi-pencil mb-5"></i></button>
            </div>
            <div class="card-title  m-0  p-0 text-center">{{ item.baslik }}</div>
            <div class="card-body text-start my-0  ">
              <p>Summary: {{ item.not.length <= 15 ? item.not : item.not.substring(0, 15) + '...' }}</p>
                  <p>Date: {{ item.AddDate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade col-md-12" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Yapılacaklar Listesi</h5>
            <button type="butston" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <AddCard @addItem="addItem" :temp="isUpdate" :itemData="updateData" @updateItem="updateItem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addCard from './components/addCard.vue'
export default {
  data() {
    return {
      list: [],
      change: false,
      showModal: false,
      tempObject: null,
      updateData: null,
      isUpdate:false
    }
  },
  mounted(){
    localStorage.setItem('listItems', JSON.stringify(this.list)) 
   
  },
  components: {
    AddCard: addCard,
  },
  methods: {
    updateComponentItem(params) {  
       this.updateData = params
       this.isUpdate = true },
    removeItem(itemId) {
      this.list = this.list.filter(i => i.AddDate != itemId)
      localStorage.setItem('listItems', JSON.stringify(this.list))
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.AddDate)
    },
    addItem(param) {
      console.log(param)
      this.list.push(param)
      localStorage.setItem('listItems', JSON.stringify(this.list))//localStorage'e string veri girişi olmalı      
    },
    updateItem(param){
     // console.log(  "geldi")
      let item = this.list.filter((item) => item.AddDate != param.AddDate)
      this.list=item
      this.list.push(param)
      localStorage.setItem('image.png', JSON.stringify(this.list))
      this.updateData = null
      this.isUpdate=false
      console.log(this.updateData)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const itemList = this.list.filter((item) => item.AddDate == itemID)
      itemList[0].durum = list
      //localStorage.setItem( this.list.filter((item) => item.AddDate == itemID)[0].durum , list)
      //console.log(this.list)
      localStorage.setItem('listItems', JSON.stringify(this.list))
      console.log(this.list)
    

    },
  }
}
</script>

<style>
.blackBorder {
  border: 2px solid black;
  font-weight: bold;
  padding-bottom: 150px
}
</style>

