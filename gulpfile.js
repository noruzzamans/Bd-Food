const gulp = require("gulp");
const scss = require("gulp-sass");
const browserSync = require("browser-sync").create();

//BOOTSTRAP SCSS COMPILER
function bootstrapScssCompiler() {
    return gulp
        .src("scss/bootstrap/**/*.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest("assets/css/"))
        .pipe(browserSync.stream())
}
gulp.task(bootstrapScssCompiler);

//SASS COMPILER
function sassCompiler() {
    return gulp
        .src("scss/**/*.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest("assets/css/"))
        .pipe(browserSync.stream())
}
gulp.task(sassCompiler);

//CREATE SERVER
function createServer() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/**/*.scss", sassCompiler);
    gulp.watch("scss/bootstrap/**/*.scss", bootstrapScssCompiler);
    gulp.watch("*.html").on("change", browserSync.reload);
}
gulp.task(createServer);

gulp.task("watch", gulp.series(bootstrapScssCompiler, sassCompiler, createServer));