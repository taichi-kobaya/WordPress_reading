const { watch, series, task, src, dest } = require('gulp');
const scss                               = require('gulp-sass');
const autoprefixer                       = require('gulp-autoprefixer');
const plumber                            = require('gulp-plumber');
 
const convertToCss = () =>
  src('./src/scss/style.scss')
      .pipe(plumber())
      .pipe(scss())
      .pipe(autoprefixer())
      .pipe(dest('./wp-content/themes/xeory_base-child'));
 
const watchScss = () =>
  watch('./src/scss/**/*.scss', convertToCss);
 
exports.default = watchScss;