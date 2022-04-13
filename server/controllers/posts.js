import Posts from '../models/posts.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
                
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new Posts(body);
  try {
    await newPost.save();
    res.send("post creation");
  } catch (error) {
      res.status(409).json({message: error.message})
  }
};
