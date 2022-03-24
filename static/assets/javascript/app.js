const resultado = document.getElementById('resultado')
function insert(num){
    resultado.innerHTML += num
}

function back(){
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1)

}

function clean(){
    resultado.innerHTML = ''
}

function calcular(){
    if(resultado.innerHTML){
        resultado.innerHTML = eval(resultado.innerHTML)
    }else{
        resultado.innerHTML = ""
    }
}