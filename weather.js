$(document).ready(function(){
    $('form').submit(function(){
        var key ='6df5d3b930be3b9facc205eec820a697';
        var city =$('input').val();
        $.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key, function(res){
            $('body').append("<h1>"+res.name+"</h1>");
            $('body').append("<p>Temperature: "+Math.round((res.main.temp - 273.15)*10)/10 + "&#176;C &nbsp;&nbsp;&nbsp;&nbsp;"+Math.round(((9/5)*(res.main.temp - 273.15) +32)*10)/10 + "&#176;F</p>");
            $('body').append("<p>Weather: " + res.weather[0].main+ "-" + res.weather[0].description +"</p>")   
        }, "json");
        return false;
    });
});