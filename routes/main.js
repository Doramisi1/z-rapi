__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: premium,
        result: {
            prefix : '/',
            namabot: 'SKYbot',
            namaowner: 'SKY-gans',
            instagram: 'zefianalfian',
            youtube : 'ZefianAlfian'
        }
    }
    res.json(config)
})


module.exports = router
