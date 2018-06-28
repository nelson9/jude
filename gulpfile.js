// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch("./assets/sass/**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    gulp.src('./assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css')
        )
});

gulp.task('default', ['serve']);