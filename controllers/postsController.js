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

const update = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Aggiornamento dati post id: ${id}`);
};

const modify = (req, res) => {
  const { id } = req.params;
  res.send(`Modifica post id: ${id}`);
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Eliminazione post id: ${id}`);
  res.status(204);
  posts.splice(posts.indexOf(posts.find((post) => post.id === id)), 1);
};
export { index, show, store, update, modify, destroy };
