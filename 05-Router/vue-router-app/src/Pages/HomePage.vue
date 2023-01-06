<template>
    <div class="container">
        <div class="col-md-6 offset-3 p-3 card display-flex justify-content-center">
            <div class="d-flex justify-content-end my-2">
                <button class="btn btn-primary" @click="goToNewPage">Add</button>
            </div>
            <table class="table  ">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Başlık</th>
                    <th scope="col">Url</th>
                    <th scope="col">Sil</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(i,index) in itemList" :key="i.id">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{i.title}}</td>
                    <td>
                        <a :href="i.url" target="_blank">{{i.description}}</a>
                    </td>
                    <td><button @click="deleteItem(i)" class="btn btn-danger ">Sil</button></td>
                </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            itemList:[]
        }
    },
    created(){
        this.$appAxios.get("/bookMarks").then(res => {
            this.itemList = res.data || []
            console.log(res)
        })
    },
    methods:{
        goToNewPage(){
            this.$router.push({name : "NewBookMark"})
        },
        deleteItem(item){
            this.$appAxios.delete(`/bookMarks/${item.id}`).then(response =>{
               if(response.status == 200){
                this.itemList = this.itemList.filter(i =>  i.id != item.id)
               }
            })
        }
        
    }
}
</script>