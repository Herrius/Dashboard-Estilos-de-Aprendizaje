
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#carrusel',{
        type   : 'no-loop',
        perPage: 4,
        perMove: 4,
        pagination:false,
    } ).mount();
} );
