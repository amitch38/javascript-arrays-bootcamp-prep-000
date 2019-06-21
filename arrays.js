var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElement(array, element) {
  var nuevoArray = array.unshift(element)
  return nuevoArray
}
