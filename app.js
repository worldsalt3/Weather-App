const API_KEY = '3b588a70808f0b4dfad48e1aa66012b3';
let lon = '';
let lat = '';


document.addEventListener('DOMContentLoaded',() => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          lat += position.coords.latitude;
          lon += position.coords.longitude;
          const req = new XMLHttpRequest();
          req.open("GET", `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`, true);
          req.send();
          req.onload = () => {
            const json = JSON.parse(req.responseText);
            const timestamp = json.current.dt;
            const theDate = new Date(timestamp * 1000);
            console.log(json);
            let current_html = '';
            current_html += `
            <h2>${json.timezone}</h2>
            <p>${theDate}</p>
            `
            document.getElementById('current').innerHTML = current_html;
            let {icon} = json.current.weather[0];
            // document.getElementById('current').innerHTML = `<img src=http://openweathermap.org/img/w/${icon}.png />`;
            // document.getElementById('minutely').innerHTML = JSON.stringify(json.weather);
            
          }
            
        });
    }
  });