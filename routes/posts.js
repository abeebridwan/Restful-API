const express = require("express");  
const router = express.Router();
const Post = require('../model/Post');

// get back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    } 
});

// get specific page
router.get('/specific', (req, res,) => {
    res.send('we are on specific')
});

// submit a post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    } 
}); 

module.exports = router;