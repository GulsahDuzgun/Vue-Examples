const app= Vue.createApp({
    data(){
        return{
            counter:0,
            isShow:false,
        };
    },
    computed:{
        getStyleClass(){
            //console.log("geldi")tıklandıkça counter değeri değiştiğ için sürekli yazar
            return {'green ' : this.counter > 0 , 'red text-white' : this.counter < 0 , 'blue' : this.counter == 0}
        }
    }
}).mount("#app");