const request=require('request');
const geocode=(address,callback)=>{
//    const url=`urlforgeocoding ${encodeURIComponent(address)}`;
    // request({url:url,json:true},(error,data)=>{
    if(address){
        callback(address);
    }
 
    
    }

    module.exports=geocode;