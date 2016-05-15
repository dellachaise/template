var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	rimraf = require('rimraf'),
	concat = require('gulp-concat'),
	server = require("gulp-server-livereload"),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css');

gulp.task('build', function () {
	gulp.start('clean');
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('build'));
});

gulp.task("bower", function() {
	return gulp.src("app/*.html")
		.pipe(wiredep())
		.pipe(gulp.dest("app"));
});

gulp.task('watch', function() {
	watch("app/js/**/main.js", function() {
		gulp.start('js:build');
	});

	watch("app/sass/**/*.sass", function(event, cb) {
		gulp.start('style');
	});

	watch("bower.json", function(event, cb) {
		gulp.start('bower');
	});
});

gulp.task('clean', function(cb) {
	rimraf("./build", cb);
});

gulp.task("server", function() {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			defaultFile: 'index.html',
			open: true
		}));
});

gulp.task("style", function() {
	gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 15 versions']
		}))
		.pipe(gulp.dest('app/css'));
});


gulp.task("default", ['server', 'watch']);
