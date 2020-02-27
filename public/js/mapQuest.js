function initMap() {
  L.mapquest.key = '2qjTYOixTkl3v82mlIF1R9tu0uE3C3UN';

  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.titleLayer('map'),
    zoom: 12
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
