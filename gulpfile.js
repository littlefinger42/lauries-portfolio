var gulp = require('gulp');
var gulp_sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

var config = {
	paths: {
		src: {
			html: './src/*.html',
			sass: './src/scss/**/*.scss'
		},
		dist: './dist'
	}
}

gulp.task('sass', () => {
	return gulp.src(config.paths.src.sass)
		.pipe(gulp_sass())
		.pipe(gulp.dest(config.paths.dist + '/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('html', () => {
	return gulp.src(config.paths.src.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: config.paths.dist
		}
	})
})

gulp.task('watch', () => {
	gulp.series('browserSync');
	gulp.watch(config.paths.src.sass, gulp.series('sass'));
	gulp.watch(config.paths.src.html, gulp.series('html'));
	// Other watchers
})
