module.exports = function(config){
  config.set({

    basePath : '.',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-loader/angular-loader.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'      
    ],

    reporters: ['coverage'],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
      'app/!(bower_components)/!(test).js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      reporters: [
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'html', subdir: 'report-html' }
      ]

    }
  });
};
