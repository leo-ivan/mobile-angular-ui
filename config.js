'use strict';

var path = require('path');

var config = {
  globs: {
    core: [
      'node_modules/fastclick/lib/fastclick.js',
      'src/js/core/**/*.js',
      'src/js/mobile-angular-ui.core.js'
    ],
    components: [
      'node_modules/fg-overthrow/src/overthrow-detect.js',
      'node_modules/fg-overthrow/src/overthrow-init.js',
      'node_modules/fg-overthrow/src/overthrow-polyfill.js',
      'src/js/components/**/*.js',
      'src/js/mobile-angular-ui.components.js'
    ],
    gestures: [
      'src/js/gestures/**/*.js',
      'src/js/mobile-angular-ui.gestures.js'
    ],
    fonts: 'node_modules/font-awesome/fonts/fontawesome-webfont.*',
    vendorLess: [
      path.resolve(__dirname, 'src/less'),
      path.resolve(__dirname, 'node_modules')
    ],
    livereloadDemo: [
      path.join('demo', '*.html')
    ],
    livereloadTest: [
      path.join('test', '**', '*.html')
    ],
    livereloadTestManual: [
      path.join('test', 'manual', '*.html')
    ]
  },
  depcheck: {
    ignore: [
      'angular',
      'angular-mocks',
      'bootstrap',
      'mobile-angular-ui',
      'jasmine-core',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-sauce-launcher'
    ]
  },
  lint: ['./src/**/*.js', './test/**/*.js', './*.js']
};

config.globs.main = config.globs.core
  .concat(config.globs.components)
  .concat('src/js/mobile-angular-ui.js');

config.globs.js = []
  .concat(config.globs.core)
  .concat(config.globs.components)
  .concat(config.globs.gestures);

module.exports = config;
