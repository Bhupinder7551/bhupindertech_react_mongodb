const express = require("express");
const Blog = require("../models/Blogs");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

//Get All Posts
router.get("/blogs", fetchuser, async (req, res) => {
  const all_blogs = await Blog.find({user: req.user.id} );
  res.json(all_blogs);
});

// add post
router.post("/addblog",fetchuser,  async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    user: req.user.id
  });
  await blog.save();
  res.send(blog);
});

// get single data
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.send(blog);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});
// update data
router.patch("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.body) {
      blog.body = req.body.body;
    }
    if (req.body.author) {
      blog.author = req.body.author;
    }
    await blog.save();
    res.send(blog);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});
//Delete data
router.delete("/blogs/:id",  async(req, res)=>{
    try{
        
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.delete()
    res.status(204).send()
    }catch{
        res.status(404)
		res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router;
