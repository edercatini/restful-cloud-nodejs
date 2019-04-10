const bodyParser = require("body-parser");
const storageService = require("./services/StorageService");
const app = require("express")();
const HTTP_CREATED = 201;
const HTTP_NO_CONTENT = 204;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// List Buckets
app.get("/buckets", (request, response) => response.send(storageService.listBuckets()));

// Create a new bucket
app.post("/bucket", (request, response) => {
    storageService.createBucket(request.body);
    response.status(HTTP_CREATED).send();
});

// Delete an existing bucket
app.delete("/bucket", (request, response) => {
    storageService.deleteBucket(request.body);
    response.status(HTTP_NO_CONTENT).send();
});

app.listen(3000, () => console.log("Server is running..."));