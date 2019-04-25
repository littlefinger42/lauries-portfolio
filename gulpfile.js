var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var gulp_concat = require("gulp-concat");
var gulp_rename = require("gulp-rename");
var gulp_uglify = require("gulp-uglify");

var browserSync = require("browser-sync").create();

var config = {
  paths: {
    src: {
      html: "./src/*.html",
      js: "./src/js/*.js",
      sass: "./src/scss/**/*.scss"
    },
    dist: {
		html: "./dist",
		js: "./dist/js",
		css: "./dist/css",
	}
  }
};

gulp.task("sass", () => {
  return gulp
    .src(config.paths.src.sass)
    .pipe(gulp_sass())
    .pipe(gulp.dest(config.paths.dist.css))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("js", () => {
  return gulp
    .src(config.paths.src.js)
    .pipe(gulp_concat("main.js"))
    .pipe(gulp.dest(config.paths.dist.js));
});

gulp.task("html", () => {
  return gulp
    .src(config.paths.src.html)
    .pipe(gulp.dest(config.paths.dist.html))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("browserSync", () => {
  browserSync.init({
    server: {
      baseDir: config.paths.dist
    }
  });
});

gulp.task("watch", () => {
  gulp.series("browserSync");
  gulp.watch(config.paths.src.sass, gulp.series("sass"));
  gulp.watch(config.paths.src.js, gulp.series("js"));
  gulp.watch(config.paths.src.html, gulp.series("html"));
  // Other watchers
});
