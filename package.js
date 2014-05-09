Package.describe({
  summary: "Meteorite Package for Bootstrap Confirmation http://ethaizone.github.io/Bootstrap-Confirmation/"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');

  api.add_files('lib/bootstrap-confirmation.js', 'client');
});
