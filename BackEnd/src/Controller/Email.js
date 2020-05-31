const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    segure:true,  // true for 465, false for other ports
    auth: {
            user: "mojalfilmes@gmail.com",
            pass: "mojalfilmes123"
            
        },
    tls: { rejectUnauthorized: false }
})
module.exports={transport};
        

    






