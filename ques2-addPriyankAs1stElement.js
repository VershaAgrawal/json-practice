// Q2 - in m2 priyank should be the first name in stars list

for(let i=0; i< json.theaters.length;i++)
{
    for(let j=0;j< json.theaters[i].movies.length;j++)
    {
        if(json.theaters[i].movies[j].mid==2)
        {
            var flag=0;
            if(!json.theaters[i].movies[j].stars)
            {
                json.theaters[i].movies[j].stars=[];
                
            }    
            else{
                
                for(let k=0;k<json.theaters[i].movies[j].stars.length;k++)
                {
                    if(json.theaters[i].movies[j].stars[k]=="priyank")
                    {
                        json.theaters[i].movies[j].stars[k]=json.theaters[i].movies[j].stars[0];
                        json.theaters[i].movies[j].stars[0]="priyank";
                        flag=1;
                    }
                }
            }
            if(flag==0)
                json.theaters[i].movies[j].stars.unshift("priyank");  
        }
    }
}
console.log(JSON.stringify(json));