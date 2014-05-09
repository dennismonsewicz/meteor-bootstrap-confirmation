Package.describe({
  summary: ""
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.imply('jquery', 'client');

  api.add_files('lib/bootstrap3_confirmation.js', 'client');
});
