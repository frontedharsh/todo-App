const item = document.querySelector("#item")
const todobox =document.querySelector("#to-do-box")

item.addEventListener("keyup",function(event){
    if (event.key == "Enter") {
        addToDo(this.value)
        this.value = ""
        
    }
}
)
const addToDo =(item)=>{
    const listitem = document.createElement("li")
    listitem.innerHTML =`
    ${item}
    <i class="ri-close-line"></i>;1
    `
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("comp");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    todobox.appendChild(listitem)
}