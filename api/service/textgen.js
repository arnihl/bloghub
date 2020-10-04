'use strict'

const deepai = require('deepai');
const apiKey = 'ea910d31-cfd7-4ca7-baae-ed4b008405c8';

deepai.setApiKey(apiKey);

async function getText(textseed) {
    return await deepai.callStandardApi('text-generator', {
        text: textseed,
    });
}

module.exports = {
    getText
}