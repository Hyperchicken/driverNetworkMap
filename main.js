$(document).ready(function(){
    var networkMap = L.map('networkMap',{
        crs: L.CRS.Simple,
        minZoom: 1,
        center: [669.083336, 429.5],
        zoom: 2
        
    });
    
    
    var bounds = [[0,0], [1000,1000]];
    var image = L.imageOverlay('images/wiki-svg-metro-map.svg', bounds).addTo(networkMap);
    //networkMap.fitBounds(bounds);

    networkMap.on("contextmenu", function (event) {
        console.log("Coordinates: " + event.latlng.toString());
        L.marker(event.latlng).addTo(networkMap).bindPopup(event.latlng.toString());
      });


    //sample markers
    var DNG = L.latLng([484, 689]);
    var CFD = L.latLng([604.908854, 508.546875]);
    var WTL = L.latLng([538.817708, 612.71875]);
    var OAK = L.latLng([580.005208, 557.75]);
    var PKM = L.latLng([384.411458, 989.34375]);
    L.marker(DNG).addTo(networkMap).bindPopup('<p>Dandenong (DNG)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');
    L.marker(CFD).addTo(networkMap).bindPopup('<p>Caulfield (CFD)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');
    L.marker(WTL).addTo(networkMap).bindPopup('<p>Westall (WTL)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');
    L.marker(OAK).addTo(networkMap).bindPopup('<p>Oakleigh (OAK)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');
    L.marker(PKM).addTo(networkMap).bindPopup('<p>Pakenham (PKM)<br /><ul><li><a>Sidings</a></li><li><a>Terminating Moves</a></li><li><a>Signal Diagram/Mud Map</a></li></ul></p>');

    var iconCurveboard = L.icon({
        iconUrl: "images/curveboard.png",
        iconSize: [60, 65],
        iconAnchor: [33, 57],
        popupAnchor: [-3, -76],
    });
    var BCScurve = L.latLng([409.760417, 866.1875]);
    L.marker(BCScurve, {icon: iconCurveboard}).addTo(networkMap);

    //sample polylines
    var NWNtoBCS = [[442.260417, 791.6875],[428.447917, 836.8125],[417.260417, 859.125]];
    var NWNtoBCSpolyline = L.polyline(NWNtoBCS, {color: 'red', lineCap: 'round'}).addTo(networkMap).bindPopup('<p>Narre Warren to Beaconsfield</p>');

    //sample polygons
    var CBEjunction = [[483.770834, 697.375],[465.520834, 727.875],[456.395834, 723.375],[461.145834, 714.375],[448.520834, 719.5],[442.145834, 709.5],[467.270834, 698.875],[473.895834, 690.125]];
    var CBEjunctionPolygon = L.polygon(CBEjunction, {color: 'lime'}).addTo(networkMap).bindPopup('<p>Cranbourne Junction</p>');


});