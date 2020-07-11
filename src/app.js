const path=require("path");
const express=require('express');
const geocode=require('./utils/geocode');
const forcast=require('./utils/forecast');
const hbs=require('hbs');
const forecast = require("../../weather-app/utils/forecast");


const app=express();

const port=process.env.PORT|| 3000;

//Define paths for express config
const pathForDir=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'templates/views');
const partialPath=path.join(__dirname,'templates/partials');


//setup handle bar engine and views location
app.set('view engine','hbs');

app.set('views',viewsPath);
hbs.registerPartials(partialPath);

//setup static directory to serve
app.use(express.static(pathForDir));


app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather",
        name:"sandesh"
    });
}); 
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Page",
        name:"Sandesh"
    });
});
 
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help message',
        name:"Sandesh",
        message:'this is serious message I am writing this for you babes'
        
    });
});

app.get('/weather',(req,res)=>{
   
    const address=req.query.address;
    if(!address){
        return res.send({error:"need to provide address"})
    }
    geocode(address,(place)=>{
        forcast(place,(place,value)=>{
            res.send({
                forecast:value,
                location:place,
                address:req.query.address
            })
        })
        
    })
  
});
app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:'You must provide search tearm'
        })
    }
    res.send({
        products:[]
    })
})


app.get('/help/*',(req,res)=>{
    res.render("page404",{title:"Error",error:'Help article not found',name:"Sandesh"});

});

app.get('*',(req,res)=>{
    res.render('page404',{title:"Error",error:'page not found',name:"Sandesh"})
});

app.listen(port,()=>{
console.log("Connected successfully",port);

});

