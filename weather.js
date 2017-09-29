$(document).ready(function(){
    $('form').submit(function(){
        var key ='6df5d3b930be3b9facc205eec820a697';
        var city =$('input').val();
        $.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key, function(res){
            $('body').append("<h1>"+res.name+", "+res.sys.country+"</h1>");
            $('body').append("<p>Temperature: "+Math.round((res.main.temp - 273.15)*10)/10 + "&#176;C &nbsp;&nbsp;&nbsp;&nbsp;"+Math.round(((9/5)*(res.main.temp - 273.15) +32)*10)/10 + "&#176;F</p>");
            $('body').append("<p>Weather: " + res.weather[0].main+ "-" + res.weather[0].description +"</p>") 
            var sunrise= res.sys.sunrise;
            var sunset  = res.sys.sunset;
            var d = new Date(sunrise*1000);
            var d2 = new Date(sunset*1000);
            $('body').append("<p>Sunrise at "+d+"</p>");
            $('body').append("<p>Sunset at "+d2+"</p>");
        }, "json");
        return false;
    });
});