'use strict';

import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gutil from 'gulp-util';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

gulp.task('lint', () => {
  gulp.src('components/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('javascript', ['clean'], () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './app.js',
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

gulp.task('views', ['clean'], () => {
  gulp.src('views/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', (cb) => {
  del(['dist']).then((paths, err) => cb(err));
});

gulp.task('build', ['javascript', 'views']);
