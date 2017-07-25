// 걸프 의존성을 여기 씁니다.
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
    // 걸프 작업을 여기 씁니다.

    // ESLint를 실행합니다.
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
	.pipe(eslint())
	.pipe(eslint.format());
    // 노드 소스
    gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));
    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
});
