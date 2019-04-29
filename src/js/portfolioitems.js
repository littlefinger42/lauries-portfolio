(function() {
  const portfolioItems = [
    {
      title: "Laura's Portfolio",
      desc:
        "My girlfriend, Laura Stout, is a professional animator and illustrator. She needed a website to help her apply for animation work. Using aspects from her animation portfolio, we create a beautiful yet simple design with parralex features. Due to the simplicity of Laura's site and the lack of operations, I was able to choose a static site generation library. The framework which I chose was Gatsby with React. Using Netlify's CMS and graphQL queries, I was able to build a system in which Laura can edit and add additional content. For styling I chose styled-components as it is a logical choice with Gatsby, component driven design.",
      url: "laurastout.com",
      date: "April 2019",
      live: true,
      background: {
        type: "video",
        src: "laurastout"
      }
    },
    {
      title: "Dix Cottages",
      desc:
        "Isobel was clear in her brief that she wanted her site to reflect the calm, beautiful appearance of her holiday cottages. She also found it important that the customers could easily navigate to her booking agency. No content management system was requested at the start of the brief so I initially began designing a static page. However, later down the project the client requested a news section to be added to the homepage. I resolved this by strapping wordpress to the static site and using PHP queries to display a loop of posts under the title “News”. Using clean, calm colours with the aid of photoshop I was able to design the site with the correct feel from the cottage, attracting potential holiday makers. I worked closely with a photographer to make sure we had the correct images for the front slider and the individual cottage pages.</p><p>This is one of the first websites I created and would love the opportunity to revisit it. I would update the styling with animations and a framework to make it responsive.",
      url: "dixcottage-thornham.co.uk",
      date: "March 2019",
      live: true,
      background: {
        type: "img",
        src: "dix"
      }
    },
    {
      title: "Brand Remastered",
      desc:
        "Brand remastered is an image and branding consultancy in Eindhoven, Netherlands. Arina Capatina, the sole proprietor of this business had a clear vision of what she wanted before starting discussion. It was important for her business to have a strong brand and clean website, consistent with that image. I was contracted for three individual tasks in this project: Logo, Business Cards and Website Design.</p><p>I started the project by brainstorming logo ideas. Starting with the logo gave clear direction to the other tasks; whilst staying consistent with the company image. The finished logo, designed in Illustrator CS6, can be seen on the top left corner of the site.</p><p>The web design stage was completed very quickly because the client requested that I base my design on a WordPress template she had bought for an old project. Although I would have liked more freedom, I stuck to the client’s brief.",
      url: "brandremastered.com",
      date: "",
      live: false,
      background: {
        type: "video",
        src: "brand"
      }
    },
    // {
    //   title: "Startup Stamford",
    //   desc:
    //     "Start-Up Stamford is a local charity competition hosted in Stamford, UK. Its aim is to help young people get started in business through mentoring and personalised investment. Start-Up Stamford's founder, Martin Fox, gave me the brief to create their website. He desired an attractive, modern site, which can easily be used and run by young people. The purpose of the site was to explain the background of the competition, and provide a platform on which contestants can enter. </p><p>I started the project with WordPress as I knew this is the CMS that the website manager will be familiar with. Normally I like to program original code and widgets, but as someone else would be managing the site after me, I opted to use WordPress plugins. This was to keep the admin interface as clean and simple as possible. After installing a basic theme, I added parallax scrolling elements, extra jQuery and my own child style sheet. I plan to update the site now my skills are more developed, to remove all bugs.",
    //   url: "stamford.youth-startup.org.uk",
    //   date: "September 2014",
    //   live: false,
    //   background: {
    //     type: "img",
    //     src: "startup"
    //   }
    // },
    {
      title: "School Website",
      desc:
        "This one-page site was completed as a task from a marketing agency, when I applied for a job a few years ago. I was given a screen shot and had to try and replicate as closely as I could to it with CSS; adding other features and styling if necessary.</p><p>Every component of this site was written by myself. Without the use of any framework or CMS, I was able to manage my own parallax scrolling layout and write my own JavaScript. This allowed me great freedom in the way I would display content or combat a bug. I am particularly happy with my use of transparency and CSS animations in this site. Different colour overlays and images create beautiful effects when scrolling. Although the marketing agency was impressed, I didn’t accept the job because I chose to relocate to the Netherlands.",
      url: "websites/school.zip",
      date: "November 2014",
      live: false,
      background: {
        type: "img",
        src: "school"
      }
    },
    {
      title: "English Bookshop",
      desc:
        "The English Bookshop is a bookshop in St Antonin, France. It is unique in the sense that it only sells English books, in a French speaking area. I was offered the project when new owners acquired the shop and wanted to modernise some aspects. Working directly with a graphic designer, we were given the task of creating a suitable logo and fitting site. The site was required to show the location of the shop, a little background information and the contact details. The client also requested that she could change the content herself if needed.</p><p>As a CMS was required, I started the project installing WordPress. After installing a basic theme, I added my own elements, extra responsive JavaScript and a child style sheet. Luckily, I was provided with large high resolution photos of the town. Using these I integrated a large slider to the homepage. I also added some parallax scrolling effects using them as background images.",
      url: "theenglishbookshop.org",
      date: "May 2015",
      live: true,
      background: {
        type: "img",
        src: "engbookshop"
      }
    },
    {
      title: "Albion",
      desc:
        "Albion were a new, fresh local band in Bourne, UK. They came to me in search of a modern, professional website. The purpose of the site was a central hub for their fans and a marketing tool to win more gigs. </p><p>They requested their own content management but stressed computer illiteracy. I realised that the band was already uploading media and content, but onto existing sites. For example, they uploaded all their music to bandcamp and all their gig dates to their google calendar. This gave me an idea. I was still able to avoid WordPress and write all the layout and styling from scratch, but I embedded applets from different sites to display their media. This was ideal for me because it gave me more flexibility to practice my skills creating the perfect design. Also, making it easier for the band to update their media, and distribute it to all devices. </p><p>I am proud of the unique layout of this site and believe it fitted their design criteria perfectly.",
      url: "websites/albion.zip",
      date: "November 2013",
      live: false,
      background: {
        type: "video",
        src: "albion"
      }
    },
    {
      title: "Movie Reviews",
      desc:
        "This site is the result of my final computing project in school. I was given the option to write in any language and I chose to develop my PHP skills. The entirety of this site is developed by myself. It shows good examples of data management, SQL queries and algorithms. Unfortuantly the mySQL database was lost when I left education.",
      url: "websites/reviews.zip",
      date: "December 2012",
      live: false,
      background: {
        type: "img",
        src: "reviews"
      }
    },
    {
      title: "Balloon Pins",
      desc:
        "Andrew Kaye has a strong passion for ballooning and wanted a website where he could sell his balloon pins. Unlike other sites I've created, graphics were not the key to this site. His criteria were: simplicity in adding new products and managing; simple layout for people to buy quickly; multiple currency options and payment options for overseas customers. Using OpenCart as my E-Commerce platform, I managed to fulfil each of these criteria. </p><p>This is one of the first websites I created and would enjoy revisiting it and updating the styling.",
      url: "websites/reviews.zip",
      date: "February 2013",
      live: true,
      background: {
        type: "video",
        src: "balloon"
      }
    }
  ];

  const parsedUrl = new URL(window.location.href);

  if (parsedUrl.pathname === '/') {
    const portfolioContainer = document.getElementById('sectPortfolio');
    for (var i = 0; i < portfolioItems.length; i++) {
      var article = document.createElement('article');
      article.classList.add('portfolio-item')
      article.setAttribute("id", portfolioItems[i].background.src);
      portfolioContainer.appendChild(article);
      if (portfolioItems[i].background.type==="video") {
        var videoElement = document.createElement('video');
        videoElement.setAttribute("autoplay", true);
        videoElement.setAttribute("loop", true);
        videoElement.muted = true;
        var sourceElementMp4 = document.createElement('source');
        sourceElementMp4.setAttribute('type', 'video/mp4');
        sourceElementMp4.src = "videos/port/" + portfolioItems[i].background.src + ".mp4";
        var sourceElementWebm = document.createElement('source');
        sourceElementWebm.setAttribute('type', 'video/webm');
        sourceElementWebm.src = "videos/port/" + portfolioItems[i].background.src + ".webm";
        videoElement.appendChild(sourceElementMp4);
        videoElement.appendChild(sourceElementWebm);
        article.appendChild(videoElement);
      } else if (portfolioItems[i].background.type==="img") {
        var imgElement = document.createElement('img');
        imgElement.src = "img/port/" + portfolioItems[i].background.src + ".jpg";
        imgElement.alt = portfolioItems[i].title + " portfolio image";
        article.appendChild(imgElement);
      }
      var buttonLink = document.createElement('a');
      buttonLink.textContent = "View " + portfolioItems[i].title;
      buttonLink.href = "/portfolio.html?id=" + portfolioItems[i].background.src;
      buttonLink.classList.add('btn-view', 'p-small');
      buttonLink.classList.add('btn-view', 'p-small');
      article.appendChild(buttonLink);
    }
  } else if (parsedUrl.pathname === '/portfolio.html') {
    console.log('on portfolio page0');
  }
console.log(parsedUrl.pathname);
  if (parsedUrl.searchParams) {
    console.log(parsedUrl.searchParams.get("portfolioItem")); // 123
  }
})();
