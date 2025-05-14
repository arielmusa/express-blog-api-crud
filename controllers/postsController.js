import { posts } from "../data/posts.js";

const index = (req, res) => {
  res.json(posts);
};

export { index };
