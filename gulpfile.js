var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var rimraf = require('rimraf');


gulp.task('sass', function() {

return gulp.src("app/sass/*.sass")

.pipe(sass().on('error', sass.logError))

.pipe(gulp.dest("app/css"))

.pipe(browserSync.stream());

});

gulp.task('jade')

gulp.task('watch' , function() {



browserSync.init({

server: "app/"

});

gulp.watch("app/sass/*.sass", gulp.parallel('sass'));

gulp.watch("app/*.html").on('change', browserSync.reload);

});

gulp.task('styles',function(){
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'IE 8'], 
            cascade: false
        }))

	.pipe(gulp.dest('./css'));
})

gulp.task('default' , gulp.parallel('watch' , 'sass'));


