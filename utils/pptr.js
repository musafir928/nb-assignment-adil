const puppeteer = require('puppeteer')
const { fileName } = require('./file-name-generator')

module.exports.generatePdf = async function (req, res) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/template', { waitUntil: 'networkidle0' })
        await page.emulateMediaType('screen')
        await page.evaluate(() => {
            let extraForm = document.querySelector('.form-fixed');
            extraForm.parentNode.removeChild(extraForm);
        })
        await page.pdf({
            path: fileName,
            format: 'A4',
            printBackground: true
        })
        await browser.close()
    } catch (error) {
        console.error(error.message)
        res.render('error', { data: error.message })
    }
}