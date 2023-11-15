let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

function clicou() {

    formulario.style.left = "525px"
    mascara.style.visibility = "visible"
    
}
function sairForm(){
    
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}