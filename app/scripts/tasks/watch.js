module.exports = {
	less: {
		files: ["less/*.less", "*.html", "scripts/*.js", "scripts/JSON/*.json", "templates/*.html", "../www/css/tabSlideBox.css"],
		tasks: [
		 "less",
		 "cssmin",
		 "htmlmin",
		 "uglify",
		 "minjson",
		 "copy",
		 "imagemin"
		]
	}
}