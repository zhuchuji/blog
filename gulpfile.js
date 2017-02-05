var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task("sass", function() {
	return gulp.src("app/**/*.scss")
			   .pipe(sass().on("error", sass.logError))
			   .pipe(gulp.dest("./"))
			   .pipe(browserSync.stream());
});

gulp.task("serve", ["sass"], function() {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
	gulp.watch([
		"app/**/*"
		]).on("change", browserSync.reload);
});