require.config({
    paths: {
        "moment": "/moment/moment.js",
    }
});
define(["moment"], function (moment) {
    moment().format();
});