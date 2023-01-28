/*
var table = document.createElement("table");
*/

var arr = prompt("Enter an array, separated by commas. Eg. Roger, John").split(",");
var table = document.getElementById("table");
var valid = arr.filter(val => typeof val === 'string' || !val);

for (var i = 0; i < valid.length; i++) {
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = valid[i];
}