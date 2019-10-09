var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('autoprefix - плагин', function () {
    return gulp.src('src/css/YogaCSS.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/html'));
});

gulp.task('minify-css', () => {
    return gulp.src('build/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('gulp-uglify', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

gulp.task('gulp-imagemin', function() {
    return gulp.src('src/pics/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/pics'))
});




