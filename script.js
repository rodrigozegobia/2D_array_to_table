let arr = [["foo", "bar"], ["foo"], [], ["foo", , , , "bar"]];

/*function removeEmptySubArrays(arr) {
    return arr.filter(subArr => subArr.some(el => el !== ''));
}*/

function removeEmptySubArrays(arr) {
  while (
    arr.length > 0 &&
    arr[0].every((el) => el === "" || el === undefined || el.length === 0)
  ) {
    arr.shift();
  }
  if (arr.length === 0) {
    return [];
  }
  return arr.filter((subArr) =>
    subArr.some((el) => el !== "" && el !== undefined && el.length !== 0)
  );
}

function findLongestSubArrayLength(arr) {
  let longestLength = 0;
  arr.forEach((subArr) => {
    if (subArr.length > longestLength) {
      longestLength = subArr.length;
    }
  });
  return longestLength;
}

function createTable(numCols, data) {
    // Get the table element by ID
    var table = document.getElementById("table");
  
    // Create thead element
    var thead = document.createElement("thead");
  
    // Create tr element
    var row = document.createElement("tr");
  
    // Create th elements and add them to the tr element
    for (var i = 1; i <= numCols; i++) {
      var col = document.createElement("th");
      col.innerHTML = i;
      row.appendChild(col);
    }
  
    // Add the row to the thead
    thead.appendChild(row);
  
    // Add thead to the table
    table.appendChild(thead);
  
    // Create rows based on the data array
    var previousRowSpan = 1;
    for (var i = 0; i < data.length; i++) {
      // Create a new row
      var row = document.createElement("tr");
      // Create cells for each sub-array
      var colspanCount = 0;
      for (var j = 0; j < data[i].length; j++) {
        if(data[i][j] !== undefined){
          var cell = document.createElement("td");
          cell.innerHTML = data[i][j];
          row.appendChild(cell);
          colspanCount +=1;
        }
        else{
          colspanCount +=1;
        }
      }
      // Add colspan to the last non-undefined <td> element
      var lastNonUndefinedTd = row.querySelectorAll("td:last-child")[0];
      lastNonUndefinedTd.setAttribute("colspan", numCols - colspanCount + 1);
      if (data[i].length === 0) {
        row.setAttribute("rowspan", previousRowSpan);
        previousRowSpan = 1;
      } else {
        previousRowSpan++;
      }
      // Add the row to the table
      table.appendChild(row);
    }
  }

createTable(
  findLongestSubArrayLength(removeEmptySubArrays(arr)),
  removeEmptySubArrays(arr)
);
