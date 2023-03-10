// Q4 - in theaters add new field noOfShows = locations count * movies count

const njson = require('./input_json');
const json = njson.json 
//console.log(njson.json)

for(let i=0; i< json.theaters.length;i++)
{
     json.theaters[i].noOfShows=json.theaters[i].locations.length*json.theaters[i].movies.length;
}
console.log(JSON.stringify(json));