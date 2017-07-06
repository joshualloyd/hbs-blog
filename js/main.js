'use strict';

let blogPosts = require('./data');
console.log("the blog posts", blogPosts);

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');

let postTemplate = require('../templates/post.hbs');
// console.log(postTemplate);

$('#output').append(postTemplate(blogPosts));