const submit = document.getElementById("submit")
const input = document.getElementById("text")
const h1 = document.createElement("h1")


submit.addEventListener("click",()=>{
       
       const t = input.value
       const newDiv = document.createElement("div")
       const newLabal = document.createElement("labal")
       const chekbox = document.createElement("input")
       chekbox.type = "checkbox"
       newLabal.textContent = t
       newDiv.appendChild(newLabal)
       newDiv.appendChild(chekbox)
       document.body.appendChild(newDiv)
       input.value = " "
      
})

