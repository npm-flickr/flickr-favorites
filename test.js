require('with-env')();

var test = require("prova");
var favs = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('first 100 favs', function (t) {
  favs('98269877@N00', function (error, result) {
    t.plan(8);
    t.error(error);
    t.equal(result.page, 1);
    t.ok(result.pages > 20);
    t.ok(result.total > 2000);
    t.equal(result.perpage, 100);
    t.ok(result.photos[0].id);
    t.ok(result.photos[0].owner);
    t.ok(result.photos[0].date_faved);
  });
});
