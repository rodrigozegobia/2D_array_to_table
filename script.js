/*
var table = document.createElement("table");
shift() removes first element of array
*/

var arr = prompt("Enter an array, separated by commas. Eg. Roger, John").split(",");
var table = document.getElementById("table");
var valid = arr.filter(val => typeof val === 'string' || !val);

function removeFalseyAtBeginning(arr){
    while (!arr[0]) {
        arr.shift()
    }
    console.log(arr)
}

function buildTable(){
    for (var i = 0; i < valid.length; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = valid[i];
    }
}

removeFalseyAtBeginning(valid)
buildTable()