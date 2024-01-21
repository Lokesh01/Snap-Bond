import Post from "../models/Post.js";
import User from "../models/User.js";

/* Create */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find().sort({ _id: -1 });// sending all the posts after updating
    res.status(200).json(post);
  } catch (error) {
    //*409 indicate that the request could not be completed due to a conflict with the current state of the target resource.
    res.status(409).json({ message: error.message });
  }
};

/* Read */
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 }); // latest posts will be at top
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId }); //* returns all the posts associated to the curr user
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* Update */
export const likePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId); // if already liked delete the key-value from the map
    } else {
      post.likes.set(userId, true);// otherwise set new key-value
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};
