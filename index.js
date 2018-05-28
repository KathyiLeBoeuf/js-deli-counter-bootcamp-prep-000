
// 1======================================
function takeANumber(array, name) {
  array.push(name);
  let place = (array.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${place} in line.`
}

// 2======================================
function nowServing(array) {
  var removedItem = array.splice(0, 1);
  if (removedItem.length > 0){
    return `Currently serving ${removedItem}.`
  } else{
    return "There is nobody waiting to be served!"
  }
}
// 3====================================== partly worked

function currentLine(katzDeliLine) {
   let n = 0; 
  
  if (katzDeliLine.length > 0) {
    for(let i = 0; i < katzDeliLine.length; i++)
   n++;
  return `The line is currently: ${n++}. ${katzDeliLine[i]},`
  } else {
  return "The line is currently empty."
}
}


// 3.2 ========================
/*

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    =====+++++++++++++++++++++++++++
//for(let n = 1; n < katzDeliLine.length; n++)
function currentLine(katzDeliLine) {
    let n = 0;
    for(let i = 0; i < katzDeliLine.length; i++) {
  if (katzDeliLine.length > 0) {
    n++;
    return `The line is currently: ${n}. ${katzDeliLine.forEach[i]},`
    } else {
      return "The line is currently empty."
}
  }
}
  */
  
  /*
  
  if(katzDeliLine.forEach(function(element, i)) {
}
}
//let current = katzDeliLine.forEach();

/*
let count = 0;

myArray.forEach(function(element, i) {
  count++;
});

console.log("forEach processed: ", count, " elements.");

// forEach processed:  4  elements.
*/
