module.exports = function(grunt){
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		    options: {
		       	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		       	mangle: false
		    },
		    my_target: {
		      	files: [{
		          	expand: true,
		          	cwd: 'src/',
		          	src: '**/*.js',
		          	dest: 'dest/'
		      	}]
		    }
		},
		connect: {
			server: {
				options: {
					port: 8081,
					hostname: '*',
					keepalive: true,
					onCreateServer: function(){
						console.log('server running good');
					}
				}
			}
		},
		sass: {                              
		    dist: {                           
		      options: {                       
		        style: 'expanded'
		      },
		      files: {                         
		        'assets/css/style.css': 'assets/sass/main.sass'
		      }
		    }
		},
		watch: {
			css: {
				files: 'assets/sass/*.sass',
				tasks: ['sass']
			}
		}
	})

	 // Load the plugin that provides the "uglify" task.
  	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
  	grunt.registerTask('default', ['uglify', 'jshint', 'sass', 'connect', 'watch']);
}