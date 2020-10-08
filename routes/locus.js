const { Router } = require('express')
const router = Router()

router.get('/', async(req, res) => {

    res.render('index', {
        title: 'locusgen',
        isIndex: true
    })
})

module.exports = router