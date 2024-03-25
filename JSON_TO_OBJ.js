//1. String to JSON representation
const str = '{"name" : "Roshan" , "age" : "30"}';
const obj = JSON.parse(str);
console.log(obj);

//2. String to JSON representation
const objToJSON = {
  name: "Roshan",
  age: "30",
};
const json = JSON.stringify(objToJSON);
console.log(json);
