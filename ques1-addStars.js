// Q1 - m3 add stars as versha

const njson = require('./input_json');
const json = njson.json 
//console.log(njson.json)
for(let i=0; i< json.theaters.length;i++)
{
    for(let j=0;j< json.theaters[i].movies.length;j++)
    {
        if(json.theaters[i].movies[j].mid==3)
        {
            if(!json.theaters[i].movies[j].stars)
                json.theaters[i].movies[j].stars=[];
                
            json.theaters[i].movies[j].stars.push("versha");
        }
    }
}
console.log(JSON.stringify(json));