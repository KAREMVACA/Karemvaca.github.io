var aux2 = "none"

var imagenes = new Array();
    imagenes[0]=new Image();
    imagenes[0].src = "img/form.jpg";
    imagenes[1]=new Image();
    imagenes[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT5DJ8cbsYPt8djWieTV52bKArTPOly9MT3sWhXy2e4N3NNg0aanMFFtyZNQ_YERBHnI&usqp=CAU";
    imagenes[2]=new Image();
    imagenes[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGRQ3Ls6YRGj-npOOGE1Baon6iWh783pqnwe_BajdhRtTT9lSTQ5B5LqFcEtLVZeX3yc&usqp=CAU";
    imagenes[3]=new Image();
    imagenes[3].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0jI0CC4bwpp1w_bmsJWHRr4XW0s0EX02dw&usqp=CAU";
    imagenes[4]=new Image();
    imagenes[4].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3M_RxSRMvn96L7Ivb2-a7a6n6kt0CcePnQ&usqp=CAU";
    imagenes[5]=new Image();
    imagenes[5].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnFafjz9EakAL__QtFBRe2dr1MhtKSZ7woQ&usqp=CAU";

var id=["main","alaska","haiti","columbia","master","cambridge"]
var info=["","infoAlaska","infoHaiti","infoColumbia","infoMaster","infoCambridge"]
function cambiarImagen(numero){
    if (aux2 == "block"){
        var imagen = document.getElementById("imagenFormacion");
        imagen.src = imagenes[numero].src;
    }else{
        var imagen = document.getElementById("imagenFormacion");
        imagen.src = imagenes[0].src;
    }
    
}

function numeroLista(text){
    for (var i = 0 ; i<id.length ; i++){
        if (id[i]==text){
        var aux = i;
        }
    
    }
return aux;
}    
function ocultarTexto(text){
    aux = info[text];
    var aux3= id [text]
        if ( aux2 == "none"){
            document.getElementById(aux).style.display = "block";
            for (var i = 1; i<id.length;i++){
            document.getElementById(id[i]).style.display="none";

            document.getElementById(aux3).style.display = "block";
            
        }
        aux2="block";
        }else{
            document.getElementById(aux).style.display = "none";
            for (var i = 1; i<id.length;i++){
                document.getElementById(id[i]).style.display="block";
            }
            aux2="none";
        }
        
    
    }

