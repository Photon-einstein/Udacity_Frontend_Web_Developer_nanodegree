const gulp = require("gulp");
const shell = require("gulp-shell");

const parcelEntryPoint = "index.html";

gulp.task("serve-parcel", shell.task(`parcel ${parcelEntryPoint}`));

gulp.task("test", shell.task("mocha --require @babel/register 'test/**/*.js'"));

gulp.task("default", gulp.series("serve-parcel"));
