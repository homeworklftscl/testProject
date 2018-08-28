const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/js/main.js",
  resolve: {
    modules: ["node_modules"],
    alias: {
      TweenLite: "gsap/src/minified/TweenLite.min.js",
      TweenMax: "gsap/src/minified/TweenMax.min.js",
      TimelineLite: "gsap/src/minified/TimelineLite.min.js",
      TimelineMax: "gsap/src/minified/TimelineMax.min.js",
      ScrollMagic: "scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
      "animation.gsap":
        "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
      "debug.addIndicators":
        "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      Swiper: "swiper"
    })
  ],
  output: {
    filename: "main.js"
  }
};