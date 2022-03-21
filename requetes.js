function initMap() {

// api url
const api_url = 
      "http://lakartxela.iutbayonne.univ-pau.fr/~nvgouvet/PHP/ProjetWebService/WebServices_API/Api/Api_TeamUp/activite.php";
  



  const bayonne = { lat: 43.490002, lng: -1.480000 };
  const biarritz = { lat: 43.4831519, lng:  -1.558626 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: bayonne,
  });

  const marker = new google.maps.Marker({
    position: bayonne,
    map: map,
  });

  const markerA = new google.maps.Marker({
    position: biarritz,
    map: map,
  });

  




 

// Calling that async function
getapi(api_url);

}
