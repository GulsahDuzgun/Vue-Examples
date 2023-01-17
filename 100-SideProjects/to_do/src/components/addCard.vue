<template><!-- Button trigger modal -->
    <div class=" text-center col-md-12">
            <div class="input-group mt-5 mx-auto" >
            <label class="me-3 my-auto" for="title">Title</label>
            <input v-model="title"  type="text" class="form-control" aria-label="Sizing example input" id="title"  required>
            </div>
            <div class="input-group my-3  mx-auto align-item-center" >
            <label class="me-3 my-auto" for="note">Note</label>
            <input  v-model="note" type="text"  class="form-control" aria-label="Sizing example input" id="note" required>
            </div>
            
            <div class="m-0 p-0  mx-auto" >
            <label class="me-2 my-auto" for="status">Color</label>
            <label class="btn  me-2 ms-0" style="background-color:#88F47B ;" for="colorGreen">
                <input name="renk" v-model="color"  value="#88F47B" type="radio" class="form-check-input me-1" id="colorGreen"
                autocomplete="off">Green</label>  
            <label class="btn  me-2"  style="background-color:#45CAD3"  for="colorInfo">
                <input name="renk" v-model="color" value="#45CAD3" type="radio" class="form-check-input me-1" id="colorInfo"
                autocomplete="off">Blue</label>  
            <label class="btn  me-2" style="background-color:#EFD156"  for="colorOrange">
                <input name="renk" v-model="color" value="#EFD156" type="radio" class="form-check-input me-1" id="colorOrange"
                autocomplete="off">Yellow</label>  
            <label class="btn btn me-2" style="background-color:#762A8E; color:white" for="colorPurple">
            <input name="renk" v-model="color"   value="#762A8E" type="radio" class="form-check-input me-1" id="colorPurple"
            autocomplete="off">Purple</label>  
            <label class="btn btn  me-2 my-2" style="background-color:#050306;  color:white"  for="colorBlack">
                <input name="renk" v-model="color"   value="#050306" type="radio" class="form-check-input me-1 " id="colorBlack"
                autocomplete="off">Black</label>
            </div>
             <div class="modal-footer col-md-10 d-flex justify-content-end mx-auto">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click='addItem '>Add</button>
            </div>
    </div> 
</template>
<script>
export default{
    name:  "addCard",
    props: {
        itemData:{
            type : Object 
        },
        temp:{
            type:Boolean,
            required:false,
            default: false

        }
    },
    data() {
        return {
        title: "",
        note: "",
        status: "to do",
        color: "",
        list: [],
        isUpdate: false
        }
    },  
    // mounted(){
    //    if(this.temp){
    //     this.itemDataIsChange
    //    }
    //    console.log(this.itemData)
    //    console.log(this.temp)
    // },
    watch:{
        temp:{
            deep:true,
            handler: function(newVal){
                if(this.temp){
                    this.isUpdate=newVal
                }
                else{
                    this.isUpdate=false
                }
                }
            },
        itemData:{
            deep:true,
            handler:function(newVal){
             if(this.isUpdate){
                console.log("newVal",newVal)
                this.title = newVal.baslik
                this.note = newVal.not
                this.color = newVal.backgroundColor
                this.status = newVal.durum
                }
             else{
                this.title = ""
                this.note = ""
                this.color = ""
             }
        }
        }
    },
    mounted(){
        this.list= JSON.parse(localStorage.getItem('listItems'))
    },
    // computed: {
    //     tempIsChange(){
    //         if(this.isUpdate){
    //             this.title = this.itemData.baslik;
    //             this.note = this.itemData.not;
    //             this.color = this.itemData.backgroundColor;
    //             this.status = this.itemData.durum
    //         }
    //         else{
    //             return this.itemData=null
    //         }
    //         return 0;
    //     },
    //  },
    methods: {
        addItem(){
        if(this.title.length<=0 && this.note.length<=0){
            alert('Lütfen title ve Note alanlarının doldurulmuş olduğunuzdan emin olun' )
            return 0;
        } 
        this.tempIsChange

        if(!this.isUpdate){

            this.$emit('addItem', {
                baslik: this.title,
                not: this.note,
                durum: "to do",
                backgroundColor: this.color,        
                UpdateDate: "",
                AddDate: new Date().toLocaleString() 
            })        
            console.log("Ekleme fonks:",this.itemData)
            console.log("isUpdate:",this.isUpdate)

            }
        else{
            console.log("Update:",this.itemData)
            console.log("isUpdate:",this.isUpdate)
            this.$emit('updateItem', {
                baslik: this.title,
                not: this.note,
                durum: this.itemData.durum,
                backgroundColor: this.color,      
                AddDate: this.itemData.AddDate,  
                UpdateDate: new Date().toLocaleString(),
            })
            
        }
    }
        // itemData:{
        //     handler:function(val){
        //          //eslint-disable-next-line 
        //  debugger
        //     if(val) {
        //         console.log("watc" , val)
        //         this.title = val.baslik;
        //         this.note = val.not;
        //          this.color = val.backgroundColor;
        //         this.status = val.durum
        //         this.isUpdate =true
        //     }
            
        //     },
        //     
      
    }
}

</script>