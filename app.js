// add bold function
function bold() {
document.getElementById('writingArea').style.fontWeight = 'bold';
}
// add btnBold Event Listener
document.getElementById('btnBold').addEventListener('click', bold);


// add italic function
function italic () {
document.getElementById('writingArea').style.fontStyle = 'italic';
}
// add btnItalic Event Listener
document.getElementById('btnItalic').addEventListener('click', italic);


// add left function
function left () {
    document.getElementById('writingArea').style.textAlign = 'left';
}
// add btnLeft Event Listener
document.getElementById('btnLeft').addEventListener('click', left);


// add center function
function center () {
    document.getElementById('writingArea').style.textAlign = 'center';
}
// add btnCenter Event Listener
document.getElementById('btnCenter').addEventListener('click', center);


// add right function
function right () {
    document.getElementById('writingArea').style.textAlign = 'right';
}
// add btnRight Event Listener
document.getElementById('btnRight').addEventListener('click', right);


// add uppercase function
function uppercase () {
    document.getElementById('writingArea').style.textTransform = 'uppercase';
}
// add btnUpperCase Event Listener
document.getElementById('btnUpperCase').addEventListener('click', uppercase);


// add lowercase function
function lowercase () {
    document.getElementById('writingArea').style.textTransform = 'lowercase';
}
// add btnLowerCase Event Listener
document.getElementById('btnLowerCase').addEventListener('click', lowercase);


// add capitalize function
function capitalize () {
    document.getElementById('writingArea').style.textTransform = 'capitalize';
}
// add btnCapitalize Event Listener
document.getElementById('btnCapitalize').addEventListener('click', capitalize);


// add reset text function
function reset () {  
//set textarea value to empty
document.getElementById('writingArea').value = '';
//set text color to emerald
document.getElementById('writingArea').style.color = 'text-emerald-200';
//set font to normal 
document.getElementById('writingArea').style.fontWeight = 'normal';
//set italic to normal
document.getElementById('writingArea').style.fontStyle = 'normal';
//set text align to left
document.getElementById('writingArea').style.textAlign = 'left';
//set text transform to none
document.getElementById('writingArea').style.textTransform = 'none';
}
// add btnReset Event Listener
document.getElementById('btnReset').addEventListener('click', reset);
