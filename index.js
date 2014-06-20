var createClient = require("flickr-client");
var generateURLs = require("flickr-generate-urls");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return favs;
}

function favs (userId, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  options.user_id = userId;

  client('favorites.getPublicList', options, function (error, response) {
    if (error) return callback(error);

    response.photos.photo.forEach(function (p) {
      p.urls = generateURLs(p);
    });

    callback(undefined, {
      page: response.photos.page,
      pages: response.photos.pages,
      perpage: response.photos.perpage,
      total: response.photos.total,
      photos: response.photos.photo
    });
  });
}
