const gulp = require('gulp');
//걸프 의존성을 여기에 씁니다

const babel = require('gulp-babel');
gulp.task('default', function(done) {
    //걸프작업을 여기에 씁니다.
    //노드소스
    gulp.src("es6/**/*.js").pipe(bable()).pipe(gulp.dest("dist"));
    //브라우저 소스
    gulp.src("public/es6/**/*.js").pipe(bable()).pipe(gulp.dest("/public/dist"));
    done();
});