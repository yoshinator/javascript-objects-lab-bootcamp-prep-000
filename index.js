var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object;
  newObject[value] = key;
  return newObject;
}