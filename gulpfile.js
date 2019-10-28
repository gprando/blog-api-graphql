const gulp = require("gulp");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

// ['static'] aguarda a tarefa static terminar para ser executada
gulp.task('scripts', ['static'], () => {
  const tsResult = tsProject.src()
        .pipe(tsProject());

  return tsResult.js
        .pipe(gulp.dest('dist'));
});

// ['clean'] aguarda a tarefa clean terminar para ser executada
gulp.task('static', ['clean'], ()=>{
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist')); 
});

gulp.task('clean',()=>{
    return gulp 
        .src('dist')
        .pipe(clean());
});

gulp.task('biuld', ['clean', 'static', 'scripts']); 
