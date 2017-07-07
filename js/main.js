'use strict';

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');
let postTemplate = require('../templates/post.hbs');


$.ajax({
	url: "js/data.json"
}).done(function(data){
	$('#output').append(postTemplate(data));
}).fail(function(jqXHR, textStatus){
	console.log(jqXHR, textStatus);
});




