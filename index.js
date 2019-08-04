// Code your solution in this file.


function lowerCaseDrivers(arr) {
  let newArr = arr.map(name => name.toLowerCase());
    return newArr;
}

//accept array, split names by space, assign names to a collection with firstName and lastName as keys as their values
function nameToAttributes(arr) {
  let newArr = arr.map(name => (name.split(" "){firstName: name[0], lastName[1]}));
}

function attributesToPhrase() {

}
