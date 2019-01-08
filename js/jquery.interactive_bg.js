! function(e) {
    var t = {
        strength: 20,
        scale: 1.03,
        animationSpeed: "500ms",
        contain: false,
        wrapContent: false
    };
    e.fn.interactive_bg = function(n) {
        return this.each(function() {
            var r = e.extend({}, t, n),
                i = e(this),
                s = i.outerHeight(),
                o = i.outerWidth(),
                u = r.strength / s,
                a = r.strength / o;
            if (r.contain == true) {
                i.css({
                    overflow: "hidden"
                })
            }
            if (r.wrapContent == false) {
                i.prepend("<div class='ibg-bg'></div>")
            } else {
                i.wrapInner("<div class='ibg-bg'></div>")
            }
            if (i.data("ibg-bg") !== undefined) {
                i.find("> .ibg-bg").css({
                    background: "url('" + i.data("ibg-bg") + "') no-repeat center center",
                    "background-size": "cover",
                    "background-attachment": "fixed"
                })
            }
            i.find("> .ibg-bg").css({
                width: o,
                height: s
            });
           
                i.mouseenter(function(e) {
                    if (r.scale != 1) i.addClass("ibg-entering");
                    i.find("> .ibg-bg").css({
                        "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        transform: "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-webkit-transition": "-webkit-transform " + r.animationSpeed + " linear",
                        "-moz-transition": "-moz-transform " + r.animationSpeed + " linear",
                        "-o-transition": "-o-transform " + r.animationSpeed + " linear",
                        transition: "transform " + r.animationSpeed + " linear"
                    }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        i.removeClass("ibg-entering")
                    })
                }).mousemove(function(e) {
                    if (!i.hasClass("ibg-entering") && !i.hasClass("exiting")) {
                        var t = e.pageX || e.clientX,
                            n = e.pageY || e.clientY,
                            t = t - i.offset().left - o / 2,
                            n = n - i.offset().top - s / 2,
                            f = a * t * -1,
                            l = u * n * -1;
                        i.find("> .ibg-bg").css({
                            "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-webkit-transition": "none",
                            "-moz-transition": "none",
                            "-o-transition": "none",
                            transition: "none"
                        })
                    }
                }).mouseleave(function(e) {
                    if (r.scale != 1) i.addClass("ibg-exiting");
                    i.addClass("ibg-exiting").find("> .ibg-bg").css({
                        "-webkit-transform": "matrix(1,0,0,1,0,0)",
                        "-moz-transform": "matrix(1,0,0,1,0,0)",
                        "-o-transform": "matrix(1,0,0,1,0,0)",
                        transform: "matrix(1,0,0,1,0,0)",
                        "-webkit-transition": "-webkit-transform " + r.animationSpeed + " linear",
                        "-moz-transition": "-moz-transform " + r.animationSpeed + " linear",
                        "-o-transition": "-o-transform " + r.animationSpeed + " linear",
                        transition: "transform " + r.animationSpeed + " linear"
                    }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        i.removeClass("ibg-exiting")
                    })
                })
            
        })
    }
}(window.jQuery)