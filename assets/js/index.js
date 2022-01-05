!function (){
    var nImagenes = 0;
    var body = document.body,
    html = document.documentElement;
    var scrolledBefore = 0;
    document.body.onload = function() {
        cargarImagenes(9);
    }
    window.addEventListener("scroll",scrollFunction);
    
    function scrollFunction() {

        var scrollTop = window.pageYOffset;
        var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );;
        var winHeight = window.innerHeight;
        var scrollPercent = scrollTop / (docHeight - winHeight);

        if(window.pageYOffset > scrolledBefore){
            console.log(scrollPercent);
            if(scrollPercent > 0.8){
                if(!cargarImagenes(6))
                    window.removeEventListener("scroll",scrollFunction);
            }
            scrolledBefore = window.pageYOffset;
        }
    }

    function cargarImagenes(n){
        console.log("Cargando imagenes de "+nImagenes+" a "+(nImagenes+n));
        var imagenesNuevas = galeriaData.slice(nImagenes,(nImagenes+n));
        nImagenes+=n;
        imagenesNuevas.forEach((imagen)=>{
            setTimeout(()=>{
                var newItem = document.createElement('div');
                newItem.innerHTML = '<img class="loader" src="assets/img/loader.gif"/>';
                var newImage = document.createElement('img');
                newImage.src = imagen.src;
                newImage.alt = imagen.descripcion;
                newImage.classList.add("img")
                newItem.appendChild(newImage);
                document.querySelector("#container-galeria").appendChild(newItem);
                newImage.onload = (e)=>{
                    e.target.parentNode.classList.add("img-cargada");
                };
            },50);
        });
        return imagenesNuevas.length == n;
    }
}();