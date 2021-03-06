Package.describe({
  name: 'kriegslustig:simulatency',
  version: '0.0.0',
  description: 'Adds a lag to all connections you make to the server',
  repository: 'https://github.com/Kriegslustig/meteor-lag.git',
  debugOnly: true
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2')
  api.use([
    'ecmascript',
    'ddp',
    'webapp',
    'underscore',
    'templating',
    'spacebars'
  ])
  api.addFiles([
    'server/lib/utils.js',
    'server/simulatency.js'
  ], 'server')
  api.addFiles([
    'client/simulatency.js',
  ], 'client')
  api.export('simulatency')
})
