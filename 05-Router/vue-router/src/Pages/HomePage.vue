<template>
    <div>
        <p>Anasayfa</p>
        <input type="text" @keydown.enter="goToDetails">
    </div>
</template>
<script>
export default{
    methods:{
        goToDetails(e){
            this.$router.push({
                name:"Detail",
                params:{
                    itemId:e.target.value
                },
                query:{
                    never:"giveUp",
                    eminem:"mockingbird",
                    er :9
                }
            })
        }
    }
}
</script>
