'use strict';
var path = require('path'),
    annotation = require('annotation');

module.exports = function (grunt) {
    grunt.registerMultiTask('ajs', 'Generate code using annotations', function () {
        var options = this.options();

        this.files.forEach(function (el) {

            var file = path.normalize(__dirname +'/../' + el.src[0]);
            annotation(file, function(AnnotationReader) {

                console.log('jjjjjj');
                console.log(AnnotationReader.getClassAnnotations());

                console.log(AnnotationReader.getMethodAnnotations('test'));

                console.log(AnnotationReader.getPropertyAnnotations('test'));

                grunt.file.write(el.dest, el);
            });

        });
    });
};