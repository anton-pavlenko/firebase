const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from: '',
        subject:'Thanks for joining',
        text:`Welcome to the app, ${name}.`
    })
}

// const sendEmailCancelation = (email,name) => {
//     sgMail.send({
//         to:email,
//         from:'kamkoyan@gmail.com',
//         subject:'Upps so Early',
//         text:`${name}. Why you are leave?, `
//     })
// }


module.exports = {
    sendWelcomeEmail,
    // sendEmailCancelation
}