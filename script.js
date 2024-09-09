
const submit = document.getElementById("submit")
const input = document.getElementById("text")
const container = document.createElement("div")

submit.addEventListener("click", () => {

       const t = input.value
       const newDiv = document.createElement("div")
       const newLabal = document.createElement("labal")
       newLabal.id = "lal"
       const chekbox = document.createElement("input")
       chekbox.id = "ch"
       newDiv.id = "divContain"
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
                        Delete.id ="btndel"
                        Delete.textContent = "🗑️"
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
       newLabal.addEventListener("click",()=>{
              const newInput = document.createElement("input")
              newInput.id = "ni"
              const edit = document.createElement("button")
              edit.id = "edit"
              edit.textContent = "ערוך"
              newInput.type = "text"
              newInput.value = newLabal.textContent
              newDiv.appendChild(newInput)
              newDiv.appendChild(edit)
              newLabal.remove()
              chekbox.remove()
       
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
function loedTodo() {
      const to = localStorage.getItem("task")
      if(to){
       const todo = JSON.parse(to)
        todo.forEach(t =>{
              const newDiv = document.createElement("div")
              newDiv.id = "divContain"
              const newLabal = document.createElement("labal")
              newLabal.id = "lal"
              const chekbox = document.createElement("input")
              chekbox.id = "ch"
              chekbox.type = "checkbox"
              newLabal.textContent = t.text
              chekbox.checked = t.checked

              newDiv.appendChild(newLabal)
              newDiv.appendChild(chekbox)
              container.appendChild(newDiv)
              document.body.appendChild(container)

              if(chekbox.checked == true){
                     if(!newDiv.querySelector("button")){
                            const Delete = document.createElement("button")
                            Delete.id = "btndel"
                            Delete.textContent = "🗑️"
                            newDiv.appendChild(Delete)
                            Delete.addEventListener("click",()=>{
                                    newDiv.remove();                                           saveToLocalstorege()
                            })

                     }
              }

              chekbox.addEventListener("change", (e) => {
                     if (e.target.checked) {
                            saveToLocalstorege()
                            if(!newDiv.querySelector("button")){
                               const Delete = document.createElement("button")
                               Delete.id = "btndel"
                               Delete.textContent = "🗑️"
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
       
      }       
}
loedTodo()









