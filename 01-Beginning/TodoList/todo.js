const app = Vue.createApp({
    data(){
        return{
            todoList:[
                {id:1, text:"Todo 1",completed:false},
                {id:2, text:"Todo 2",completed:false},
                {id:3, text:"Todo 3",completed:false},
                {id:4, text:"Todo 4",completed:false},
                {id:5, text:"Todo 5",completed:false},
                {id:6, text:"Todo 6",completed:false},
                {id:7, text:"Todo 7",completed:false}
            ],
            addItem:"",
            logger:this.log()
        };
    },
    methods:{
        pushList(event){
            this.todoList.push({
                id:new Date(),
                text:event.target.value,
                completed:false
            })
            event.target.value=""
        },
        log(){
            return console.log(" log tetiklendi");
        },
        removeItem(item){
            this.todoList=this.todoList.filter(i => i.id != item.id);
       },
       pushListClick(){
        this.todoList.push({
            id:new Date(),
            text:this.addItem,
            completed:false
        });
       }
    },
    computed:{
        getCheck(){
            return this.todoList.filter((i) => i.completed == true).length
        },
        getUncheck(){
            return this.todoList.filter((i) => !i.completed).length
        }
    }
}).mount("#app");
