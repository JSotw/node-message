const dotenv = require('dotenv');
dotenv.config();
const accountSid = dotenv.config().parsed.ACCOUNT_SID;
const authToken = dotenv.config().parsed.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function createMessage(){
  client.messages
    .create({
        body: '¡Cuidado! Te saliste del rango de transporte.',
        from: dotenv.config().parsed.TWILIO_NUMBER,
        to: dotenv.config().parsed.MY_PHONE_NUMBER
    })
    .then(message => console.log(message.sid))
}

exports.createMessage = () => createMessage();