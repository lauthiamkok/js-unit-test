// Karma configuration
module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        // dependencies
        'lib/jquery/jquery-min.js',
        'lib/jasmine-jquery/jasmine-jquery.js',
        
        // files to test
        'src/**/*.js',
        'spec/**/*.js',
        
        // fixtures
        { pattern: 'fixture/*.html',watched: true,served:  true, included: false}
    ],

    // list of files / patterns to exclude
    exclude: [],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //'**/*.html': []
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    
    // Delaying Karm from disconnecting from the browser - if you have this 'disconnected' issue.
    // It is 10000 msec by default.
    browserNoActivityTimeout: 600000
  });
};