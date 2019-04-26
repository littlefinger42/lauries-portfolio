(function() {
  const threshold = 0.8;
  const animateClassName = "animateonscroll-animate";
  let _elements = [];
  let _intersectionObserver = null;

  /**
   * IntersectionObserver callback
   * @param  {Array<IntersectionObserverEntry>} entries
   * @param  {IntersectionObserver} observer
   */
  const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= threshold) {
        entry.target.classList.add(animateClassName);
        observer.unobserve(entry.target);
      }
    });
  };

  /**
   * Enable animateonscroll by create new IntersectionObserver observing each element with the data attribute
   */
  const enable = () => {
    _intersectionObserver = new IntersectionObserver(onIntersection, {
      rootMargin: "0% 50%",
      threshold: threshold
    });

    _elements = [].filter.call(
      document.querySelectorAll("[animateonscroll]"),
      _element => !_element.classList.contains(animateClassName)
    );

    _elements.forEach(_element => _intersectionObserver.observe(_element));
  };

  /**
   * Init
   * @param  {Object} settings
   * @return {Object} public API
   */
  const init = () => {
    if (!window.IntersectionObserver) {
      throw Error(`
		Your browser does not support IntersectionObserver!
	  `);
    }

    enable();
  };

  window.animateOnScroll = init;
})();

(function(){
	window.animateOnScroll();

	window.addEventListener('scroll', function(e) {
		var chapter = 0;
		if (chapter = 0) {
			
			chapter = 1;
			console.log(e);
		}
	});
})();
(function() {
	let activeTab;
	const tabs = document.querySelectorAll('[data-tabcontent]');

	tabs.forEach(node => {
		node.addEventListener('click', function() {
			if (activeTab) {
				activeTab.classList.remove('active');
			}
			activeTab = document.getElementById(node.getAttribute('data-tabcontent'));
			activeTab.classList.add('active');
		});
	});

})();