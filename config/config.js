module.exports = {

    SEED: 'este-es-un-seed-dificil',
    
    email: "jobandcare@gmail.com",
    password: "capo2786",
    transporter: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
      //  requireTLS: true,
        auth: {
            user: 'jobandcare@gmail.com',
            pass: 'capo2786'  
        },
       tls: {
            rejectUnauthorized: true
        } 
    }   
}
