import { posts } from "../data/posts.js";

const index = (req, res) => {
  res.json(posts);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
};

const store = (req, res) => {
  res.send("creazione post");
};
export { index, show, store };
