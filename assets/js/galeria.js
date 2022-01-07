!function (){
    var nImagenes = 0;
    var nImagenesCarga = 0;
    var body = document.body;
    var html = document.documentElement;
    var scrolledBefore = 0;

    var isPaused = false;
    var stopChargingMovil = false;

    function wait() {
        if(document.body.scrollHeight > window.innerHeight) {
            if(window.innerWidth >= 1024) {
                if(nImagenes%3 != 0)
                    cargarImagenes(1);
            }
            else {
                stopChargingMovil = true;
                cargarImagenes(1);
            }
            return;
        }
        if(nImagenesCarga >= galeriaData.length) {
            return;
        }
        if(isPaused) {
            setTimeout(function(){wait()},50);
        }
        else {
            nImagenesCarga++;
            cargarImagenes(1);
            wait();
        }
            
    }
    document.body.onload = function() {
        wait();
        if(nImagenesCarga > 6)
            nImagenesCarga = 6;
    }
    window.addEventListener("scroll",scrollFunction);
    
    function scrollFunction() {
        var scrollTop = window.pageYOffset;
        var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );;
        var winHeight = window.innerHeight;
        var scrollPercent = scrollTop / (docHeight - winHeight);
        if(window.pageYOffset > scrolledBefore){
            if(scrollPercent > 0.8){
                if(!cargarImagenes(3))
                    window.removeEventListener("scroll",scrollFunction);
            }
            scrolledBefore = window.pageYOffset;
        }
    }

    function cargarImagenes(n){
        isPaused = true;
        var imagenesNuevas = galeriaData.slice(nImagenes,(nImagenes+n));
        nImagenes+=n;
        imagenesNuevas.forEach((imagen)=>{
            setTimeout(()=>{
                var newItem = document.createElement('div');

                var auxImage = document.createElement('img');
                auxImage.classList.add("loader");
                auxImage.src = "assets/img/loader.gif";
                newItem.appendChild(auxImage);
                auxImage.onload = function() {
                    isPaused = false;
                }
                var newImage = document.createElement('img');
                newImage.src = imagen.src;
                newImage.alt = imagen.descripcion;
                newImage.width = imagen.width;
                newImage.height = imagen.height;
                newImage.classList.add("img")
                newItem.appendChild(newImage);
                document.querySelector("#container-galeria").appendChild(newItem);
                newImage.onload = (e)=>{
                    e.target.parentNode.classList.add("img-cargada");
                    if(scrolledBefore == 0 && stopChargingMovil == false)
                        wait();
                };
            },50);
        });
        return imagenesNuevas.length == n;
    }
}();