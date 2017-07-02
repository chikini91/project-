var gulp = require('gulp');
var scss  = require('gulp-scss');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var compress = require('gulp-imagemin');
var connect = require('gulp-connect');


 gulp.task('html', function () {
     return gulp.src('./index.html')
         .pipe(connect.reload())
 })
 
gulp.task('scss', function() {
	return gulp.src('./scss/*.scss')
    .pipe(gulp.dest('./scss'))
	.pipe(scss())
	.pipe(autoprefixer({ browsers: ['last 3 versions'] }))
             .pipe(minify())
             .pipe(rename('main.min.css'))
         .pipe(sourcemaps.write('./'))
         .pipe(gulp.dest('./dist'))
         .pipe(connect.reload())
});
	
 gulp.task('js', function () {
     return gulp.src('./js/*.js')
         .pipe(sourcemaps.init())
             .pipe(uglify())
             .pipe(rename('main.min.js'))
         .pipe(sourcemaps.write('./'))
         .pipe(gulp.dest('./dist/js'))
         .pipe(connect.reload())
 })

 gulp.task('img', function () {
     return gulp.src('./img/*')
         .pipe(compress({
             verbose: true
         }))
         .pipe(gulp.dest('./dist/img'))
         .pipe(connect.reload())
 })


gulp.task('watch', function(){
	gulp.watch('./scss/*.scss', ['scss']);
	gulp.watch('./index.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./img/*', ['img']);
});


gulp.task('default', [ 'watch','html','scss','js','img']);



