// 引包
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const less = require('gulp-less');

// 定义任务
// 处理css
gulp.task('style', function(){
	gulp.src(['./src/css/*.css'])  //指定文件
	// .pipe(less())   //转换为css文件
	.pipe(csso())  // 压缩css文件
	.pipe(gulp.dest('./dist/css'))  //保存到指定路径
})

// 处理js
gulp.task('script', function(){
	gulp.src(['./src/js/*.js'])  //指定文件
	.pipe(uglify())  //压缩js文件
	.pipe(gulp.dest('./dist/js'))
})

// 处理html
gulp.task('html', function(){
	gulp.src(['./src/*.html'])  // 指定文件
	.pipe(htmlmin({   // 压缩js文件
		collapseWhitespace: true,  // 删除空白符
		removeComments: true,	//清除html注释
        minifyCSS: true,  //压缩页面的CSS
        minifyJS: true  //压缩页面的js

	}))
	.pipe(gulp.dest('./dist/'));
})

gulp.task('default',function(){
	// 在此任务里调用其他任务
	// 参数1：要监视的文件
	// 参数2：要执行的任务
	gulp.watch('./src/**/*.*', ['html','script','style']);
})



