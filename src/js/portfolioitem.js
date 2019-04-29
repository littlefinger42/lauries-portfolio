(function() {
  const parsedUrl = new URL(window.location.href);

  function getPortItem(id) {
    return window.portfolioItems.find(portfolioItem => {
      return portfolioItem.background.src === id;
    });
  }

  if (parsedUrl.searchParams) {
    buildPage(getPortItem(parsedUrl.searchParams.get("id")));
  } else {
    alert("No portfolio ID provided. Please return to previous page!");
    return;
  }

  function buildPage(portItem) {
    document.querySelector("#portfolioItemTitle").innerText = portItem.title;
    document.querySelector("#portfolioItemDesc").innerText = portItem.desc;
    document.querySelector("#portfolioItemDate").innerText = portItem.date;
    var $visitSiteBtn = document.querySelector("#portfolioItemLink");
    if (!portItem.live) {
      $visitSiteBtn.style.display = "none";
    } else {
      $visitSiteBtn.href = portItem.url;
      $visitSiteBtn.title = portItem.url;
    }
  }
})();
