var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function() {
    gulp.start(['sass', 'sass:watch']);
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
    });
   
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.sass', ['sass']);
});