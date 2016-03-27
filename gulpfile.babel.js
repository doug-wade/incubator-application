'use strict';

import babelify from 'babelify';
import browserify from 'browserify';
import babel from 'gulp-babel';
import buffer from 'vinyl-buffer';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import uglify from 'gulp-uglify';

const paths = {
  browser: 'browser/**/*.js',
  browserOut: 'dist/js',
  build: 'build',
  dist: 'dist',
  server: 'server/*.js',
  styles: 'styles/*',
  stylesOut: 'dist/styles',
  views: 'views/*.html'
}

// Browser tasks
gulp.task('lint-browser', (cb) => {
  gulp.src([paths.browser])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
});

gulp.task('clean-browser', (cb) => {
  del([paths.browserOut]).then((paths, err) => cb(err));
});

gulp.task('browser', ['lint-browser', 'clean-browser'], () => {
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
    .pipe(gulp.dest(paths.browserOut));
});

// Server tasks
gulp.task('lint-server', (cb) => {
  gulp.src([paths.server])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
});

gulp.task('clean-server', (cb) => {
  del([paths.build]).then((paths, err) => cb(err));
});

gulp.task('server', ['lint-server', 'clean-server'], () => {
  gulp.src(paths.server)
      .pipe(babel())
      .pipe(gulp.dest(paths.build));
});

// Views tasks
gulp.task('views', ['clean-views'], () => {
  gulp.src(paths.views)
      .pipe(gulp.dest(paths.dist))
});

gulp.task('clean-views', (cb) => {
  del([path.join(paths.build, 'index.html')]).then((paths, err) => cb(err));
});

gulp.task('clean', (cb) => {
  del([paths.dist, paths.build]).then((paths, err) => cb(err));
});

// styles tasks
gulp.task('styles', ['clean-styles'], () => {
  gulp.src(paths.styles)
      .pipe(stylus())
      .pipe(gulp.dest(paths.stylesOut))
});

gulp.task('clean-styles', (cb) => {
  del([paths.stylesOut]).then((paths, err) => cb(err));
});

gulp.task('lint', ['lint-server', 'lint-browser'])

gulp.task('build', ['browser', 'server', 'views', 'styles']);

gulp.task('default', ['build']);

gulp.task('watch', () => {
  gulp.watch(paths.browser, ['browser'])
  gulp.watch(paths.styles, ['styles'])
  gulp.watch(paths.server, ['server'])
  gulp.watch(paths.views, ['views'])
})
