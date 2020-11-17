var map;
let viewDefault = new ol.View({
    center: ol.proj.fromLonLat([144.967386, -37.818259]),
    zoom: 12
})

initMap();

function initMap() {
    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'toner-lite',
                })
            })
        ],
        view: viewDefault
    });
}