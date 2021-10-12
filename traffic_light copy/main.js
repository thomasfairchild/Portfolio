// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;
// document.getElementById('stopLight').onclick = illuminateRed;
// document.getElementById('slowLight').onclick = illuminateYellow;
// document.getElementById('goLight').onclick = illuminateGreen;

$('#stopButton').click(function () {
    $('#stopLight').css('backgroundColor', 'red');
});
$('#slowButton').click(function () {
    $('#slowLight').css('backgroundColor', 'yellow');
});
$('#goButton').click(function () {
    $('#goLight').css('backgroundColor', 'green');
});

function clearLights(){
    $('#stopLight').css('backgroundColor', 'black')
    $('#slowLight').css('backgroundColor', 'black')
    $('#goLight').css('backgroundColor', 'black')
}
// First Way
// function illuminateRed() {
//     clearLights();

// const $clearLights = () => {

// }
// //   the HTML doc      the stop/red Light   style = CSS        color glow
//     document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//     clearLights();
    
//     document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// function illuminateGreen() {
//     clearLights();

//     document.getElementById('goLight').style.backgroundColor = "green";
// }
// function clearLights() 

// {

// document.getElementById('stopLight').style.backgroundColor = "black";
// document.getElementById('slowLight').style.backgroundColor = "black";
// document.getElementById('goLight').style.backgroundColor = "black";
// }


// Second Way by Jeremy

// document.getElementById('stopButton').addEventListener('click', () => {
//     clearLights();
//     document.getElementById('stopLight').style.backgroundColor = 'red';
// });
// document.getElementById('slowButton').addEventListener('click', () => {
//     clearLights();
//     document.getElementById('slowLight').style.backgroundColor = 'yellow';
// });
// document.getElementById('goButton').addEventListener('click', () => {
//     clearLights();
//     document.getElementById('goLight').style.backgroundColor = 'green';
// });
// function clearLights() {
//     document.getElementById('stopLight').style.backgroundColor = 'black';
//     document.getElementById('slowLight').style.backgroundColor = 'black';
//     document.getElementById('goLight').style.backgroundColor = 'black';
// }