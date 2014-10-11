module.exports = {
	options: {
	  mangle: false
	},
	my_target: {
	  files: {
	    '../www/js/app.js': ['scripts/app.js'],
	    '../www/js/controllers.js': ['scripts/controllers.js'],
	    '../www/js/services.js': ['scripts/services.js'],
	    '../www/js/tabSlideBox.js': ['scripts/tabSlideBox.js'],
	    '../www/js/lib/angular-local-storage.js': ['scripts/lib/angular-local-storage.js'],
	    '../www/js/lib/firebase.js': ['scripts/lib/firebase.js'],

	  }
	}
}