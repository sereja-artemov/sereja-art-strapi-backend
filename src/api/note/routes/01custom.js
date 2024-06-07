module.exports = {
  routes: [
    {
      method: "GET",
      path: "/notes/:slug",
      handler: "api::note.note.findBySlug",
    },
  ],
};
