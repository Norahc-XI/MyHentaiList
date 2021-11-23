let bajarBoton=document.querySelector(".btn-desplazar")
let storage=document.getElementById("Storage")

bajarBoton.addEventListener("click", ()=>{
    document.body.style.overflowY = "scroll"
    storage.scrollIntoView()
    bajarBoton.removeEventListener("click")
})