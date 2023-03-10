// Q3 - add delhi as 2nd location in tid 1

const njson = require('./input_json');
const json = njson.json 
//console.log(njson.json)
const delhi="delhi"
for(let i=0; i< json.theaters.length;i++)
{
    let l=json.theaters[i].locations.length;
    if(json.theaters[i].tid==1 && l>1)
    {
        let delhiLoc=json.theaters[i].locations.indexOf(delhi);
        //console.log(delhiLoc);
        if(delhiLoc>-1)
        {
            json.theaters[i].locations[delhiLoc]=json.theaters[i].locations[1];
        }
        else
        {
            for(let j=json.theaters[i].locations.length;j>=1;j--)
            { 
                json.theaters[i].locations[j]=json.theaters[i].locations[j-1];
            }
        }
        json.theaters[i].locations[1]=delhi;
    }
    else if(json.theaters[i].locations[0]!=delhi)
        json.theaters[i].locations.push(delhi);
    
}
console.log(JSON.stringify(json));
