// createPost controller

var mongoose = require('mongoose'),
var Post       = require('../app/models/post');

exports.create_post = function(req, res){
	var new_post = new Post(req.body);
	new_post.userId = req.user._id;
	new_post.header = req.body.header;
	new_post.body = req.body.body;
	new_post.date = Date.now();
 	new_post.save(function(err, task) {
    	if (err)
      		res.send(err);
    	res.json(task);
  		});
	};
}