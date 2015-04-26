module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        'string-replace': {
            dist: {
                files: {
                    'dist/': 'src/**',
                },
                options: {
                    replacements: [{
                        pattern: /\/\/\s+@([a-z]+)\s+([#a-z]+)\s([^}]+})/g,
                        replacement:
                            'document.querySelector(\'$2\')' +
                            '\.addEventListener\(\'$1\', ' +
                            '$3, false\)'
                    }]
                }
            }
        }
    });

    // Load npm tasks.
    grunt.loadNpmTasks('grunt-string-replace');

    // Load local tasks.
    // grunt.loadTasks('tasks');

    grunt.registerTask('default', ['string-replace']);
};