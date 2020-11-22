var map;
let viewDefault = new ol.View({
    center: ol.proj.fromLonLat([144.967386, -37.818259]),
    zoom: 12
})

let railCorridorLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'https://services.land.vic.gov.au/catalogue/publicproxy/guest/dv_geoserver/wms',
        params: {
            'VERSION': '1.1.1',
            'LAYERS': 'PTV_TRAIN_CORRIDOR_CENTRELINE',
        },
        ratio: 1,
        serverType: 'geoserver',
    })
});

let trainStationLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'https://services.land.vic.gov.au/catalogue/publicproxy/guest/dv_geoserver/wms',
        params: {
            'VERSION': '1.1.1',
            'LAYERS': 'PTV_METRO_TRAIN_STATION',
            //'SLD': 'https://hyperchicken.com/networkmapdev/sld/stations.sld'
        },
        ratio: 1,
        serverType: 'geoserver',
    })
});

initMap();

function initMap() {
    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'toner-lite',
                })
            }),
            railCorridorLayer,
            trainStationLayer
        ],
        view: viewDefault
    });
}