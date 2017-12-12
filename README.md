# AWS S3 Upload Notification Via SMS (Twilio)
Another Serverless project... This time it's a SMS notification (using [Twilio](https://www.twilio.com/)) triggered every time an item is uploaded inside an AWS S3 bucket.

## How To Use
* Download this project
* Run `npm install` to download the required modules
* Install Serverless (https://serverless.com/)
* Install AWS CLI (https://aws.amazon.com/cli/) and configure it with your account
* Create a Twilio account at https://www.twilio.com/
* In the `serverless.yml` file
    * Set the **region** and **profile** according to your AWS CLI configuration
    * Change the name of the bucket in **custom -> bucket**
    * Add your Twilio Account SID (ACCOUNT_SID)
    * Add your Twilio Account Token (AUTH_TOKEN)
    * Add your Twilio Phone Number (TWILIO_PHONE_NO)
    * Add the desired phone number to receive the SMS (PHONE_NO_TO_RECEIVE_SMS)
* Test this function by adding any file in the bucket

## How To Remove The Project
* In your terminal command, go to the directory of this project and run `serverless remove`
