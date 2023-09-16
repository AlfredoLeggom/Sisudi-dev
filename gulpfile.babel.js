import gulp from 'gulp'

// Babel
import babel from 'gulp-babel'
import terser from 'gulp-terser' //Ofuscar
import concat from 'gulp-concat' //Concatena

//Pug
import pug from 'gulp-pug'
import cacheBust from 'gulp-cache-bust' //Evita problemas de caché
import formatHTML from 'gulp-format-html'

//Sass y PostCSS
import postCSS from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import sass from 'gulp-dart-sass'
import sourcemaps from 'gulp-sourcemaps'

// Servidor
import {init as server, stream, reload} from 'browser-sync'

//Comprimir Imagenes
import imagemin from 'gulp-imagemin'

//General 
import plumber from 'gulp-plumber'

//Variables 
const cssPlugins = [
    cssnano(),
    autoprefixer()
]

//Task for babel
gulp.task("babel", () => {
    return gulp
        .src("./src/scripts/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest("./public/script"));
});

// Task for pug
gulp.task("pug", () => {
    return gulp
        .src("./src/views/pages/*.pug")
        .pipe(plumber())
        .pipe(pug())
        .pipe(
            cacheBust({
                type: "timestamp",
            })
        )
/*         .pipe(formatHTML({
            'indent-size' : 4
        })) */
        .pipe(gulp.dest("./public"));
});

//Task for sass 
gulp.task('sass', () => {
    return gulp.src('./src/sass/pages/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync())
        .pipe(postCSS(cssPlugins))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/styles'))
        .pipe(stream())
})

//Task for minifier image
gulp.task('imagemin', () => {
    return gulp.src('./src/assets/images/*')
    .pipe(plumber())
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))    
    .pipe(gulp.dest('./public/assets/images'))
})

// Task for watch
gulp.task('default', () => {

    server({
        server: './public'
    })

    //watch para pug
    gulp.watch('./src/views/**/*.pug', gulp.series('pug')).on('change', reload)
    
    //watch para sass
    gulp.watch('./src/sass/**/*.scss', gulp.parallel('sass')).on('change', reload)
    
    //watch para babel
    gulp.watch('./src/scripts/**/*.js', gulp.series('babel')).on('change', reload)

    /* gulp.watch('./src/sass/**.scss', gulp.series('sass2')).on('change', reload)
 */
})