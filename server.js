console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const res = require("express/lib/response");
const http = require("http");

// 1 Kirish code
app.use(express.static("public")); // har qanday browserd kirib kelayotgan requestlar uchun public folder ochiq
app.use(express.json());  // kirib kelayot json formatidagi data ni object holatiga ogirib beradi
app.use(express.urlencoded({extended: true})) // form dan qabul qilingan datalarni express qabul qiladi serverga kiritadi

// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({ test: "succes" });
    
})

 app.get("/", function(req, res) {
    res.render("harid");
 }); 

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port ${PORT}`);
});
