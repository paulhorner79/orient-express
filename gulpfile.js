var gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    concat   = require('gulp-concat'),
    jshint   = require('gulp-jshint'),
    uglify   = require('gulp-uglify');

// Copies the JS file to the dist area.  Creates a minified version of it.
gulp.task('js', function(){
    return gulp.src('yogi.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

// Default task
gulp.task('default', [], function() {
    gulp.start('js');
});

// Watch
gulp.task('watch', function() {

    // Watch .js files
    gulp.watch('./yogi.js', 'js');
});
