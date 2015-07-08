var pixelProjection = new ol.proj.Projection({
        code: 'pixel',
        units: 'pixels',
        extent: [0, 0, 2944, 2944]
    });

//////////////////////////////////////////////////////////
//OL3 - CREATE MAP LAYER, ADD TWO RASTER LAYERS - IMAGES//
//////////////////////////////////////////////////////////

var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(2),
        projection: pixelProjection,
//  className: 'custom-mouse-position',
//  target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
    });

//var styles = {
//  'Polygon': [new ol.style.Style({
//    stroke: new ol.style.Stroke({
//      color: 'yellow',
//      width: 1
//    }),
//    fill: new ol.style.Fill({
//      color: 'rgba(255, 255, 0, 0.3)'
//    })
//  })]
//};
//
//var styleFunction = function(feature, resolution) {
//  return styles[feature.getGeometry().getType()];
//};

//var vectorSource = new ol.source.GeoJSON (
//  /** @type {olx.source.GeoJSONOptions} */ ({
//    object: {
//      'type': 'FeatureCollection',
//      'crs': {
//        'type': 'name',
//        'properties': {
//          'name': 'pixelProjection'
//        }
//      },
//      'features': [
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [[[1470.39, 1621.51], [1495.01, 1624.56], [1505.07, 1539.57], [1456.20, 1532.74], [1451.52, 1572.27], [1479.91, 1575.51], [1475.78, 1607.31], [1472.01, 1607.31]]]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1462.64, 1659.30 ], [ 1489.95, 1663.26 ], [ 1494.99, 1624.09 ], [ 1470.73, 1621.57 ], [ 1467.49, 1620.49 ], [ 1446.11, 1617.62 ], [ 1444.49, 1632.17 ], [ 1454.91, 1632.17 ], [ 1453.66, 1642.05 ], [ 1464.98, 1642.23 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1462.82, 1688.41 ], [ 1486.36, 1692.55 ], [ 1489.95, 1663.68 ], [ 1437.84, 1657.51 ], [ 1437.13, 1674.04 ], [ 1462.82, 1674.22 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1457.61, 1731.90 ], [ 1484.74, 1737.65 ], [ 1486.72, 1701.35 ], [ 1439.28, 1695.42 ], [ 1438.02, 1708.90 ], [ 1459.77, 1712.49 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1418.98, 1759.39 ], [ 1480.97, 1772.51 ], [ 1485.10, 1737.47 ], [ 1457.25, 1731.90 ], [ 1453.12, 1750.59 ], [ 1421.49, 1744.84 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1446.29, 1799.82 ], [ 1476.12, 1805.57 ], [ 1481.15, 1772.69 ], [ 1422.21, 1761.01 ], [ 1419.52, 1775.38 ], [ 1436.77, 1777.72 ], [ 1436.77, 1784.01 ], [ 1449.16, 1786.52 ], [ 1448.81, 1792.09 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1443.06, 1833.60 ], [ 1470.01, 1837.55 ], [ 1475.93, 1805.39 ], [ 1446.29, 1799.64 ], [ 1445.57, 1805.03 ], [ 1436.05, 1805.21 ], [ 1434.79, 1821.02 ], [ 1442.88, 1821.20 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1340.81, 1869.18 ], [ 1340.63, 1894.16 ], [ 1358.96, 1895.77 ], [ 1407.12, 1898.83 ], [ 1461.92, 1902.60 ], [ 1470.01, 1837.55 ], [ 1444.67, 1834.32 ], [ 1444.31, 1836.30 ], [ 1426.16, 1835.22 ], [ 1424.01, 1862.17 ], [ 1439.82, 1863.25 ], [ 1438.20, 1878.16 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1441.44, 2024.79 ], [ 1453.12, 2027.84 ], [ 1450.42, 2036.65 ], [ 1461.20, 2040.06 ], [ 1459.41, 2045.81 ], [ 1470.01, 2049.77 ], [ 1483.31, 2005.92 ], [ 1448.63, 1993.70 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1474.68, 2035.93 ], [ 1492.29, 2041.68 ], [ 1502.35, 2011.85 ], [ 1483.31, 2005.92 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1492.11, 2041.68 ], [ 1515.29, 2049.77 ], [ 1527.33, 2019.94 ], [ 1502.17, 2012.03 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1515.33, 2050.12 ], [ 1520.37, 2051.92 ], [ 1513.54, 2070.61 ], [ 1523.24, 2073.66 ], [ 1529.53, 2058.03 ], [ 1541.03, 2061.80 ], [ 1553.43, 2030.18 ], [ 1527.55, 2020.12 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1734.55, 1842.05 ], [ 1820.80, 1848.52 ], [ 1822.96, 1810.60 ], [ 1777.68, 1803.95 ], [ 1778.94, 1781.49 ], [ 1741.38, 1776.82 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1741.20, 1777.00 ], [ 1806.79, 1785.62 ], [ 1807.15, 1772.51 ], [ 1743.54, 1763.88 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1743.54, 1763.88 ], [ 1789.54, 1769.83 ], [ 1791.15, 1750.77 ], [ 1773.01, 1748.97 ], [ 1772.83, 1733.16 ], [ 1747.13, 1733.34 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1733.73, 1654.89 ], [ 1760.32, 1659.56 ], [ 1766.07, 1631.89 ], [ 1763.01, 1630.09 ], [ 1756.19, 1630.09 ], [ 1756.73, 1610.15 ], [ 1745.05, 1609.61 ], [ 1743.25, 1627.94 ], [ 1736.96, 1628.30 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1713.42, 1651.48 ], [ 1733.55, 1654.71 ], [ 1737.14, 1628.30 ], [ 1743.61, 1628.12 ], [ 1744.69, 1608.17 ], [ 1736.96, 1608.35 ], [ 1734.09, 1621.11 ], [ 1729.59, 1620.93 ], [ 1729.59, 1609.07 ], [ 1724.02, 1609.25 ], [ 1721.87, 1616.98 ], [ 1717.01, 1616.62 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1694.37, 1648.60 ], [ 1713.60, 1651.66 ], [ 1717.01, 1616.44 ], [ 1698.87, 1615.18 ], [ 1696.71, 1622.37 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1638.49, 1639.80 ], [ 1694.55, 1648.60 ], [ 1696.71, 1622.37 ], [ 1675.51, 1618.77 ], [ 1675.69, 1613.38 ], [ 1643.16, 1607.99 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1643.34, 1607.63 ], [ 1670.66, 1612.66 ], [ 1672.09, 1602.06 ], [ 1691.68, 1604.40 ], [ 1691.86, 1595.41 ], [ 1647.84, 1588.23 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1609.38, 1260.17 ], [ 1644.24, 1224.77 ], [ 1623.22, 1198.90 ], [ 1589.44, 1225.49 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1475.81, 1249.24 ], [ 1502.76, 1249.42 ], [ 1502.76, 1255.35 ], [ 1514.08, 1255.35 ], [ 1514.26, 1250.32 ], [ 1525.94, 1250.32 ], [ 1525.94, 1260.20 ], [ 1562.95, 1260.20 ], [ 1562.95, 1247.45 ], [ 1549.12, 1247.45 ], [ 1549.12, 1240.08 ], [ 1564.93, 1228.40 ], [ 1564.93, 1215.64 ], [ 1546.78, 1200.37 ], [ 1477.06, 1200.19 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 1409.42, 1598.02 ], [ 1423.61, 1600.53 ], [ 1423.79, 1609.16 ], [ 1432.42, 1609.52 ], [ 1435.11, 1591.55 ], [ 1440.50, 1591.37 ], [ 1442.12, 1578.43 ], [ 1450.21, 1578.43 ], [ 1456.11, 1532.43 ], [ 1420.02, 1529.19 ] ] ]
//          }
//        },
//        {
//          'type': 'Feature',
//          'geometry': {
//            'type': 'Polygon',
//            'coordinates': [ [ [ 2144.68, 237.33 ], [ 2162.46, 252.24 ], [ 2186.90, 252.24 ], [ 2287.76, 273.05 ], [ 2294.95, 273.23 ], [ 2307.03, 73.37 ], [ 2252.95, 73.77 ], [ 2252.95, 62.95 ], [ 2246.30, 62.95 ], [ 2242.88, 73.01 ], [ 2153.93, 131.19 ], [ 2143.15, 144.31 ], [ 2136.32, 177.91 ] ] ]
//          }
//        }
//      ]
//    }
//}));

//var vectorLayer = new ol.layer.Vector({
//  source: vectorSource,
//  style: styleFunction
//});

//var vectorLayer = new ol.layer.Vector({
//        source: new ol.source.GeoJSON({
//            projection: pixelProjection,
//            url: 'lib/listOfPolygon.geojson'
//        })
//  style: new ol.style.Style ({
//    stroke: new ol.style.Stroke({
//      color: 'rgba(255, 255, 0, 0)',
//      width: 1
//    }),
//    fill: new ol.style.Fill({
//      color: 'rgba(255, 255, 0, 0)'
//    })
//  })
//    });

//var selectFeature = new ol.FeatureOverlay({
//        map: map,
//        style: new ol.style.Style({
//            stroke: new ol.style.Stroke({
//                color: 'rgba(255, 255, 0, 1)',
//                width: 1
//            }),
//            fill: new ol.style.Fill({
//                color: 'rgba(255, 255, 0, 0.3)'
//            })
//        })
//    });

var vectorPolygons = new ol.layer.Vector({
    source: new ol.source.Vector({
    url: '/lib/geojson/polygon.geojson',
    format: new ol.format.GeoJSON()
    })
});

var feature = vectorPolygons.getFeatures();
//var idPol = feature.get(name);

var raster = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../../img/pris_raster1.png',
    imageSize: [2944, 2944],
    projection: pixelProjection,
    imageExtent: pixelProjection.getExtent()
  })
});

var photo = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../../img/pris_photo11.png',
    imageSize: [2944, 2944],
    projection: pixelProjection,
    imageExtent: pixelProjection.getExtent()
  })
});

//var vector = new ol.layer.Vector({
//  source: new ol.source.Vector({
//    projection: pixelProjection,
//    url: '../buildings.kml',
//    format: new ol.format.KML()
//  })
//});

var view = new ol.View({
  projection: pixelProjection,
  center: [1580, 1830],
  zoom: 3,
  minZoom: 2,
  maxZoom: 6
});

var map = new ol.Map({
  controls: ol.control.defaults().extend([mousePositionControl]),
  layers: [photo, raster, vectorPolygons],
  target: 'map',
  view: view
});

//////////////////////////////////////
//OL3 - CREATE OVERLAP OF TWO LAYERS//
//////////////////////////////////////

var swipe = document.getElementById('swipe');

raster.on('precompose', function(event) {
  var ctx = event.context;
  var width = ctx.canvas.width * (swipe.value / 100);

  ctx.save();
  ctx.beginPath();
  ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
  ctx.clip();
});

raster.on('postcompose', function(event) {
  var ctx = event.context;
  ctx.restore();
});

swipe.addEventListener('input', function() {
  map.render();
}, false);

//////////////////////////////////
//OTHERS - PROCESSING HTML5&CSS3//
//////////////////////////////////

var obj = JSON.parse(czech_ver);
var imgGal = JSON.parse(image);
var cooSel;


//Add option into select #coo
for (var i = 1; i<=20; i++) {
  $('#coo').append($('<option>', {
    value: i,
    text: obj.dum[i].cp
  }));
}

//Select item for display model
$('#coo').on('change', function() {
  cooSel = $('#coo').val();

  if (cooSel=="br") {
    view.setCenter([1580, 1830]);
    view.setZoom(3);
    map.removeLayer(vectorPolygons);
//    map.removeLayer(vectorLayer);
    $('.mapsec').show();
    $('#obsah-model').removeClass('col-md-12').addClass('col-md-6');
    $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[0].model + '"></iframe>');
    $('#obsah-popis').hide();
    $('#photo').hide();
    $('#checkMap').prop('checked', false);
    $('#checkDes').prop('checked', true);
    $('#checkMap').attr('disabled','disabled');
    $('#checkDes').attr('disabled','disabled');
    $('.checkbox-inline').css('color','#ababab');
  }
  else {
    var sour = obj.dum[cooSel].souradnice;
    var xyi = sour.split(",").map(Number);
    var x = xyi[0];
    var y = xyi[1];

    view.setCenter([x, y]);
    view.setZoom(5);

    if (obj.dum[cooSel].cp=idPol) {
        map.addLayer(vectorPolygons);
    }

    $('#checkMap').removeAttr('disabled');
    $('.checkMap').css('color','#000');
    $('#checkDes').removeAttr('disabled');
    $('.checkDes').css('color','#000');
    $('#obsah-model').show();

    $('#checkDes').prop('checked', true);

    if (obj.dum[cooSel].type=="unity") {
      $('.mapsec').show();
      $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[cooSel].model + '"></iframe>');
      $('#obsah-popis').html(
      '<h3 class="nazev"><span class="czech">' + obj.dum[cooSel].nazev + '</span><span class="english">' + obj.dum[cooSel].nazev_eng + '</span></h3></br>' +
      '<p class="popis"><span class="czech">' + obj.dum[cooSel].popis + '</span><span class="english">' + obj.dum[cooSel].popis_eng + '</span></p></br>' +
      '<p class="popis"><span class="czech">Prohlídka modelu pomocí Unity3D: <a class="down various" data-fancybox-type="iframe" href="' + obj.dum[cooSel].imgMod + '">č.p. ' + obj.dum[cooSel].cp + '</a></span><span class="english">Sightseeing of the model with Unity3D: <a class="down various" data-fancybox-type="iframe" href="' + obj.dum[cooSel].imgMod + '">N° ' + obj.dum[cooSel].cp + '</a></span>' +
      '<p class="popis"><span class="czech">Stáhnout model <a class="down" href="' + obj.dum[cooSel].download + '">č.p. ' + obj.dum[cooSel].cp + '</a></span><span class="english">Download a model <a class="down" href="' + obj.dum[cooSel].download + '">N&deg; ' + obj.dum[cooSel].cp + '</a></span></p>');

    $('#photo').show();
    $('#photo').html('<img class="photo" src="' + obj.dum[cooSel].img + '" alt="">')
        
      //$('#checkMap').prop('checked', false);
      //$('#checkMap').attr('disabled','disabled');
      //$('.checkMap').css('color','#ababab');
    }
    else if (obj.dum[cooSel].type=="gallery") {
      $('#obsah-model').html(
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img1 + '"><img class="imgMod" src="' + obj.dum[cooSel].imgMod + '" alt=""/></a>' +
        '<div class="hidden">' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img2 + '"><img class="imgMod" src="' + imgGal.img[0].img2 + '" alt=""/></a>' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img3 + '"><img class="imgMod" src="' + imgGal.img[0].img3 + '" alt=""/></a>' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img4 + '"><img class="imgMod" src="' + imgGal.img[0].img4 + '" alt=""/></a>' +
        '</div>'
      );
      $('#obsah-model').removeClass('col-md-12').addClass('col-md-6');
      $('.mapsec').show();
      $('#checkMap').prop('checked', false);
      $('#checkMap').attr('disabled','disabled');
      $('.checkMap').css('color','#ababab');
    }
    else {
      $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[cooSel].model + '"></iframe>');
      $('#obsah-popis').show();
      $('#obsah-popis').html(
      '<h3 class="nazev"><span class="czech">' + obj.dum[cooSel].nazev + '</span><span class="english">' + obj.dum[cooSel].nazev_eng + '</span></h3></br>' +
      '<p class="popis"><span class="czech">' + obj.dum[cooSel].popis + '</span><span class="english">' + obj.dum[cooSel].popis_eng + '</span></p></br>' +
      '<p class="popis"><span class="czech">Stáhnout model <a class="down" href="' + obj.dum[cooSel].download + '">č.p. ' + obj.dum[cooSel].cp + '</a></span><span class="english">Download a model <a class="down" href="' + obj.dum[cooSel].download + '">N&deg; ' + obj.dum[cooSel].cp + '</a></span></p>');

      $('#photo').show();
      $('#photo').html('<img class="photo" src="' + obj.dum[cooSel].img + '" alt="">')
      }
  }
});


//Button for default view
$('#but').click(function() {
//  location.reload(true);
  view.setCenter([1580, 1830]);
  view.setZoom(3);
  map.removeLayer(vectorPolygons);
//  map.removeLayer(vectorLayer);
  $('#coo').val("br");
  $('.mapsec').show();
  $('#checkMap').prop('checked', false);
  $('#checkMap').attr('disabled','disabled');
  $('#checkDes').prop('checked', true);
  $('#checkDes').attr('disabled','disabled');
  $('.checkbox-inline').css('color','#ababab');
  $('#obsah-model').removeClass('col-md-12').addClass('col-md-6');
  $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[0].model + '"></iframe>');
  $('#obsah-popis').hide();
  $('#photo').hide();
});

//Checkbox for hide and show map
//$('#but2').click(function() {
$('#checkMap').on("click", function () {
  var chkMap = document.getElementById('checkMap').checked;

  if (chkMap) {
//  if ($('.mapsec').css('display')=="block") {
    $('.mapsec').hide();
    $('#obsah-model').removeClass('col-md-6').addClass('col-md-12');
  }
  else { //($('.mapsec').css('display')=="none")
    $('.mapsec').show();
    $('#obsah-model').removeClass('col-md-12').addClass('col-md-6');
  }
});

//Checkbox for hide and show a description
$('#checkDes').on("click", function () {
  var chkDes = document.getElementById('checkDes').checked;

  if (chkDes) {
    $('#obsah-popis').show();
    $('#photo').show();
  }
  else {
    $('#obsah-popis').hide();
    $('#photo').hide();
  }
})


