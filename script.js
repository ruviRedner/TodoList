const submit = document.getElementById("submit")
const input = document.getElementById("text")
const container = document.createElement("div")

submit.addEventListener("click", () => {

       const t = input.value
       const newDiv = document.createElement("div")
       const newLabal = document.createElement("labal")
       const chekbox = document.createElement("input")
       chekbox.type = "checkbox"
       newLabal.textContent = t
       newDiv.appendChild(newLabal)
       newDiv.appendChild(chekbox)
       container.appendChild(newDiv)
       document.body.appendChild(container)
       input.value = ""
       saveToLocalstorege()
       
       

       chekbox.addEventListener("change", (e) => {
              if (e.target.checked) {
                     saveToLocalstorege()
                     if(!newDiv.querySelector("button")){
                        const Delete = document.createElement("button")
                        Delete.textContent = "מחק"
                        newDiv.appendChild(Delete)
                        Delete.addEventListener("click",()=>{
                            newDiv.remove()
                            saveToLocalstorege()
                     })
                     }
              }
              else{
                     const delBtn = newDiv.querySelector("button")
                     delBtn.remove()
                     saveToLocalstorege()
              }
       })
})
function saveToLocalstorege() {
       const todoList = []
       const divContainer = container.querySelectorAll("div")
       divContainer.forEach(div => {
              const text = div.querySelector("labal").textContent
              const checked = div.querySelector("input").checked
              todoList.push({text,checked})      
       })
       localStorage.setItem("task",JSON.stringify(todoList))       
}
// function loedTodo() {
//       const to = localStorage.getItem("task")
//       if(to){
//        const todo = JSON.parse(to)
//         todo.forEach(() =>{
          
//         })
//       }
       
// }







