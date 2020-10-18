const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Add map
/* Longitude e latitude de Maceió (para mostrar regiões com orfanatos):
-9.5985924,-35.7592344 */
const map = L.map('mapid', options).setView([-9.5985924, -35.7592344], 12.4);

// Add imagem do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add ícone
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [48, 48],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

// Add marcador no mapa
L.marker([-9.5935782, -35.7553235], { icon }).addTo(map);

/* Image gallery */
function selectImage() {
  const button = event.currentTarget;

  // Remover todas as classes active dos buttons da div images
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach((button) => button.classList.remove('active'));

  // Selecionar a imagem clicada
  // <img> é o elemento 0 (e único) da nodelist de button
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  // Atualizar a imagem principal
  imageContainer.src = image.src;

  // Adicionar a classe .active para este botão para destacá-lo
  button.classList.add('active');
}
