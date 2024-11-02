


let display = document.getElementById('display')

function tast(number){
    display.value += number
}


function clearIput(){
    display.value = ''
}

function delet_one(){
    display.value = display.value.slice(0 , -1)
}

function plusing(){
    if(display.value == ''){
     window.alert('input undfiend')
    }else{
    display.value = eval(display.value)
    }
}





