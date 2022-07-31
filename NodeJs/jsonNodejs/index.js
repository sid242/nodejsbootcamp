const bioData = {
    name : "Siddharth",
    age : 21,
    learning : "nodejs"
};

console.log(bioData.name);
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(jsonData.name);

const objData = JSON.parse(jsonData);
console.log(objData);