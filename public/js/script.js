const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

setTimeout(() => {
    message.style.display = "none"
}, 5000)

const btnbusca = document.querySelector("#sortOrder")
const pokedex = document.querySelector("#pokemon")

btnbusca.addEventListener("click", function(){ 
    
    if(noSort=0){
        value="noSort";
    } else if ()
})