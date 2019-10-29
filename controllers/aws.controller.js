var stream = require('stream');
var AWS = require('aws-sdk');
var fs = require('fs');

const spawn = require("child_process").spawn;
var config = require('./../config/configuration_keys')
const exec = require('child_process').exec;
var request = require('request');

//AWS.config.loadFromPath('./config/configuration_keys.json');
var myconfig = AWS.config.update({
    accessKeyId: config.awsAccessKeyId, secretAccessKey: config.awsSecretAccessKey, region: config.region
});
var s3Client = new AWS.S3();

var uploadParams = {
    Bucket: config.usersbucket,
    Key: '', // pass key
    Body: null, // pass file body
};

var s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;

const docClient = new AWS.DynamoDB.DocumentClient({
    convertEmptyValues: true
});
//
// function generateINPFile(cognito_user_id, cb) {
//
// }
//
// function generateSimulation(cognito_user_id, cb) {
//     request.post({ url: config.ComputeInstanceEndpoint + "generateSimulation", json: { user_id: cognito_user_id } }, function (err, httpResponse, body) {
//         if (err) {
//             console.log("ERROR in Generating INP File");
//             cb(err, '');
//         }
//         else {
//             console.log("Ressponse is ", httpResponse.body)
//             cb('', httpResponse.body);
//         }
//     })
// }


exports.doUpload = (req, res) => {
    console.log("FILE UPLOAD CALLED");

    const s3Client = s3.s3Client;
    const params = s3.uploadParams;
    var ts = new Date();
    var file_extension = req.file.originalname.split(".");
    file_extension = file_extension[file_extension.length - 1];

    var file_name = Date.now();

    // Setting Attributes for file upload on S3
    params.Key = req.user_cognito_id + "/profile/image/" + file_name + "." + file_extension;

    params.Body = req.file.buffer;
    if (req.body.file_error) {
        console.log(req.body.file_error);
        res.send({
            message: "failure",
            status: "Invalid File type"
        });
    }
    else {
        // Uploading Selfie Image in S3 bucket
        s3Client.upload(params, (err, data) => {
            if (err) {
                console.log("ERROR");
                res.status(500).send({ message: 'failure' });
            }
            else{
                console.log("FILE UPLODED", data);
                var signedURLObject = {
                    Bucket: params.Bucket,
                    Key: data.Key
                }
                console.log(signedURLObject);
                // Generating Signed S3 Link URL
                s3Client.getSignedUrl('getObject', signedURLObject, function (err, url) {
                    if (err) {
                        console.log("-> ERROR IN Signing object", err);
                        res.send({ message: 'failure' });
                    } else {
                        // Calling Compute Instance API
                        console.log("Request made is , \n" , { image_url : url , user_cognito_id: req.user_cognito_id } );
                            request.post({ url: config.ComputeInstanceEndpoint + "computeImageData", json: { image_url : url , user_cognito_id: req.user_cognito_id } }, function (err, httpResponse, body) {
                                if (err) {
                                    console.log("ERROR in Generating INP File");
                                    res.send({ message: 'failure', error: err });
                                }
                                else {

                                    res.send(httpResponse.body)

                                }
                            })
                    }

                })
            }
        })
    }
}
