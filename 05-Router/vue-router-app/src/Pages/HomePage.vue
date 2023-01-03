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
                <tr v-for="i in 6" :key="i">
                    <th scope="row">{{i}}</th>
                    <td>Vue-router Dokümantasyon</td>
                    <td>https://router.vuejs.org/</td>
                    <td><button class="btn btn-danger ">Sil</button></td>
                </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default{
    methods:{
        goToNewPage(){
            this.$router.push({name : "NewBookMark"})
        }
    }
}
</script>