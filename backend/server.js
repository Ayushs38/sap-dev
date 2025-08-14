import app from "./src/app.js"
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
    
});

// app.set("view engine", "ejs")

// app.get("/",(req,res)=>{
//     res.render("index")
//     console.log("done");
    
// })





// console.log("Server is running yes");
