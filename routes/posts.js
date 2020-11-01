const express = require("express");  
const { findById } = require("../model/Post");
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

// get specific page
router.get('/:postID', async (req, res,) => {    
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    } 
});

//delete a post
router.delete('/:postID', async (req, res,) => {    
    try{
        const removedPost = await Post.remove({ _id: req.params.postID });
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;