/*
var table = document.createElement("table");
*/

var arr = prompt("Enter an array, separated by commas. Eg. Roger, John").split(",");
var table = document.getElementById("table");

for (var i = 0; i < arr.length; i++) {
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = arr[i];
}