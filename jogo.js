
var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var nivel = window.location.search.replace('?', '')


if(nivel ==='facil'){
    criaMosquitoTempo = 3000
}
if(nivel ==='normal'){
    criaMosquitoTempo = 2000
}

if(nivel ==='dificil'){
    criaMosquitoTempo = 1000

}



var cronometro = setInterval(function () {
    tempo--  

    if(tempo< 0){
       clearInterval(cronometro)
       clearInterval(criaMosquito)
       window.location.href = 'app-vitoria.html'
    }else{
         document.querySelector('#cronometro').innerHTML = tempo 
    }
       
    
},1000)

//capturando o tamanho da tela 
function ajustarTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(`${largura} ${altura}` )
}

ajustarTamanhoPalcoJogo()

//criando o elemento na tela de forma automática
function posicaoRandomica(){
        
    if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()
      
        
        if(vidas > 3){
           window.location.href = 'fim_d_jogo.html'
        }
        else{
             document.querySelector('#vida' + vidas).src ='./imagens/coracao_vazio.png'
        }
        vidas++
    }

    var posicaoX = (Math.floor(Math.random() * largura) -400 )
    var posicaoY = (Math.floor(Math.random() * largura) -400 )

    posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = './imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.id ='mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)   
   
   console.log(ladoAleatorio())
    
}

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe){

        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        
    }

    
}

function ladoAleatorio(){
    var classeLado = Math.floor(Math.random() * 2)
   

    switch(classeLado){

        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }

}





    




/*


	

	console.log(posicaoX, posicaoY)
*/





    









