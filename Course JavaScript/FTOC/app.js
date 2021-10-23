//การแปลงข้อมูล
function toCelsius(){
    let fahrenheit = prompt("fahrenheit : ")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("Celcius").innerHTML = "fahrenheit from : " + fahrenheit + "°F to Celcius : " + value.toFixed(2) + "°C" + "<br>";
}
function toFahrenheit(){
    let Celcius = prompt("Celcius : ")
    let value = (Celcius * 9) / 5 + 32
    document.getElementById("fahrenheit").innerHTML = "Celcius from : " + Celcius + "°C to fahrenheit : " + value.toFixed(2) + "°F" + "<br>";
}
toCelsius()
toFahrenheit()

//แปลงข้อมูลแบบใหม่
function toCelsius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C";
}
function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}
function toFahrenheit(Celsius)
{
    let value = (Celsius * 9) / 5 + 32
    return value.toFixed(2) + "°F";
}
alert(toCelsius(150))
alert(toFahrenheit(32))
display("Celcius", toCelsius(150))
display("fahrenheit", toFahrenheit(32))
