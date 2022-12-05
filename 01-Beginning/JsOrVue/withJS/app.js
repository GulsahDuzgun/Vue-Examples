const button = document.querySelector("#btnClick")
const val =document.querySelector("#itemInput")
const list =document.querySelector("#list")

button.addEventListener('click',()=>{
    const listItem = document.createElement("li")
    listItem.textContent = val.value
    list.appendChild(listItem)
    
})