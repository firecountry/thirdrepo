const request=require('request');

const forecast=(place,callback)=>
{
    if(place==='Boston')
    {
        setTimeout(()=>{
            callback("Boston,Massachusetts,United State",'Partaly coludy starting in the evening.It is currently 29.5 degree out. There is a 0% change of rain');

        },2000);
       
    }
    else if(place==='New York')
    {
        setTimeout(()=>{
            callback("New York,washington,United State",'Its sunny day.It is currently 29.5 degree out. There is a 0% change of rain');
        },2000);
    }
    else if(place==='Philadelphia')
    {
        setTimeout(()=>{
            callback("Philadelphia,Pennsylvania,United State",'Rain until evening.It is currently 52 degree out. There is a 0% change of rain');
        },2000);
    }

    
}

module.exports=forecast;