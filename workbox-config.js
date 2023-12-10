module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,js,ico,html,json}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
};