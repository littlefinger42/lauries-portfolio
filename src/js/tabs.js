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