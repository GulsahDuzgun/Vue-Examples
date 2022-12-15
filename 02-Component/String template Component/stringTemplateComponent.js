const app = Vue.createApp({
    data(){
        return{
            counter:0
        };
    },
    computed:{
        updateCounter(){
            return this.counter > 5 ? 'Counter >5' : 'Counter <= 5'
        }
    }
});

app.component('counter-component',{
    data(){
        return{
            counter1:0       
        }
    },
    computed:{
        getCounter2(){
            return this.counter1 >=5 ? 'Counter >= beşten ' : 'Counter <5'
        }
    },
    template:
        `<div class="col-md-4  offset-1">
        <div class="card p-2 text-center">
            <h2>Sayac:{{counter1}}</h2>
            <div class="d-flex justify-content-center align-items-center">
                <button class="bg-primary me-2" @click="counter1++">+</button>
                <button class="bg-danger " @click="counter1--">-</button>
            </div>
            <div class="alert alert-warning">{{getCounter2}}</div>
        </div>
    </div>`
    
})

app.mount("#app");  