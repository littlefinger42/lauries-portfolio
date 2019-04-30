(function() {
  const parsedUrl = new URL(window.location.href);

  /**
   * Gets portfolio item object with ID
   * @param {String} id 
   */
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

  /**
   * Builds page with the portItem object data
   * @param {Object} portItem 
   */
  function buildPage(portItem) {
    document.querySelector("#portfolioItemTitle").innerText = portItem.title;
    document.querySelector("#portfolioItemDesc").innerText = portItem.desc;
    document.querySelector("#portfolioItemDate").innerText = portItem.date;
    var $visitSiteBtn = document.querySelector("#portfolioItemLink");
    var $portfolioSourceBtn = document.querySelector("#portfolioSourceLink");
    var $portfolioImage = document.querySelector("#portfolioImage");
    if (!portItem.screenshot) {
      $portfolioImage.style.display = "none";
    } else {
      $portfolioImage.src = "../img/screens/" + portItem.background.src + ".png";;
      $portfolioImage.alt = portItem.background.src + " screenshot";;
    }
    if (portItem.url === "") {
      $visitSiteBtn.style.display = "none";
    } else {
      $visitSiteBtn.href = portItem.url;
      $visitSiteBtn.title = portItem.url;
    }
    if (portItem.download === "") {
      $portfolioSourceBtn.style.display = "none";
    } else {
      $portfolioSourceBtn.href = portItem.download;
      $portfolioSourceBtn.title = portItem.download;
    }
  }
})();
