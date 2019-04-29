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
      jsMain: ["./src/js/animateonscroll.js", "./src/js/portfolioitems.js", "./src/js/main.js"],
      jsPortfolio: ["./src/js/animateonscroll.js", "./src/js/portfolioitems.js", "./src/js/portfolioitem.js"],
      sass: "./src/scss/**/*.scss",
      assets: "./assets/**"
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

gulp.task("js:main", () => {
  return gulp
    .src(config.paths.src.jsMain)
    .pipe(gulp_concat("main.js"))
    .pipe(gulp.dest(config.paths.dist.js));
});
gulp.task("js:portfolioitem", () => {
  return gulp
    .src(config.paths.src.jsPortfolio)
    .pipe(gulp_concat("portfolioitem.js"))
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

gulp.task("copyAssets", () => {
  return gulp.src(config.paths.src.assets)
  .pipe(gulp.dest(config.paths.dist.html));
});

gulp.task("watch", () => {
  gulp.parallel("browserSync", "build");
  gulp.watch(config.paths.src.sass, gulp.series("sass"));
  gulp.watch(config.paths.src.js, gulp.series("js:main", "js:portfolioitem"));
  gulp.watch(config.paths.src.assets, gulp.series("copyAssets"));
  gulp.watch(config.paths.src.html, gulp.series("html"));
});

gulp.task("build", gulp.parallel("sass", "js:main", "js:portfolioitem", "html", "copyAssets"));
gulp.task("develop", gulp.parallel("browserSync", "build", "watch"));
