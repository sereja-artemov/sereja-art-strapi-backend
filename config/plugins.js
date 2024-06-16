module.exports = () => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
    }
  }
});
