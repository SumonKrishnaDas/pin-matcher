
function getPin(){


const pin= generationPin();
const pinString=pin+'';
if(pinString.length===4){

    return pin;

}
else{

return getPin();


}





}






function generationPin(){




    const random= Math.round(Math.random()*10000)

    return random;




}

document.getElementById('generate-pin').addEventListener('click',pin);

function pin(){

const pin=getPin();


const displayField=document.getElementById('display-pin');
displayField.value=pin;


}

document.getElementById('calculator').addEventListener('click', calCulTor);


function calCulTor(event){

const number = event.target.innerText;
const typeNumber = document.getElementById('typed-number');
const previousTypeNumber = typeNumber.value;
if(isNaN(number)){

    if(number ==='C'){

typeNumber.value ='';

    }
    else if( number ==='<' ){

        const digits = previousTypeNumber.split('')
        digits.pop();
        const remainDigit =digits.join('');
        typeNumber.value=remainDigit;


    }




}
else{




const newTypeNumber=previousTypeNumber+number;

typeNumber.value=newTypeNumber;

}


}


document.getElementById('verify-pin').addEventListener('click',submit);

function submit(){


const  displayField = document.getElementById('display-pin');
const currentPin= displayField.value;


const typedNumberField = document.getElementById('typed-number');
const typeNumber = typedNumberField.value;
const pinSuccessMessage =document.getElementById('pin-success');
const pinFailureMessage=document.getElementById('pin-fail');

if(typeNumber === currentPin){




pinSuccessMessage.style.display='block';
pinFailureMessage.style.display='none'


}
else{
 
    pinFailureMessage.style.display='block';
    pinSuccessMessage.style.display='none';






}


}