console.log('Web serverni boshlash');
const express = require("express");
const app = express();
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
app.get("/hello", function(req, res) {
    res.end(`<h1 style='background: red'>HELLO WORLD! by Kevin</h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port ${PORT}`);
});
