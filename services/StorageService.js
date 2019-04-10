const AWS = require("aws-sdk");
const apiVersion = '2006-03-01';
AWS.config.update({region: 'us-west-2'});
const s3 = new AWS.S3({apiVersion: apiVersion});

module.exports.listBuckets = () => {

    s3.listBuckets((err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Buckets);
        }
    });
}

module.exports.createBucket = (json) => {

    s3.createBucket(json, function(err, data) {
    logResults(err);
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
        }
    });
}

module.exports.deleteBucket = (json) => {

    s3.deleteBucket(json, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
        }
    });
}