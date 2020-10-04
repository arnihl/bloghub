'use strict'

const { sequelize } = require('../sequelize');
const blog = sequelize.models.blog;

async function createBlog(newBlog) {
    return await blog.create(newBlog);
}

async function getAllBlogs() {
    return await blog.findAll({ raw: true });
}

module.exports = {
    createBlog,
    getAllBlogs
}