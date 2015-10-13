var gulp = require('gulp');

// gulp-cssmin
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// gulp-inline-css
var inlineCss = require('gulp-inline-css');

// gulp-uglify
var uglify = require('gulp-uglify');

// gulp-htmlmin
var htmlmin = require('gulp-htmlmin');


/**
 *  Grunt Tasks
 */
// move images (already compressed)
gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

// gulp-inline-css
gulp.task('inline-index-html', function() {
    return gulp.src('src/index.html')
        .pipe(inlineCss())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});
gulp.task('inline-project-html', function() {
    return gulp.src('src/project*.html')
        .pipe(inlineCss())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

// 
gulp.task('pizza', function(){
  gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
  return gulp.src('src/pizza.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

// gulp-uglify
gulp.task('js', function() {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Build Task to do them all
gulp.task('build', ['inline-index-html', 'inline-project-html', 'pizza', 'js', 'img']);