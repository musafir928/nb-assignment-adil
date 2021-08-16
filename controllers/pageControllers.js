const { removeFile, readFromFile } = require('../utils/fileManager');

module.exports = app => {

    app.get('/', async (req, res) => {
        try {
            await removeFile('./public/assets/static/data.json')
            res.render('form')
        } catch (error) {
            res.render('error', { data: error.message })
        }
    })

    app.get('/template', async (req, res) => {
        try {
            const data = await readFromFile('./public/assets/static/data.json')
            res.render('template', { data })
        } catch (error) {
            res.render('error', { data: error.message })
        }
    })
}