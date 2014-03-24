var gulp = require('gulp')
  , less = require('gulp-less');

gulp.task('styles', function() {
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  // gulp.watch(paths.scripts, ['scripts']);
  gulp.watch('./less/*', ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['styles', 'watch']);