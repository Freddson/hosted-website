setInterval(function() {
const d = new Date();
let minutes = (d.getMinutes() < 10? '0' : '') + d.getMinutes();
let hours = (d.getHours() < 10? '0' : '') + d.getHours();
const clock = hours + ":" + minutes;
document.getElementById("clock").innerHTML = clock;
}, 10);