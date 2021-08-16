const UniqueFilename = require('unique-filename-generator');

const filename = new UniqueFilename(
    {
        size: 4,
        after: '.pdf',
        separator: '-',
        dir: './public/assets/pdf',
        regExp: /[^a-zA-Z0-9 -]/g
    }
);

const query = 'pdf';

const fileNameObject = filename.generate(query);

module.exports = fileNameObject;