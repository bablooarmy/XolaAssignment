
// Imports

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var styleguide = require('sc5-styleguide');

// Path definitions

var sourcePath = 'src';
var htmlWild = sourcePath + '/**/*.html';
var styleSourcePath = sourcePath + '/styles';
var scssWild = styleSourcePath + '/*.scss';
var scssRoot = styleSourcePath + '/main.scss';
var xolaStyles = styleSourcePath + '/css/*.css';
var overviewPath = styleSourcePath + '/README.md';

var buildPath = 'build';
var styleBuildPath = buildPath + '/styles';
var styleguideAppRoot = '/styleguide';
var styleguideBuildPath = buildPath + styleguideAppRoot;

var tmpPath = 'tmp';
var styleguideTmpPath = tmpPath + '/styleguide';

//xola fonts
var xolaFonts = "src/assets/fonts/**";
var xolaFontsBuildPath = styleguideBuildPath + "/fonts";
var xolaFontsTmpPath = styleguideTmpPath + "/fonts";

//xola images
var xolaImages = "src/assets/images/**";
var xolaImagesBuildPath = styleguideBuildPath + "/images";
var xolaImagesTmpPath = styleguideTmpPath + "/images";

// Building the application
//
// In reality the app would ofcourse be a lot more complex.
// Here the app simply consists of some HTML so we get to examine how
// the styles would be used in the application. A key relevation is
// that the markup needs to be written into the app. There is no magic
// that would bring the markup for a page into the app from the pages
// section in the styleguide.

gulp.task('html', function() {
    return gulp.src(htmlWild)
        .pipe(gulp.dest(buildPath));
});

gulp.task('scss', function() {
    return gulp.src(scssRoot)
        .pipe(sass())
        .pipe(gulp.dest(styleBuildPath));
});

// Building styleguide for static hosting to be displayed as a part of the application
//
// Here we build the styleguide so it can be included in a web folder within the app.
// The benefit for including the styleguide at /styleguide path of the app is that
// everyone can always find a master copy of the style guide. Another benefit is that
// this copy will be load balanced by the web server, so it can handle heavy loads.
// All interactive features are disabled to prevent users from tampering with the
// styles.

gulp.task('staticStyleguide:generate', function() {
  return gulp.src(scssWild)
    .pipe(styleguide.generate({
        title: 'Xola Development Styleguide',
        rootPath: styleguideBuildPath,
        appRoot: styleguideAppRoot,
        overviewPath: overviewPath,
        commonClass: ['body-class html-class']
      }))
    .pipe(gulp.dest(styleguideBuildPath));
});

gulp.task('staticStyleguide:applystyles', function() {
  return gulp.src([scssRoot,xolaStyles])
    .pipe(concat('all.scss'))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(styleguideBuildPath));
});

gulp.task('staticStyleguide', ['staticStyleguide:generate', 'staticStyleguide:applystyles']);

//copy assets like images, fonts, icons used in Xola website into build or development build folder
//so that you can use them in markup element as background image or icons used in button
gulp.task('staticFonts', function() {
  gulp.src(xolaFonts)
    // Do image sprites, optimizations etc.
    .pipe(gulp.dest(xolaFontsBuildPath));
});

gulp.task('staticImages', function() {
  gulp.src(xolaImages)
    // Do image sprites, optimizations etc.
    .pipe(gulp.dest(xolaImagesBuildPath));
});

gulp.task('staticAssets', ['staticImages', 'staticFonts']);

// Running styleguide development server to view the styles while you are working on them
//
// This task runs the interactive style guide for use by developers. It runs a built-in server
// and contains all the interactive features and should be updated automatically whenever the
// styles are modified.

gulp.task('styleguide:generate', function() {
  return gulp.src(scssWild)
    .pipe(styleguide.generate({
        title: 'Xola Development Styleguide',
        server: true,
        rootPath: styleguideTmpPath,
        overviewPath: overviewPath,
        commonClass: ['body-class html-class']
      }))
    .pipe(gulp.dest(styleguideTmpPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src([scssRoot,xolaStyles])
    .pipe(concat('all.scss'))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(styleguideTmpPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

//copy assets like images, fonts, icons used in Xola website into build or development build folder
//so that you can use them in markup element as background image or icons used in button
gulp.task('fonts', function() {
  gulp.src(xolaFonts)
    // Do image sprites, optimizations etc.
    .pipe(gulp.dest(xolaFontsTmpPath));
});

gulp.task('images', function() {
  gulp.src(xolaImages)
    // Do image sprites, optimizations etc.
    .pipe(gulp.dest(xolaImagesTmpPath));
});

gulp.task('assets', ['images', 'fonts']);

// Developer mode

gulp.task('dev', ['html', 'scss', 'assets', 'styleguide'], function() {
    gulp.watch(htmlWild, ['html']);
    gulp.watch(scssWild, ['scss', 'styleguide']);
    console.log(
        '\nDeveloper mode!\n\nSC5 Styleguide available at http://localhost:3000/\n'
    );
});

// The basic build task

gulp.task('default', ['html', 'scss', 'staticAssets', 'staticStyleguide'], function() {
    console.log(
        '\nBuild complete!\n\nFresh build available in directory: ' +
        buildPath + '\n\nCheckout the build by commanding\n' +
        '(cd ' + buildPath + '; python -m SimpleHTTPServer)\n' +
        'and pointing yout browser at http://localhost:8000/\n' +
        'or http://localhost:8000/styleguide/ for the styleguide\n\n' +
        'Run gulp with "gulp dev" for developer mode and style guide!\n'
    );
});
