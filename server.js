const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Akhadjon:MongoDb.6rtacha@cluster0.xn86n.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDb");
    else{
        console.log("MongoDb connection succeed");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 7008;
        server.listen(PORT, function() {
            console.log(`The server is running on port ${PORT} http://localhost:3000`);
        });
    }
    
});

