var area = document.getElementById("main")
const onClick = (event) => {
    var id = event.srcElement.id;
    event.preventDefault;
    numero = numeroLista(id);
    ocultarTexto(numero);
    cambiarImagen(numero);

}        
area.addEventListener("click",onClick);

