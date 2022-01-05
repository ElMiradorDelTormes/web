!function() {
    const url = location.search;
    const urlParams = new URLSearchParams(url);

    cargarNav();
    cargarPagina(_getNombrePagina());

    function cargarNav() {
        var pags = Object.keys(paginas);
        pags.forEach((pagina)=> {
            var newElement = document.createElement("li");
            if(pagina == _getNombrePagina())
                newElement.setAttribute("activo","true");
            newElement.innerHTML = '<a href="?pagina='+pagina+'">'+paginas[pagina].nombre+'</a>';
            document.querySelector("header nav ul").appendChild(newElement);
        });
    }
    
    function cargarPagina(nombre){
        if("estilos" in paginas[nombre])
            paginas[nombre].estilos.forEach((paginaEstilos)=>{
                var newPagina = document.createElement("link");
                newPagina.rel = "stylesheet";
                newPagina.href = paginaEstilos.src;
                if("media" in paginaEstilos)
                    newPagina.media = paginaEstilos.media;
                document.head.appendChild(newPagina);
            });
        if("scripts" in paginas[nombre])
            paginas[nombre].scripts.forEach((paginaScripts)=> {
                var newPagina = document.createElement("script");
                newPagina.src = paginaScripts.src;
                if(("defer" in paginaScripts) && (paginaScripts.defer == true))
                    newPagina.defer = true;
                document.head.appendChild(newPagina);
            });
        document.querySelector("main").innerHTML = paginas[nombre].main;
    }

    function _getNombrePagina(){
        if(urlParams.has("pagina"))
            return urlParams.get("pagina");
        return "piso";
    }
}();
