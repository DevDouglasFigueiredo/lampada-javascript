const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp");



function isLampBroken (){
    return lamp.src.indexOf ('quebrad') > -1;
    
}

function lampOn(){
    if( !isLampBroken ()){
    lamp.src = './img/ligad.png';
    var lightOn = window.document.body
    lightOn.style.background = 'rgb(250, 250, 117)';
   
    }
    
}

function lampOff(){
    if( !isLampBroken ()){
    lamp.src = './img/desligad.png';
    var lightOff = window.document.body
    lightOff.style.background = 'rgb(20, 20, 20)';
    }
}

function lampBroken(){
    lamp.src = './img/quebrad.png';
    var lightOn = window.document.body
    lightOn.style.background = 'rgb(250, 250, 117)';

}


turnOn.addEventListener("click", lampOn);
turnOff.addEventListener('click' , lampOff);
lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave' , lampOff);
lamp.addEventListener('dblclick' , lampBroken);

