const fs = require('fs')


const data = fs.readFileSync('./airports.json')

const dataJson = JSON.parse(data)
var results = [];
var searchField = "name";
var searchVal = "my Name";
for (var i=0 ; i < obj.list.length ; i++)
{
    if (obj.list[i][searchField] == searchVal) {
        results.push(obj.list[i]);
    }
}

console.log(dataJson)