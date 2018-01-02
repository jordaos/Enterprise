var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    gulp.start(['serve']);
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
    });

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch('./src/sass/**/*.sass', ['sass']);
    gulp.watch(['./*.html', './**/*.js']).on('change', browserSync.reload);
});