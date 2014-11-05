Package.describe({
  name: 'astraw:jquery-fleximages',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('astraw:jquery-fleximages.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('astraw:jquery-fleximages');
  api.addFiles('astraw:jquery-fleximages-tests.js');
});
