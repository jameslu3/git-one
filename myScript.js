var map;
var p1;
var p2;
var lat1;
var lng1;
var lat2;
var lng2;
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(25,0),
      zoom:3,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#374557" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#374557" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    };
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
function myFunction(){
    google.maps.event.addListener(map, 'click', function(event) {
        if(!p1)
        {
            p1 = new google.maps.Marker({position: event.latLng, map: map})
            lat1=event.latLng.lat().toFixed(5);
            lng1=event.latLng.lng().toFixed(5); 
            document.getElementById('coord1').value = "Lat: " + lat1 + ", Long: " + lng1;
        }
        else if(!p2)
        {
            p2 = new google.maps.Marker({position: event.latLng, map: map})
            lat2=event.latLng.lat().toFixed(5);
            lng2=event.latLng.lng().toFixed(5);
            document.getElementById('coord2').value = "Lat: " + lat2 + ", Long: " + lng2;
        }
        else if(p1 && p2)
        {
            location.reload();
            alert("Only use 2 points please")
        }    
    });
}
function calculate(){
    if(!p1)
    {
        alert("Please choose coordinates");
    }
    else if(!p2)
    {
        alert("Please pick the second coordinate");
    }
    else{
        var R = 3958.8;
        var a = lat1 * Math.PI/180;
        var b = lat2 * Math.PI/180;
        var c = (lat2-lat1) * Math.PI/180;
        var d = (lng2-lng1) * Math.PI/180;

        var e = Math.sin(c/2) * Math.sin(c/2) +
          Math.cos(a) * Math.cos(b) *
          Math.sin(d/2) * Math.sin(d/2);
        var f = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1-e));
        document.getElementById('distance').innerHTML = (R * f).toFixed(5);
    }
}
function reset(){
    location.reload();
}
