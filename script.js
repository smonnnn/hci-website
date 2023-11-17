const modal = document.getElementsByClassName("modal")[0];
const input = document.getElementsByClassName("input")[0];
var t;
var water = parseInt(document.getElementById("water-pie").style.getPropertyValue("--p")) * 40;
var protein = parseInt(document.getElementById("protein-pie").style.getPropertyValue("--p")) * 1.2;
var energy = parseInt(document.getElementById("energy-pie").style.getPropertyValue("--p"));

var target_water = 4000;
var target_protein = 120;
var target_energy = 2200;

function open_modal(target){
  modal.style.display = 'flex';
  t = target;
}

function close_modal(){
  modal.style.display = 'none';
  t.setValue(input);
}

function addWater(){
  water = water + 200;
  var e = document.getElementById("water-pie");
  e.style.setProperty("--p", water / (target_water / 100));
  var text = document.createElement("div");
  text.textContent = "Water";
  var variable = document.createElement("div");
  variable.textContent = Math.round(water / 100) / 10 + "L"

  e.innerHTML = "";
  e.appendChild(text);
  e.appendChild(variable);
}

function addProtein(){
  protein = protein + 10;
  var e = document.getElementById("protein-pie");
  e.style.setProperty("--p", protein / (target_protein / 100));
  var text = document.createElement("div");
  text.textContent = "Protein";
  var variable = document.createElement("div");
  variable.textContent = Math.round(protein) + "gr"

  e.innerHTML = "";
  e.appendChild(text);
  e.appendChild(variable);
}

function addEnergy(){
  energy = energy + 100;
  var e = document.getElementById("energy-pie");
  e.style.setProperty("--p", energy / (target_energy / 100));
  var text = document.createElement("div");
  text.textContent = "Energy";
  var variable = document.createElement("div");
  variable.textContent = Math.round(energy) + "kcal"

  e.innerHTML = "";
  e.appendChild(text);
  e.appendChild(variable);
}

function setTargetWater(target){
  target_water = target;
}

addWater();
addEnergy();
addProtein();