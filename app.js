const bodyParser = require("body-parser");
const storageService = require("./services/StorageService");
const app = require("express")();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// List Buckets
app.get("/buckets", (request, response) => response.send(storageService.listBuckets()));

// Create a new bucket
app.post("/buckets", (request, response) => response.send(storageService.createBucket(request.body)));

app.listen(3000, () => console.log("Server is running..."));