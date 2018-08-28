export default function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: { lat: 53.934261, lng: 27.580975 },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });

    var contentString1 = '<p style="color:black;">ул. Ленина, д. 1а, 421</p>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    var marker1 = new google.maps.Marker({
      position: { lat: 53.934261, lng: 27.580975 },
      map: map,
      title: "ул. Максима Богдановича, 112-3Н, 2-й этаж"
    });
    marker1.addListener("click", function () {
        infowindow1.open(map, marker1);
    });
}

