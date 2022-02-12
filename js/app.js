function getPin(){
    const pin = Math.round( Math.random()*10000 );
    const pinString = pin+"";
    if( pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
  document.getElementById('display-pin').value= getPin();
}
document.getElementById("key-pad").addEventListener('click', function(e){
    const number = e.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if( number == "C"){
            calcInput.value ='';
        }
    }
    else{
        const previousNumber = calcInput.value;
        calcInput.value =previousNumber + number;
    }
})
function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const Success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if( pin == typedNumber){
        Success.style.display ="block" ;
        fail.style.display ="none" ;
    }
    else{
        fail.style.display ="block" ;
        Success.style.display ="none" ;
    }
}