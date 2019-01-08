/* ========== Contents ==========
 1. window.onload
 	a. Skrollr
	b. Snap.svg
 2. window.resize
================================= */

// ======== window.load ========
window.onload = function(){
	
	$(".bg").interactive_bg(); // Start Interactive Background
	setTimeout(function() {openLogoAnimation(1500)},2000); // Start Home Logo animation after 2 second delay

// __ a ___ Skrollr _____
	var sectHome = $('#sectHome');
	
	var s = skrollr.init({
		forceHeight:false, 
		smoothScrolling:true,
		/*keyframe: function(element, keyframe, direction) {
			if(element !== secthome ) {
				return;
			}
			if(keyframe === 'data-100-bottom' && direction === 'down' ) {
				console.log('yeessss');
			} else {
				return;
			}
    	}*/
	});
	
	skrollr.menu.init(s, {
		animate: true,
		easing: 'sqrt',
		scale: 1,
		duration: function(currentTop, targetTop) {
			//return 1000;
			return Math.abs(currentTop - targetTop) * 0.5; //easing
		},
		complexLinks: false,
	});
	
// __ b __ Snap.svg _____

//Home Logo Animation

	var homeLogo = Snap("#homeLogoSvg").attr({
		viewBox: "0 0 840 478" //responsive viewbox
	});

	var l_pt1 = homeLogo.rect(250.5,1.5,112,475);
	var l_pt2 = homeLogo.rect(250.5,362.5,339,114); 
	var nine_pt1 = homeLogo.rect(249.5,1.5,340,339); 
	var nine_pt2 = homeLogo.rect(362.5,1.5,114,475);
	var six_pt1 = homeLogo.rect(249.5,132.5,340,344);
	var six_pt2 = homeLogo.polygon(475.5,476.5,589.5,476.5,589.5,126.75,639.772,1.5,526.558,1.5,475.5,126.75);
	
	var l_pt = homeLogo.group(l_pt1, l_pt2); // letter L
	var nine_pt = homeLogo.group(nine_pt1, nine_pt2); // number 9
	var six_pt = homeLogo.group(six_pt1, six_pt2); // number 6
	var hlParts = homeLogo.group(l_pt, nine_pt, six_pt); //L96 grouped
	var logoOpen = false; //logo initially closed
	
	hlParts.attr({ //logo lines attributes
		fill:"transparent",
		stroke: "white",
		strokeWidth: 5
	});

	$('#sectAbout').mouseover(function() {
		hlParts.stop();
		if (logoOpen === true) {
			closeLogoAnimation(1500);
		}
	}).mouseout(function() {
		hlParts.stop();
		if (logoOpen === false) {
			openLogoAnimation(1500);
		}
	});
	
	
	function openLogoAnimation(t){ //Animation of logo opening
		logoOpen = true;
		l_pt1.animate({ transform: "t-249,0"}, t);
		l_pt2.animate({ transform: "t-249,0"}, t);
		nine_pt1.animate({ transform: "t-113,0"}, t);
		six_pt1.animate({ transform: "t249,0"}, t);
		six_pt2.animate({ transform: "t23,0"}, t);
		
	};
	function closeLogoAnimation(t){ //Animation of logo closing
		logoOpen = false;
		l_pt1.animate({ transform: "t0,0"}, t);
		l_pt2.animate({ transform: "t0,0"}, t);
		nine_pt1.animate({ transform: "t0,0"}, t);
		six_pt1.animate({ transform: "t0,0"}, t);
		six_pt2.animate({ transform: "t0,0"}, t);
	};
		
//Face Circle

	var aboutFace = Snap("#aboutFaceSvg").attr({
		viewBox: "100 100 200 200", //responsive viewbox
	});
	
	var afCircle = aboutFace.circle(200,200,96,96);
	var afCircleFlipped = aboutFace.circle(200,200,96,96);
	
	afCircle.attr({
		transform: "r270",
		fill:"transparent",
		stroke: "#30BCED",
		strokeDasharray: 1000,
		strokeDashoffset: 1000,
		strokeWidth: 3
	});

	afCircleFlipped.attr({
		transform: "s-1,1 r270",
		fill:"transparent",
		stroke: "#30BCED",
		strokeDasharray: 1000,
		strokeDashoffset: 1000,
		strokeWidth: 3
	});
	
	$('#sectAbout .sectContent').mouseover(function() { 
		afCircle.animate({ strokeDashoffset: 0}, 5000); 
		afCircleFlipped.animate({ strokeDashoffset: 0}, 5000);
	}).mouseout(function() { 
		afCircle.stop(); 
	});

}


//======== window.resize ========
$(window).resize(function() {
	$(".bg > .ibg-bg").css({ //responsive home background
    	width: $(window).outerWidth(),
        height: $(window).outerHeight()
    })
})