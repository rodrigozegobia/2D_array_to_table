let arr = [
    ['foo','bar'],
    ['foo'],
    [],
    ['foo',,,,'bar',1]
];

function filterSubArrays(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      const subArr = arr[i].filter(val => typeof val === 'string' || !val);
      filteredArr.push(subArr);
    }
    return filteredArr;
  }

function removeFalsyAtBeginning(array) { 
    for (let i = 0; i < array.length; i++) {
        while (!array[i][0]) {
            array[i][0].shift();
        }
    }
}

/*
function getLongestArray(arr){
    let longest = arr.reduce((a, b) => {
      return a.length > b.length ? a : b;
    });
    console.log(longest.length);
}
console.log(arr)*/
removeFalsyAtBeginning(arr)
console.log(arr)