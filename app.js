var posicaoX = 0;
var posicaoY = 0;
var numberSizeMosquito = 0;
var numberRandomSide = 0;
var lifePoints = 0;
var mosquitoTimer = window.location.search;
var timeGameMosquito = 1500;
var time = 30;

//Time to show mosquitos
    if(mosquitoTimer === '?normal'){
        timeGameMosquito = 1500;
    } else if(mosquitoTimer === '?hard'){
        timeGameMosquito = 1000;
    } else if(mosquitoTimer === '?god'){
        timeGameMosquito = 750;
    }

    function cronometro() {
        
        document.getElementById('timer').innerHTML = time;
        time--;
        if(time < 0){
            window.location.href = 'victory.html';
        }

}
//Random Positions
    function realTimePosition() {//That function is going to calculate the size of the window everytime, for it 
        //you will  need to use "onresize" at the tag "body" on yout html code

        posicaoX = Math.floor(Math.random() * window.innerWidth) - 100;
        posicaoY  = Math.floor(Math.random() * window.innerHeight) - 100;
        
        if(posicaoX < 0) posicaoX = 0;
            
        if(posicaoY < 0) posicaoY = 0;
            
    }

//Random Size Mosquitos
    function randomSizeMosquito() {
        
        numberSizeMosquito = Math.floor(Math.random() * 3) + 1;
        if(numberSizeMosquito === 1){
            numberSizeMosquito = 'mosquito1';
        
        } else if (numberSizeMosquito === 2) {
            numberSizeMosquito = 'mosquito2';
        
        } else if (numberSizeMosquito === 3){
            numberSizeMosquito = 'mosquito3';
        
        }
    }

//Random side of  mosquitos
    function randomSide(){
        
        numberRandomSide = Math.floor(Math.random() * 2) + 1;
        
        if(numberRandomSide === 1){
            numberRandomSide = 'ladoA';
        
        } else if (numberRandomSide === 2) {
            numberRandomSide = 'ladoB';
        
        }
    }

//Gameover
    function gameOver(){
        window.location.href = 'gameover.html'
    }

//Random Mosquito, includes everything
function randomMosquito() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        lifePoints++;

        if(lifePoints === 4){
            gameOver();
        }
        
        document.getElementById('heart' + lifePoints).src = 'imagens/coracao_vazio.png'
        
    }
    
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';

    realTimePosition();
    randomSizeMosquito();
    randomSide();
    cronometro();
    
    //Never forget the space beetween tow or more ".className", it is essencial to work
    mosquito.className = numberSizeMosquito + ' ' + numberRandomSide;
    mosquito.style.left = posicaoX + 'px';//The 'px' is necessary because its a html code
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        document.getElementById('mosquito').remove();
    }

    document.body.appendChild(mosquito);

    
}