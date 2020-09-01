const API_KEY = '3b588a70808f0b4dfad48e1aa66012b3';
let lon = '';
let lat = '';


document.addEventListener('DOMContentLoaded',function(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
          lat += position.coords.latitude;
          lon += position.coords.longitude;
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(reaponse => reaponse.json())
            .then(data => {
                // document.getElementById('data1').innerHTML = JSON.stringify(data);
            })
        });
      }
  });