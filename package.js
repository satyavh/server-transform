Package.describe({
  name: 'maximal:server-transform',
  version: '0.1.0',
  summary: 'Meteor package to transform documents on publish',
  git: 'https://github.com/maximalmeteor/server-transform',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'mongo',
    'maximal:package-base@1.0.0',
    'dburles:mongo-collection-instances@0.3.3',
    'peerlibrary:server-autorun@0.2.3'
  ]);

  api.addFiles([
    'server-transform.coffee',
    'reactive-cursor.coffee',
    'extend.coffee'
  ], 'server');

  api.export('ServerTransform');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'coffeescript',
    'maximal:server-transform'
  ]);
  api.addFiles('tests/server-transform.coffee');
});
