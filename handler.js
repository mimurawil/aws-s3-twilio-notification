'use strict';

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;
const phoneNoToReceiveSMS = process.env.PHONE_NO_TO_RECEIVE_SMS;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports.newFileInBucket = (event) => {
    let files = [];

    event.Records.forEach((record) => {
        files.push(record.s3.object.key);
//        const filesize = record.s3.object.size;
    });

    client.messages.create({
        body: "Someone added file(s) to your AWS S3 Bucket!!!\n" + files.join(', ') + ".",
        to: phoneNoToReceiveSMS,
        from: twilioPhoneNo
    }).then((message) => console.log(message.sid));
};
