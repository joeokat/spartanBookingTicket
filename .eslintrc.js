module.exports = {
	plugins: ['svelte', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:svelte/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	ignorePatterns: ['node_modules', 'public/build'],
}
