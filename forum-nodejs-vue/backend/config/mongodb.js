const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Unable to connect to MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })