const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    segure:true,  // true for 465, false for other ports
    auth: {
            user: "bdflix2020@gmail.com",
            pass: "bd@@2020"
            
        },
    tls: { rejectUnauthorized: false }
})
module.exports={transport};
        

    






