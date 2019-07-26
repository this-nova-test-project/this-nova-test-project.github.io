var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var rimraf       = require('rimraf');

var uglify       = require('gulp-uglifyjs');

var cssnano      = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
var rename       = require('gulp-rename'); // Для переименования файлов

var imagemin     = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
var pngquant     = require('imagemin-pngquant');

gulp.task('sass', function() {

return gulp.src("app/sass/*.sass")

.pipe(sass().on('error', sass.logError))

.pipe(gulp.dest("app/css"))

.pipe(browserSync.stream());

});


gulp.task('watch' , function() {



browserSync.init({

server: "app/"

});

gulp.watch("app/sass/*.sass", gulp.parallel('sass'));

gulp.watch("app/*.html").on('change', browserSync.reload);
gulp.watch("app/js/*.js").on('change', browserSync.reload);

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




gulp.task('minjs', function() {
    return gulp.src([ 
        'app/js/main.js' 
        ])
        .pipe(concat('all.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});

gulp.task('mincss', gulp.parallel('sass'), function() {
    return gulp.src('app/sass/main.sass') // Выбираем файл для минификации
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('img', function() {
    return gulp.src('app/images/**/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', gulp.parallel('img' , 'mincss', 'minjs'), function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css/main.css',
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('default' , gulp.parallel('watch' , 'sass'));


