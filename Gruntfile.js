module.exports = function(grunt) {
  grunt.initConfig({
    qunit: {
      files: ['test/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  
  // A convenient task alias.
  grunt.registerTask('test', 'qunit');

};