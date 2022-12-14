const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter1:0,
            temp:"",
        };
    },
    methods:{
        getCounter(){
            console.log("counter1 çalıştı")
           return this.counter <= 5 ? 'Counter beşten küçük veya eşit' :'counter beşten büyük'
        },
        getCounter2(){
            console.log("counter2 çalıştı")
            this.temp=this.counter1 > 5 ?"counter1 > 5" :"counter1<=5"
            return this.counter1 >= 5 ? 'Counter1 beşten büyük eşit' : 'Counter1 beşten küçük ' 
        }
    },
    computed:{
        updateCounter(){
           this.counter > 5 ? console.log("Computed: counter > 5") : console.log("Computed: counter<=5")
           return this.counter;
        }
    },
    watch:{
        temp(newValue,oldValue){
            //this.counter1 > 5 ? console.log("Computed: counter2 > 5") : console.log("Computed: counter2<=5")
            console.log("watch:",newValue ,"--" ,oldValue)
        }
    }
}).mount("#app");