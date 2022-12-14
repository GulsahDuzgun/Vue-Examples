const app=Vue.createApp({
    data(){
        return{
            title:"Başlık",
            itemList:[],
        };
    },
    beforeCreate(){
        console.log("beforeCreate çalıştı")
    },
    created(){
        console.log("created çalıştı")
        
    },
    beforeMount(){
        console.log("beforeMount çalıştı")
        setTimeout(()=>{
            this.itemList=[12,3,42,5,6,2,25]
        },2000);
    },
    mounted(){
        console.log("mounted  çalıştı")
        setTimeout(()=>{
            this.title="Mounted"
        },4000)
    },
    beforeUpdate(){
        console.log("beforeUpdated  çalıştı")
    },
    updated(){
        console.log("updated  çalıştı")
    },
    beforeUnmount(){
        console.log("beforeUnmount çalıştı")
    },
    unmounted(){
        console.log("Unmounted  çalıştı")
    }   
});
app.mount("#app");

setTimeout(() => {
    app.unmount();
},6000);