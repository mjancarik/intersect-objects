module.exports = {
	'extends': ['last'],
	'rules': {
		'prettier/prettier': [
			'error', {
				singleQuote: true,
				printWidth: 90,
				semi: false
			}
		],

		'no-console': ['error', {
			allow: ['warn', 'error', 'log']
		}]
	},
	'plugins': [
		'jest',
		'prettier',
		'jasmine'
	],
	'settings': {
		'ecmascript': 6
	},
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': 6
	},
	'env': {
		'browser': true,
		'node': true,
		'es6': true,
		'jasmine': true,
		'jest/globals': true
	}
};
