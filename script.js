let arr = [
["foo", "bar"],
["foo"],
[''],
["foo", '', '', '', "bar"]];

//traverse array and sub-arrays and convert falsy values and non-string to empty array
function convertFalsyToEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!(typeof arr[i][j] === "string")) {
        arr[i][j] = "";
      }
    }
  }
  return arr;
}

//maps the array and removes empty elements if they are first in the sub-array and if they aren't the only element of the sub-array.
function removeFirstEmptyElement(arr) {
  return arr.map((subArr) => {
    if (subArr.length === 1) {
      return subArr;
    } else if (subArr[0] === "") {
      return subArr.slice(1);
    } else {
      return subArr;
    }
  });
}

function findLongestSubArray(arr) {
  let longestLength = 0;
  arr.forEach((subArr) => {
    if (subArr.length > longestLength) {
      longestLength = subArr.length;
    }
  });
  return longestLength;
}

let longest = findLongestSubArray(arr)+1;

// Get the table element by ID
var table = document.getElementById("table");

// Create thead element
var thead = document.createElement("thead");

// Create tr element
var row = document.createElement("tr");

// Create th elements and add them to the tr element
for (let i = 0; i <= longest-1; i++) {
  var col = document.createElement("th");
  col.innerHTML = i;
  row.appendChild(col);
}

// Add the row to the thead
thead.appendChild(row);

// Add thead to the table
table.appendChild(thead);

function createTable(arr) {
  for (var i = 0; i < arr.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < arr[i].length; j++) {
      var cell = document.createElement("td");
      cell.innerHTML = arr[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
}

//Fills each row with empty elements until it fills the table length
function fillTable(table, longestRowLength) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    while (cells.length < longestRowLength) {
      rows[i].insertCell(-1).innerHTML = "";
    }
  }
  return table;
}

//traverses table reversely, counts empty <td> elements and adds colspan to first !empty <td> it finds, with value of empty <td>'s amount
function traverseTable(table) {
  const rows = table.rows;
  for (let i = rows.length - 1; i >= 0; i--) {
    let emptyCell = 0;
    const cells = rows[i].cells;
    for (let j = cells.length - 1; j >= 0; j--) {
      if (cells[j].innerHTML === "") {
        emptyCell++;
      } else if (emptyCell > 1) {
        cells[j].setAttribute("colspan", emptyCell + 1);
        emptyCell = 0;
      } else {
        //nothing to do
      }
    }
  }
  return table;
}

//traverses table reversely looking for empty rows, after finding it adds rowspan to all <td> of next !empty row. Uses value of empty rows
function traverseTableRowsReverse(table) {
  let emptyRows = 0;
  for (let i = table.rows.length - 1; i >= 0; i--) {
    const cells = table.rows[i].cells;
    let row = table.rows[i];
    if (!row.textContent.trim()) {
      emptyRows++;
    } else if (emptyRows > 0) {
      // a partir daqui começa a ver as colunas
      //const cells = table.rows[i].cells;
      for (let j = cells.length - 1; j >= 0; j--) {
        if (!(cells[j].innerHTML === "")) {
          cells[j].setAttribute("rowspan", emptyRows + 1);
        } else {
          //nothing to do
        }
      }
      emptyRows = 0;
    }
  }
  return table;
}

removeEmptyElements(traverseTableRowsReverse(traverseTable(fillTable(createTable(removeFirstEmptyElement(convertFalsyToEmpty(arr))),longest))));

function removeEmptyElements(table) {
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        let cell = row.cells[j];
        if (!cell.textContent.trim()) {
          row.deleteCell(j);
          j--;
        }
      }
    }
    return table;
  }

  function removeEmptyRows(table) {
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      if (!row.innerHTML.trim()) {
        table.deleteRow(i);
        i--;
      }
    }
    return table;
  }