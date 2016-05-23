var myCenter = new google.maps.LatLng(37.535253,-120.863445);
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(37.535253,-120.863445),
        zoom:16,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
        position:myCenter,
    });
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content:"1283 Paseo Belleza, Turlock, CA 95382, United States"
    });
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);