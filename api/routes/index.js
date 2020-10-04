let express = require('express');
let router = express.Router();
let blogservice = require('../service/blogservice');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('<form action=\"/\" method=\"post\">' +
        '<label for=\"seed\"> Title of blog </label>' +
        '<input type=\"text\" name=\"textseed\">' +
        '<input type=\"submit\" value=\"Submit\">' +
        '</form>');
});

router.post('/', async function(req, res, next) {
    let textseed = req.body.textseed;
    await blogservice.createAndSaveBlog(textseed)
        .then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.get('/getall', async function(req, res, next) {
    await blogservice.getAllBlogs()
        .then(blogs => {
            res.json(blogs);
        })
        .catch(err => {
            console.log(err);
            res.json({
                message: "WE DONE FUCKED UP NOW SON!"
            });
        })
});

// should not use this route
// instead create one by one on '/'
router.get('/bulkcreate', async function(req, res, next) {
    await blogservice.bulkCreateBlog()
        .then(success => {
            console.log('blogs have been created');
        }).catch(err => {
            console.log(err);
            console.log('blogs could not be created');
        });
    res.send('blogs are being created');

});

router.get('/backup', async function(req, res, next) {
    await blogservice.backupdata()
        .then(success => {
            res.send('Data has been backed up!');
        }).catch(err => {
            res.send('Data failed to back up. ' + err);
        });
})

module.exports = router;