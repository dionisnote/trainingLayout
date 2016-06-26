var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

var jadeFiles = [
    "./sources/jade/*.jade"
]

// jade task
gulp.task('jade', function(){
    gulp.src(jadeFiles)
        .pipe( jade({
            pretty: '    '
        }) )
        .pipe( gulp.dest('./public') );
});

var sassFiles = [
    "./sources/sass/*.scss"
];

// sass task
gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( gulp.dest('./public/css') );
});

gulp.task('watch', function(){
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(jadeFiles, ['jade']);
});

gulp.task('develop', ['jade', 'sass', 'watch']);

gulp.task('default', ['jade', 'sass']);