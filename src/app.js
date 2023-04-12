const express= require("express");
const app= express();
const port= 8000;
const hbs= require("hbs");
const path= require("path");

// public static path

const staticpath= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");


app.set('view engine', 'hbs');
app.set("views",template_path);
app.use(express.static(staticpath));
hbs.registerPartials(partials_path);

// routing
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"Oops! Page not found"
    });
});
app.listen(port,()=>{
    console.log(`Listening to the ${port} number`);
});