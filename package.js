Package.describe({
  name: 'astraw:jquery-fleximages',
  summary: "Use Pixabay's jQuery-flexImages package in Meteor",
  version: '0.0.1',
  git: 'https://github.com/astraw/jquery-fleximages'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('jQuery-flexImages');
  api.addFiles(path.join(asset_path, 'jquery.flex-images.css'), 'client');
  api.addFiles(path.join(asset_path, 'jquery.flex-images.min.js'), 'client');
});
