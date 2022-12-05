const app= Vue.createApp({
    data(){
        return{
            title:"String Interpolation",
            description:"Vue is amazing",
            obj:{
                url:"https://vuejs.org/guide/quick-start.html#creating-a-vue-application",
                target:"_blank",
                title :"Document"
            },
            
        }
    },
    methods:{

    }
}).mount("#app")