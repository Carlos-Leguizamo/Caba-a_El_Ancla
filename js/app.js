let imagenes = [
    {
        "url": "./img/img-carrusel/img1.jpg",
        "nombre": "¡BIENVENID@S!",
        "descripcion": "¡Tu refugio junto a la represa de Yaguara! <br> En Cabaña El Ancla encontrarás el lugar perfecto para relajarte y disfrutar de la tranquilidad del campo. Desconecta de la rutina y sumérgete en un entorno natural lleno de paz y belleza, a orillas de la represa de Yaguara."
    },
    {
        "url": "./img/img-carrusel/img2.jpg",
        "nombre": "DISFRUTA DE:",
        "descripcion": " -> Alojamiento acogedor: Cabañas completamente equipadas con todo lo necesario para una estancia confortable. <br> -> Entorno natural único: Paisajes impresionantes, aire fresco y actividades al aire libre para todos los gustos. <br> -> Actividades para toda la familia: Senderismo,pesca, observación de aves y mucho más. <br> -> Momentos de relax: Disfruta de un baño en la piscina, una barbacoa en el jardín o simplemente relájate en la terraza con un buen libro."

    },
    {
        "url": "./img/img-carrusel/img3.jpg",
        "nombre": "<br><br>¡TE ESPERAMOS!",
        "descripcion": "Explora nuestra web para obtener más información sobre nuestra cabaña, las actividades disponibles y las tarifas. También puedes contactarnos directamente para resolver cualquier duda o realizar una reserva. </p> <button class=\"my-button\" onclick=\"window.location.href='./views/cabaña.html'\">Conoce mas</button>"
      }
      
      
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}