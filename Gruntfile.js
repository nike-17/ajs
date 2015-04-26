module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        ajs: {
            compile: {
                options: {
                    sourceMap: true
                },
                files: {
                    'example/dist/sample.js': 'example/src/sample2.js'
                },
                replacements: [{
                    pattern: /\/\/\s+@([a-z]+)\s+([#a-z]+)\s([^}]+})/g,
                    replacement:
                    'document.querySelector(\'$2\')' +
                    '\.addEventListener\(\'$1\', ' +
                    '$3, false\)'
                }]

            }
        }
    });

    // Load npm tasks.
    grunt.loadTasks('tasks');


    grunt.registerTask('default', ['ajs']);
};