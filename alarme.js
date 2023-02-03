/* os "id's estão no html" */
/* as "variáveis" estão no javascript */
/* a estratégia é juntas as "id's" com as "variáveis" */
/* "innerHTML" faz a alteração na tela*/
var display = document.getElementById('display');

/*fazendo dos "selects" */
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

/*fazendo dos "buttons"*/
var comecar = document.getElementById('comecar')
var parar = document.getElementById('parar')
/*fazendo variáveis que serão declaradas no decorrer do código*/
var minutoAtual;
var segundoAtual;

var interval;

/*para minutos */
for(var i = 0; i <= 60; i++){
    /*alterando a variável minutos*/
    minutos.innerHTML += '<option value= '+i+'>' +i+ '</option>';
}

/*para segundos */
for(var i = 0; i <= 60; i++){
    /*alterando a variável segundos*/
    segundos.innerHTML += '<option value= '+i+'>' +i+ '</option>';
}

/*fazendo o evento do botão "começar" */
comecar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;
    /*foi criado uma linha vazia no html, onde nós vamos colocar os valores "minutoAtual" e "segundoAtual"*/

    /*<div id="display">
            <h3></h3>
        </div> */
    
    display.childNodes[1].innerHTML = minutoAtual +":" + segundoAtual;
    
    /*função "setInterval" realiza uma ação de acordo com o intervalo */
    interval = setInterval(function(){
        segundoAtual--;/*diminuindo o segundo atual */
        
        /*fazendo o "if" para saber até onde ele vai regredir */
        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--;
                segundoAtual=59;
            }else{
                alert("Acabou o Tempo!")
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = minutoAtual +":" + segundoAtual;

    },  1000)

})

/*fazendo o evento do botão "parar" */
parar.addEventListener('click',function(){
    clearInterval(interval)

})