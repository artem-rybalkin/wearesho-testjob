module.exports = function(grunt) {

grunt.initConfig({

	watch: {
		compass: {
        files: ['sass/*.{scss,sass}'],
        tasks: ['compass']
      }
	},
	    // Compass and scss
    compass: {
      options: {
        //bundleExec: true,
        // httpPath: './',
        cssDir: 'css',
        sassDir: 'sass',
        // imagesDir: 'images',
        // javascriptsDir: 'js',
        // fontsDir: 'fonts',
        // assetCacheBuster: 'none',
        // require: [
        //   'sass-globbing'
        // ]
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          relativeAssets: true,
          raw: 'line_numbers = :true\n'
        }
      }
      // dist: {
      //   options: {
      //     environment: 'production',
      //     outputStyle: 'compact',
      //     force: true
      //   }
      // }
    }

	


});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-compass');

grunt.registerTask('default', ['sass','watch']);
};