module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts/:slug",
      handler: "api::post.post.findBySlug",
    },
  ],
};
