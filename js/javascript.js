var MyFunction1 = () =>{
    
    alert("Se agrego este producto al carrito de compras")

   };



var parrafo = () =>{

    var parrafo = document.getElementsByTagName("p");
    for (var i= 0; i<parrafo.length; i++){
        parrafo[i].style.color = "red";
    };
}
