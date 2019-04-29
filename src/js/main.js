(function() {
  window.animateOnScroll();

  const portfolioContainer = document.getElementById("sectPortfolio");

  for (var i = 0; i < window.portfolioItems.length; i++) {
    var article = document.createElement("article");
    article.classList.add("portfolio-item");
    article.setAttribute("id", portfolioItems[i].background.src);
    portfolioContainer.appendChild(article);

    if (portfolioItems[i].background.type === "video") {
      var videoElement = document.createElement("video");
      videoElement.setAttribute("autoplay", true);
      videoElement.setAttribute("loop", true);
      videoElement.muted = true;

      var sourceElementMp4 = document.createElement("source");
      sourceElementMp4.setAttribute("type", "video/mp4");
      sourceElementMp4.src =
        "videos/port/" + portfolioItems[i].background.src + ".mp4";
      var sourceElementWebm = document.createElement("source");
      sourceElementWebm.setAttribute("type", "video/webm");
      sourceElementWebm.src =
        "videos/port/" + portfolioItems[i].background.src + ".webm";

      videoElement.appendChild(sourceElementMp4);
      videoElement.appendChild(sourceElementWebm);
	  article.appendChild(videoElement);
	  
    } else if (portfolioItems[i].background.type === "img") {

      var imgElement = document.createElement("img");
      imgElement.src = "img/port/" + portfolioItems[i].background.src + ".jpg";
      imgElement.alt = portfolioItems[i].title + " portfolio image";
      article.appendChild(imgElement);
	}
	
    var buttonLink = document.createElement("a");
    buttonLink.textContent = "View " + portfolioItems[i].title;
    buttonLink.href = "/portfolio.html?id=" + portfolioItems[i].background.src;
    buttonLink.classList.add("btn-view", "p-small");
    buttonLink.classList.add("btn-view", "p-small");
    article.appendChild(buttonLink);
  }
})();
