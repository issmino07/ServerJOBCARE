module.exports = {

    SEED: 'este-es-un-seed-dificil',
    
    email: "jobandcare@gmail.com",
    password: "vjdabcdckoonqcmu",
    transporter: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'jobandcare@gmail.com',
            pass: 'vjdabcdckoonqcmu'
        },
        tls: {
            rejectUnauthorized: false
        }
    }   
}
