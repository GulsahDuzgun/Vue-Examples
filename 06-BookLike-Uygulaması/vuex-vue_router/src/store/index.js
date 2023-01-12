import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls";
var ls = new SecureLS({isCompression: false});
//store sayfa her yenilendiğinde tekrar üretilir. Bu yüzden state vb bilgiler uçar

export default createStore({
    state:{
        user:null,
        key :"bookMark12Bookmsrk1232?e3e3!",
        categories : [],
        allData :[],
        updateData:[]
    },
    mutations:{
        setUser(state,user){
            state.user = user
        },
        logoutUser(state){
            state.user = null;
        },
        setCategory(state, categoriesData){
            state.categories=categoriesData;
        },
        setAllData(state,mixData){
            state.allData = mixData
            console.log(mixData)
            console.log("allDATA:",state.allData)
        },
        setLikes(state, likeBookmarks){
            state.user.likes = likeBookmarks
        }
     
    },
    actions:{
        ascySetAllData:(context ,data)=>{
            context.state.allData = 
            console.log(data)
            console.log("allDATA:",context.state.allData)
        },
        getCategoryItems:(context ,id)=>{
        const itemList = context.getters._getAllData
        Object.keys(itemList).forEach(element =>{
            if(itemList[element].categoryId == id)
            {
                context.state.updateData.push(itemList[element])
            }
        })
        return context.state.updateData;
        }

    },
    getters:{
        _isAuthenticated : state => state.user != null,
        _getAllData(state){
            const allData = state.allData 
           Object.keys(allData).forEach(function(element){
                delete allData[element]?.user?.password
            });
            return allData
        },
        _getCurrentUser(state){
            
            const user = state.user
            delete user?.password
            return user;
        },
        _saltKey :state => state.key,
        _getCategories:state => state.categories,
        _geCurrentUserId:state=>state.user.userId,
        _getUserBookmarks :state =>state.user?.bookmarks || [],
        _getUserLikes : state=>state.user?.likes || []
  

    },
    plugins:[
        createPersistedState({
            storage:{
                getItem: key => ls.get(key),
                setItem: (key,value) => ls.set(key,value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ]
});