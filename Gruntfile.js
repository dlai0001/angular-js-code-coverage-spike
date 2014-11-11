module.exports = function(grunt) {

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }  
  });

  // Grunt modules
  grunt.loadNpmTasks('grunt-karma');

  // Higher level tasks
  grunt.registerTask('test', ['karma:unit']);

  // Custom Lower level Tasks
  grunt.registerTask('zztest', 'tasks where we hackaway stuff', function() {
    console.log("This is a grunt file");
  });

  grunt.registerTask('checkCodeCoverage', 'check code coverage', function(thresholdPercent) {
    var requiredConverageThreshold = 90.0;
    if(thresholdPercent) {
      requiredConverageThreshold = parseFloat(thresholdPercent);
    }

    var fs = require('fs');
    var coverageReportFile = fs.readFileSync("coverage/teamcity.txt", "utf8");    

    ///##teamcity[buildStatisticValue key='CodeCoverageB' value='89.47']
    var rePattern = new RegExp(/teamcity\[buildStatisticValue key='CodeCoverageB' value='(\d+\.*\d*)'\]/);
    var match = rePattern.exec(coverageReportFile);
    var coveragePercent = parseFloat(match[1]);

    if( coveragePercent < requiredConverageThreshold) {
      //Fail task
      grunt.fail.fatal("Unit test code coverage not sufficient, expecting " + 
        requiredConverageThreshold + "%, but got " +
        coveragePercent + "%.", 4);
    }

    console.log("Coverage percentage check OK. At: " + coveragePercent + "%");
  });

};