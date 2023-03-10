// Q5 - news arrived m3 release is dealyed by 11 days, update the value

const njson = require('./input_json');
const json = njson.json 
//console.log(njson.json)
for(let i=0; i< json.theaters.length;i++)
{
    for(let j=0;j< json.theaters[i].movies.length;j++)
    {
        if(json.theaters[i].movies[j].mid==3)
        {
            let d=new Date(json.theaters[i].movies[j].releaseDate);
            d.setDate(d.getDate() + 11);
            let newDate=d.toISOString().substring(0,10);
            json.theaters[i].movies[j].releaseDate=newDate;
        }
    }
}
console.log(JSON.stringify(json));
