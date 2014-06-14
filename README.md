## flickr-favorites

List favorite photos of a Flickr user

## Install

```bash
$ npm install flickr-favorites
```

## Usage

```js
var favorites = require('flickr-favorites')({
  key: 'api-key'
})

favorites('user-id', function (error, result) {
  result.page
  // => 1

  result.pages
  // => 22

  result.total
  // => 2151

  result.perpage
  // => 100

  result.photos.length
  // => 98

  result.photos[0]
  // => { "id": "14434823753", "owner": "67577064@N04", "secret": "b5ab59b21c", "server": "2911", "farm": 3, "title": "_6249-1", "ispublic": 1, "isfriend": 0, "isfamily": 0, "date_faved": "1402731490" }
});
```

Options:

* min_fave_date
* max_fave_date
* per_page
* page

```js
favorites('user-id', { page: 10 }, function (error, result) {
  result.page
  // => 10
});
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var favorites = require('flickr-favorites')(client)
```
