//window.alert("Olá mundo!")
let soma = document.querySelector("#soma")
let form = document.querySelector("form")
let resultado 
 

// CAMPO DE SOMA COM VALORES DINÂMICOS 
window.addEventListener("load", ()=>{
    //Math.floor = arredonda os valores para baixo(floor)
    //Math.floor = arredonda os valores para cima(ceil)
    let num1 = Math.floor(Math.random() * 10) // Gerando valores aleatórios(dinâmicos)
    console.log(num1)
    let num2 = Math.ceil(Math.random() * 10)
    console.log(num2)

    soma.setAttribute("placeholder", `Qual a soma de ${num1} + ${num2}`)
    //setAttribute = muda atributos, consiste em, definir um atributo que deseja ser mudado e o que você quer mudar nele. Sempre usar (``) e para adicionar uma variável, utilizar "${variável}"
    resultado = num1 + num2
})

//VALIDAR O CAMPO DE SOMA
function verificaSoma(){
    if(soma.value == ""){
        soma.style.outline = "none"
    }
    else if(soma.value != resultado){
        soma.style.outline = "2px solid red"
        return false

    }
    else{
        
        soma.style.outline = "2px solid green"
        return true
    }
}

soma.addEventListener('keyup', (verificaSoma))

form.addEventListener('submit', (evento)=>{
    if(verificaSoma()){
        alert("Tudo certo!!")
        return true
    }
    else{
        alert("A soma está errada!!!!")
        return false
    }
})