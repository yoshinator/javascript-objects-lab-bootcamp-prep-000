var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object;
  console.log(object);
  console.log(newObject);
  newObject[value] = key;
  console.log(object);
  console.log(newObject);
  return object;
}

updateObjectWithKeyAndValue(recipes, 'sandwiches', 'add virgina honey ham, swiss cheese and mayonaise put on two slices of bread and cut in half.')