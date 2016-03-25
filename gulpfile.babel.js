'use strict';

import babelify from 'babelify';
import browserify from 'browserify';
import babel from 'gulp-babel';
import buffer from 'vinyl-buffer';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gutil from 'gulp-util';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import uglify from 'gulp-uglify';

const paths = {
  browser: 'browser/**/*.js',
  build: 'build',
  dist: 'dist',
  server: 'server/*.js',
  views: 'views/*.html'
}

gulp.task('lint', (cb) => {
  gulp.src([paths.browser, paths.server])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
});

gulp.task('browser', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './browser/app.js',
    transform: [babelify, reactify]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('server', ['lint', 'clean'], () => {
  gulp.src(paths.server)
      .pipe(babel())
      .pipe(gulp.dest(paths.build));
});

gulp.task('views', () => {
  gulp.src(paths.views)
      .pipe(gulp.dest(paths.dist))
});

gulp.task('clean', (cb) => {
  del([paths.dist, paths.build]).then((paths, err) => cb(err));
});

gulp.task('styles', ['clean'], () => {
  gulp.src('styles/*')
      .pipe(stylus())
      .pipe(gulp.dest('dist/styles'))
});

gulp.task('build', ['browser', 'server', 'views', 'styles']);

gulp.task('default', ['build']);

gulp.task('watch', () => {
  gulp.watch(paths.browser, ['browser'])
  gulp.watch(paths.styles, ['styles'])
})
