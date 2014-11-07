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

};