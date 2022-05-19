const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp");
const title = document.getElementById("title");


function isLampBroken (){
    return lamp.src.indexOf ('quebrad') > -1;
    
    
}

function lampOn(){
    if( !isLampBroken ()){
    lamp.src = './img/ligad.png';
    var lightOn = window.document.body;
    lightOn.style.background = '#f7d12c';
    title.style.color = '#000000';
    } 
        
}

function lampOff(){
    if( !isLampBroken ()){
    lamp.src = './img/desligad.png';
    var lightOff = window.document.body;
    lightOff.style.background = '#0e0d0d';
    title.style.color = '#FFFFFF';
    }
    
}

function lampBroken(){
    lamp.src = './img/quebrad.png';
    var lightOff = window.document.body;    
    lightOff.style.background = '#0e0d0d';
    title.style.color = '#FFFFFF';
    title.textContent = "A lampada quebrou!!!";
}


turnOn.addEventListener("click", lampOn);
turnOff.addEventListener('click' , lampOff);
lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave' , lampOff);
lamp.addEventListener('dblclick' , lampBroken);

