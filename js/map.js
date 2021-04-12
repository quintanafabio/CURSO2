const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map ('myMap').setView([-29.413625605731607, -66.85712224923006],13)

L.tileLayer(tilesProvider, {
    maxZoom:18,
    minZoom:17
}).addTo(myMap)

let marker = L.marker([-29.413625605731607, -66.85712224923006]).addTo(myMap);

let iconMarker = L.icon({
    iconUrl: 'marker.png',
    iconSize: [40,40],
    iconAnchor: [20,40]
})

// let marker2 = L.marker([51.51, -0,09], {icon: iconMarker}).addTo(myMap);

myMap.doubleClickZoom.disable();
myMap.on('dblclick', e => {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent);
    console.log(latLng);
    L.marker([latLng.lat, latLng.lng], {icon: iconMarker}).addTo(myMap)

})