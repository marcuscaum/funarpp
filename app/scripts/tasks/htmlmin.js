module.exports = {
	dist: {                                      // Target
		options: {                                 // Target options
			removeComments: true,
			collapseWhitespace: true
		},
		files: {                                   // Dictionary of files
			'../www/index.html': 'index.html' , // 'destination': 'source'
			'../www/templates/tabs.html': 'templates/tabs.html' , // 'destination': 'source'
			'../www/templates/modal_id.html': 'templates/modal_id.html' , // 'destination': 'source'
			'../www/templates/modal_contato.html': 'templates/modal_contato.html' , // 'destination': 'source'
		}
	}
}