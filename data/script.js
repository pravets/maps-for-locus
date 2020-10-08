//Creat Layer
var baseMap = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

var baseMapIndex = {
  "Map": baseMap
};

// Create the map
var map = new L.map('map', {
    center: new L.LatLng(41.019829, 28.989864),
    zoom: 14,
    maxZoom: 18,
    zoomControl: false, // Disable the default zoom controls.
    layers: baseMap
});

// Create the control and add it to the map;
var control = L.control.layers(baseMapIndex);
control.addTo(map);


console.log(1);

let geoArr = ['1.json','13.json','17.json','21.json','25.json','29.json','32.json','36.json','4.json ','43.json','47.json','50.json','54.json','58.json','61.json','65.json','69.json','72.json','76.json','8.json ','89.json','10.json','14.json','18.json','22.json','26.json','3.json ','33.json','37.json','40.json','44.json','48.json','51.json','55.json','59.json','62.json','66.json','7.json ','73.json','77.json','83.json','9.json','11.json','15.json','19.json','23.json','27.json','30.json','34.json','38.json','41.json','45.json','49.json','52.json','56.json','6.json ','63.json','67.json','70.json','74.json','78.json','86.json','95.json','12.json','16.json','2.json ','24.json','28.json','31.json','35.json','39.json','42.json','46.json','5.json','53.json','57.json','60.json','64.json','68.json','71.json','75.json','79.json','87.json'];




for (let i = 0; i < geoArr.length; i++) {
 $.getJSON( 'geojson/' + geoArr[i] ).done(function( data ) { 

   L.geoJson(data).bindPopup(geoArr[i]).addTo(map);     }
   );
   

   
}

