$(document).ready(function(){
    var networkMap = L.map('networkMap',{
        crs: L.CRS.Simple,
        minZoom: 0
    });
    
    
    var bounds = [[0,0], [1000,1000]];
    var image = L.imageOverlay('images/wiki-svg-metro-map.svg', bounds).addTo(networkMap);
    networkMap.fitBounds(bounds);

    networkMap.on("contextmenu", function (event) {
        console.log("Coordinates: " + event.latlng.toString());
        L.marker(event.latlng).addTo(networkMap);
      });

    var DNG = L.latLng([484, 689]);
    var CFD = L.latLng([100, 100]);
    L.marker(DNG).addTo(networkMap).bindPopup('<p>Dandenong (DNG)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');
});