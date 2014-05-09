Package.describe({
  summary: ""
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');

  api.add_files('lib/bootstrap-confirmation.js', 'client');
});
