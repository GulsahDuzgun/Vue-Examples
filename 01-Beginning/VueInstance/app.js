const app = Vue.createApp({
    data(){
        return{
            title:"Başlık Bilgisi",
            coords:{
                x:0,
                y:0
            }
        };
    },
    methods:{
        changeTitle(params){
            this.title = params
        },
        updateCoordinats(tempTitle, evenParam){
            this.changeTitle(tempTitle)
            this.coords.x = evenParam.x
            this.coords.y = evenParam.y
            this.changeTitle(`${evenParam.x}, ${evenParam.y}`)
        }
    }
}).mount("#app");