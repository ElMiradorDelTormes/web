const paginas = {
    "piso": {
        "nombre": "El piso",
        "url": "piso",
        "main": '<h1>Mirador del Tormes, un espacio luminoso y confortable.</h1><img src="assets/img/optimized/piso/Sexto-Render.webp"/>',
        "estilos": [{
            "src": "assets/css/piso.css"
        },
        {
            "src": "assets/css/piso-tablet.css",
            "media": "(max-width: 1024px)"
        }]
    },
    "galeria": {
        "nombre": "Galería",
        "url": "galeria",
        "main": '<h2>Galería</h2><div id="container-galeria"></div>',
        "estilos": [
            {
                "src": "assets/css/galeria.css"
            },
            {
                "src": "assets/css/galeria-tablet.css",
                "media": "(max-width: 1024px)"
            }
        ],
        "scripts": [
            {
                "src":"assets/js/cargador-imagenes.js"
            },
            {
                "src":"assets/js/galeria.js",
                "defer": true
            }
        ]
    }
}