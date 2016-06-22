var map;
var activeInfoWindow;
function initMap() {
    var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          // {hue: '#546e7b'},
          // {hue: '#536d7a'},
          {visibility: 'simplified'},
          // {gamma: 50},
          {weight: 0},
          { hue: "#526c79" },
            { saturation: 0 },
            { lightness: 0 }
        ]
      },
      {
        elementType: 'labels',
        stylers: [{color: '#1e3847'}, {weight: .25}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#a5c2d0'}]
    },
    {
  featureType: 'landscape',
  elementType: 'all',
  stylers: [
      { hue: '#c5e2f0' },
      { saturation: 44 },
      { lightness: -4 },
      {visibility: 'simplified'}
  ]
  },
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.09024, lng: -95.712891},
    zoom: 5,
    maxZoom: 5,
    minZoom: 5,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.TERRAIN, customMapTypeId]
      }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

// Locations & Sponsors
      // Atlanta Downtown
var atlanta = new google.maps.LatLng(33.748995,-84.387982);
      var atlantaSponsors = "Sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(atlanta,"Atlanta Downtown", atlantaSponsors);

      // Atlanta Perimeter
var atlantaPerimeter = new google.maps.LatLng(33.956215, -83.987962);
      var atlantaPerimeterSponsors = "Atlanta Perimeter sponsor" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(atlantaPerimeter,"Atlanta Perimeter", atlantaPerimeterSponsors);

      // Austin
var austin = new google.maps.LatLng(30.267153, -97.743061);
      var austinSponsors = "Sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(austin,"Austin", austinSponsors);

      // Charleston
var charleston = new google.maps.LatLng(32.776475, -79.931051);
      var charlestonSponsors = "Charleston 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(charleston,"Charleston", charlestonSponsors);

      // Charlotte
var charlotte = new google.maps.LatLng(35.227087, -80.843127);
      var charlotteSponsors = "Charlotte 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(charlotte,"Charlotte", charlotteSponsors);

      // Cincinnati
var cincinnati = new google.maps.LatLng(39.103118, -84.51202);
      var cincinnatiSponsors = "Cincinnati 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(cincinnati,"Cincinnati", cincinnatiSponsors);

      // Columbia
var columbia = new google.maps.LatLng(34.000710, -81.034814);
      var columbiaSponsors = "Columbia 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(columbia,"Columbia", columbiaSponsors);

      // Dallas
var dallas = new google.maps.LatLng(32.776664, -96.796988);
      var dallasSponsors = "Dallas 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(dallas,"Dallas", dallasSponsors);

      // Detroit
var detroit = new google.maps.LatLng(42.331427, -83.045754);
      var detroitSponsors = "Detroit 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(detroit,"Detroit", detroitSponsors);

      // Durham
var durham = new google.maps.LatLng(35.994033, -78.898619);
      var durhamSponsors = "Durham 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(durham,"Durham", durhamSponsors);

      // Greenville
var greenville = new google.maps.LatLng(34.852618, -82.39401);
      var greenvilleSponsors = "Greenville 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(greenville,"Greenville", greenvilleSponsors);

      // Houston
      var houston = new google.maps.LatLng(29.760427, -95.369803);
      var houstonSponsors = "Houston sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(houston,"Houston", houstonSponsors);

      // Indianapolis
      var indianapolis = new google.maps.LatLng(39.768403, -86.158068);
      var indianapolisSponsors = "Indianapolis sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(indianapolis,"Indianapolis", indianapolisSponsors);

      // Las Vegas
      var lasVegas = new google.maps.LatLng(36.169941, -115.13983);
      var lasVegasSponsors = "Las Vegas sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(lasVegas,"Las Vegas", lasVegasSponsors);

      // Minneapolis
      var minneapolis = new google.maps.LatLng(44.977753, -93.265011);
      var minneapolisSponsors = "Minneapolis sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(minneapolis,"Minneapolis", minneapolisSponsors);

      // Nashville
      var nashville = new google.maps.LatLng(36.162664, -86.781602);
      var nashvilleSponsors = "Nashville sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(nashville,"Nashville", nashvilleSponsors);

      // Raleigh
      var raleigh = new google.maps.LatLng(35.779590, -78.638179);
      var raleighSponsors = "Raleigh sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(raleigh,"Raleigh", raleighSponsors);

      // Salt Lake City
      var saltLakeCity = new google.maps.LatLng(40.760779, -111.891047);
      var saltLakeCitySponsors = "Salt Lake City sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(saltLakeCity,"Salt Lake City", saltLakeCitySponsors);

      // San Antonio
      var sanAntonio = new google.maps.LatLng(29.424122, -98.493628);
      var sanAntonioSponsors = "San Antonio sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(sanAntonio,"San Antonio", sanAntonioSponsors);

      // Washington DC
      var washingtonDc = new google.maps.LatLng(38.907192, -77.036871);
      var washingtonDcSponsors = "Washington, DC sponsor 1" + "<br>" + "Sponsor 2" + "<br>" + "Sponsor 3";
      fnPlaceMarkers(washingtonDc,"Washington, DC", washingtonDcSponsors);


      function fnPlaceMarkers(myLocation,myCityName,citySponsors) {

var marker = new google.maps.Marker({
  position : myLocation,
          icon: 'images/map/marker.png'
});

// Renders the marker on the specified map
marker.setMap(map);

// create an InfoWindow - for mouseover
var infoWnd = new google.maps.InfoWindow();

// create an InfoWindow -  for mouseclick
var infoWnd2 = new google.maps.InfoWindow();

// -----------------------
// ON MOUSEOVER
// -----------------------

// add content to your InfoWindow
infoWnd.setContent('<div class="location">' + myCityName + '<span class="sponsors"><br/>' + citySponsors + '</span></div>');

// add listener on InfoWindow for mouseover event
google.maps.event.addListener(marker, 'mouseover', function() {

  // Close active window if exists - [one might expect this to be default behaviour no?]
  if(activeInfoWindow != null) activeInfoWindow.close();

  // Close info Window on mouseclick if already opened
  infoWnd2.close();

  // Open new InfoWindow for mouseover event
  infoWnd.open(map, marker);

  // Store new open InfoWindow in global variable
  activeInfoWindow = infoWnd;
});

// on mouseout (moved mouse off marker) make infoWindow disappear
google.maps.event.addListener(marker, 'mouseout', function() {
  infoWnd.close();
});

// --------------------------------
// ON MARKER CLICK - (Mouse click)
// --------------------------------

// add content to InfoWindow for click event
infoWnd2.setContent('<div class="location">' + myCityName + '<span class="sponsors"><br/>' + citySponsors + '</span></div>');

// add listener on InfoWindow for click event
google.maps.event.addListener(marker, 'click', function() {

  //Close active window if exists - [one might expect this to be default behaviour no?]
  if(activeInfoWindow != null) activeInfoWindow.close();

  // Open InfoWindow - on click
  infoWnd2.open(map, marker);

  // Close "mouseover" infoWindow
  infoWnd.close();

  // Store new open InfoWindow in global variable
  activeInfoWindow = infoWnd2;
});

}
}
