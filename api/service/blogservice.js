'use strict'
let textgen = require('./textgen');
let db = require('../db');
let fs = require('fs');
let topix = ['Presidential election 2020',
    'Donald Trump has Covid!',
    'My sister hates donkeys!',
    'My brother has fear of spiders',
    'Is Thor the new Spiderman?'
];

async function createBlog(textseed) {
    return await textgen.getText(textseed);
}

async function createAndSaveBlog(textseed) {
    return await textgen.getText(textseed)
        .then(async result => {
            let newblog = {
                title: textseed,
                content: result.output,
            };
            return await db.createBlog(newblog);
        });

}

async function bulkCreateBlog() {
    topix.forEach(async topic => {
        await createBlog(topic)
            .then(async result => {
                let newblog = {
                    title: topic,
                    content: result.output,
                };
                return await db.createBlog(newblog);
            }).catch(err => {
                console.log(err);
            })
    })
}

async function getAllBlogs() {
    return await db.getAllBlogs();
}

async function backupdata() {
    await getAllBlogs()
        .then(blogs => {
            fs.writeFile(process.env.PATH_TO_DATA, JSON.stringify(blogs), function(err) {
                console.log(__dirname);
                if (err) throw err;
                console.log('Data has been backed up');
            });
        }).catch(err => {
            return err;
        });
}

async function readData() {

}

module.exports = {
    createBlog,
    bulkCreateBlog,
    getAllBlogs,
    createAndSaveBlog,
    backupdata
}