const { generatePdf } = require('../utils/pptr')
const { readFromFile, saveDataAsJson } = require('../utils/fileManager');

module.exports = app => {

    app.post('/generate-template', async (req, res) => {
        try {
            let customData
            if (req.body.type && req.body.type === 'simple') {
                customData = await readFromFile('./public/assets/static/simpleData.json')
            } else {
                const defaultData = await readFromFile('./public/assets/static/default.json')
                const { logo, title, description, textImportant, text } = req.body;
                customData = {
                    logo: logo || defaultData.logo,
                    title: title || defaultData.title,
                    description: description || defaultData.description,
                    textImportant: textImportant || defaultData.textImportant,
                    text: (text[0] && text) || defaultData.text,
                }
            }
            await saveDataAsJson('./public/assets/static/data.json', JSON.stringify(customData))
            res.redirect('/template')
        } catch (error) {
            res.render('error', { data: error.message })
        }
    })

    app.post('/generate-pdf', async (req, res) => {
        try {
            await generatePdf(req, res);
            res.render('thanks')
        } catch (error) {
            res.render('error', { data: error.message })
        }
    })
}