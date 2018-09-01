var recipes = new Object({"scrambled eggs": "add two eggs, cheddar cheese and ham", "key2": "The second value for key 2"});

function updateObjectWithKeyAndValue(object, key, value){
 
 return Object.assign({}, obj, { [key]: value });
}

updateObjectWithKeyAndValue(recipes, 'sandwiches', 'add virgina honey ham, swiss cheese and mayonaise put on two slices of bread and cut in half.')