const { devDependencies } = require('../package.json')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            electron: devDependencies.electron.replace(/^\^|~/, ''),
          },
        },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }]
  ]
}
