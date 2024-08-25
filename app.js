console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const res = require("express/lib/response");
const fs = require("fs");

//MongoDb chaqirish
const db = require("./server").db();

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
        
//     }else {
//         user = JSON.parse(data);
//     }
// });
// 1 Kirish code
app.use(express.static("public")); // har qanday browserd kirib kelayotgan requestlar uchun public folder ochiq
app.use(express.json());  // kirib kelayot json formatidagi data ni object holatiga ogirib beradi
app.use(express.urlencoded({extended: true})) // form dan qabul qilingan datalarni express qabul qiladi serverga kiritadi, (nested objectlarni)

// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing
app.post("/create-item", (req, res) => { // head body url
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) =>{
        res.json(data.ops[0]);
        //traditional request
        // if(err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // } else {
        //     res.end("succesfully added");
        // } 
    });
    // res.json({ test: "succes" });
    
})

 app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", { items: data});
        }
        
    })
    
 }); 

//   app.get('/author', (req, res) => {
//     res.render("author", { user: user });
//   })

module.exports = app;