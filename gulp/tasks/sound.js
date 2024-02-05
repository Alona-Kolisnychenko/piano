
export const sounds = ()=>{
    return app.gulp.src(app.path.src.sounds)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SOUNDS',
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.newer(app.path.build.sounds))
        .pipe(app.gulp.dest(app.path.build.sounds))
} 