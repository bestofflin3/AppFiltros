// This is a JavaScript file

// document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("click",abreCamera,'#btnAbreCamera');
document.addEventListener("change",opacidade,'#opacidade');
document.addEventListener("change",saturacao,'#saturacao');
document.addEventListener("change",gray,'#gray');
document.addEventListener("change",blur,'#blur');
document.addEventListener("change",inverter,'#inverter');

var defOpacidade = "0";
var defSaturacao = "100";
var defGray = "0";
var defBlur = "0";
var defInverter = "0";

function abreCamera(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
  var image = document.getElementById('imagem');
  image.src = imageURI;
  image.style.display = "block";
}

function onFail(message) {
  alert('Failed because: ' + message);
}

function opacidade(){
  var nr = document.getElementById('opacidade').value;
  document.getElementById('nr_opacidade').innerHTML = nr;
  defOpacidade = nr;
  defineFiltros();
}

function saturacao(){
  var nr = document.getElementById('saturacao').value;
  document.getElementById('nr_saturacao').innerHTML = nr;
  defSaturacao = nr;
  defineFiltros();
}

function gray(){
  var nr = document.getElementById('gray').value;
  document.getElementById('nr_gray').innerHTML = nr;
  defGray = nr;
  defineFiltros();
}

function blur(){
  var nr = document.getElementById('blur').value;
  document.getElementById('nr_blur').innerHTML = nr;
  defBlur = nr;
  defineFiltros();
}

/*function inverter(){
  var nr = document.getElementById('inverter').value;
  document.getElementById('nr_inverter').innerHTML = nr;
  invert = nr;
  defineFiltros();
}*/

function defineFiltros(){
  var filtros = " grayscale("+defGray+"%) blur("+defBlur+"px) ";
  filtros += " saturate("+defSaturacao+"%) opacity("+defOpacidade+"%) ";
  
  document.getElementById('imagem').style.filter = filtros;
  //document.getElementById('imagem').style.filter = "invert("+invert+"%)";
}