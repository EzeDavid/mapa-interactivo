let mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
let posicionCentral = {
  lat: 10,
  lng: 10
};
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat:  -34.6083,
      lng:  -58.3712
    },
    zoom: 15
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}