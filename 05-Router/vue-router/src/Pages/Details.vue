<template>
    <h1>{{$route.params.itemId}}</h1>
    <h2>{{$route.query.mockingbird}}</h2>
    <p>Detay Sayfası</p>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni nobis sequi iste in a, animi sapiente maxime unde id deleniti nesciunt? Suscipit quidem obcaecati asperiores aperiam quos veniam expedita, doloribus tempora. Unde error optio, ex perferendis exercitationem obcaecati, quibusdam sed rem minus provident ducimus.</div>
    <button @click="goToHome">Geri Dön</button>
</template>

<script>
export default{
    created(){
        console.log("route:",this.$route)
        console.log("router",this.$router)
    },
    methods:{
        goToHome(){
            this.$router.push("/")
        }
    }
}
</script>