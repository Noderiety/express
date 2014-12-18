var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat =  require('gulp-concat'),
    livereload = require('gulp-livereload'),
    traceur = require('gulp-traceur'),
    changed = require('gulp-changed'),
    sourcemaps = require('gulp-sourcemaps'),
    insert = require('gulp-insert'),
    nodemon = require('gulp-nodemon'),
    rc = require('rc'),
    _ = require('lodash'),
    traceurConfig = _.omit(rc('traceur'), ['config', '_']),
    // srcDir = './server/',
    srcFiles = './server/src/**/*.es6.js',
    destDir = './server/dist/',
    testSrcFiles = './test/src/**/*.es6.js',
    testDestDir = './test/dist/',
    traceurStackTraceMapInjection = 'require(\'traceur-source-maps\').install(require(\'traceur\'));';

// config to hold the path files
var paths = {
  server: ['./server/src/**/*.js', './test/src/**/*.js', 'index.js', 'config.js'],
  client: ['./public/js/**/*.js', '!./public/js/**/*.min.js']
};

// Made the tasks simpler and modular
// so that every task handles a particular build/dev process
// If there is any improvement that you think can help make these tasks simpler
// open an issue at https://github/com/ngenerio/generator-express-simple
// It can be made simpler

// Lint the javascript server files
gulp.task('lintserver', function () {
  gulp
    .src(paths.server)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

// Lint the javascript client files
gulp.task('lintclient', function () {
  gulp
    .src(paths.client)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

// Uglify the client/frontend javascript files
gulp.task('uglify', function () {
  gulp
    .src(paths.client)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/js'));
});

// Concat the built javascript files from the uglify task with the vendor/lib javascript files into one file
// Let's save the users some bandwith
gulp.task('concatJs', function () {
  gulp
    .src(['./public/vendor/jquery/dist/jquery.min.js', './public/vendor/bootstrap/dist/js/bootstrap.min.js', './public/js/main.min.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./public/js'));
});

// Preprocess the less files into css files
gulp.task('less', function () {
  gulp
    .src('./public/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

// Minify the css files to reduce the size of the files
// To avoid this task, import all the other less files into one file
// and rather process that file into a single file and jump straight to concatenation
// You can learn more about this from the twitter bootstrap project
gulp.task('css', function () {
  gulp
    .src(['./public/css/**/*.css', '!./public/css/**/*.min.css'])
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css'));
});

// Concat all the css files
gulp.task('concatCss', function () {
  gulp
    .src(['./public/vendor/bootstrap/dist/css/bootstrap.min.css', './public/css/styles.min.css'])
    .pipe(concat('app.styles.min.css'))
    .pipe(gulp.dest('./public/css'));
});

// Transpile ES6 => ES5
gulp.task('traceur-server', function () {
  return gulp.src(srcFiles)
    .pipe(changed(destDir))
    .pipe(insert.prepend(traceurStackTraceMapInjection))
    .pipe(sourcemaps.init())
    .pipe(traceur(traceurConfig))
    .pipe(rename(function (path) {
      // Remove .es6 extension
      path.basename = path.basename.split('.').slice(0,-1).join('.');
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destDir));
});

// Transpile ES6 => ES5
gulp.task('traceur-test', function () {
  return gulp.src(testSrcFiles)
    .pipe(changed(testDestDir))
    .pipe(insert.prepend(traceurStackTraceMapInjection))
    .pipe(sourcemaps.init())
    .pipe(traceur(traceurConfig))
    .pipe(rename(function (path) {
      // Remove .es6 extension
      path.basename = path.basename.split('.').slice(0,-1).join('.');
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(testDestDir));
});

// Currently broken, server EADDRINUSE
gulp.task('nodemon', function () {
  nodemon({ script: './index.js', ext: 'hbs js', ignore: ['ignored.js'] })
    // .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// Watch the various files and runs their respective tasks
gulp.task('watch', function () {
  gulp.watch(paths.server, ['lintserver', 'traceur']);
  gulp.watch(paths.client, ['lintclient']);
  gulp.watch(paths.client, ['buildJs']);
  gulp.watch('./public/less/**/*.less', ['buildCss']);
  gulp
    .src(['./views/**/*.hbs', './public/css/**/*.min.css', './public/js/**/*.min.js'])
    .pipe(watch())
    .pipe(livereload());
});


gulp.task('traceur', ['traceur-server', 'traceur-test']);
gulp.task('lint', ['lintserver', 'lintclient']);
gulp.task('buildCss', ['less', 'css', 'concatCss']);
gulp.task('buildJs', ['uglify', 'concatJs']);
gulp.task('default', ['lint', 'buildCss', 'buildJs', 'nodemon', 'watch']);
