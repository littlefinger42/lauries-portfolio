<!DOCTYPE html>
<html lang="en">

<!--#### Header ####-->
<head>
	<!-- Meta -->
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Laurie Copley">
    <meta name="description" content="Laurie Copley' Web Design Portfolio">
    <meta name="keywords" content="Laurie,Copley,Web Design,Portfolio,Front,End,Web,Design">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Laurie Copley - Portfolio</title>

    <!-- Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet"><!-- Bootstrap (also uses normalize) -->
	<link rel="stylesheet" type="text/css" href="css/main.css"><!-- Main Style Sheet -->

	<!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="imgs/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="imgs/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="imgs/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="imgs/favicons/manifest.json">
    <link rel="mask-icon" href="imgs/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

	<!-- Scripts -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> <!-- Jquery -->
    <script type="text/javascript"  src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/skrollr.min.js"></script>
	<script type="text/javascript" src="js/skrollr.menu.min.js"></script>
    <script type="text/javascript" src="js/snap.svg-min.js"></script> <!-- Snap -->
    <script type="text/javascript" src="js/jquery.interactive_bg.js"></script> <!-- Moving bg -->
	<script type="text/javascript" src="js/main.js"></script> <!-- Main JS script -->
 
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Josefin+Sans" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
</head>
<!--#### End Header ####-->



<!--#### Body ####-->
<body>
	<div id="skrollr-body">
    
<!-- Header Section -->
        <header id="sectHome" class="bg container-fluid" data-ibg-bg="imgs/homebg.jpg" data-100-bottom:"" data-emit-events>
            <div class="row row-no-padding sectContent">

                <div class="col-sm-12 container-fluid text-center">
                    <div class="row"> <!-- Home Logo Animation -->
						<svg id="homeLogoSvg"></svg>
					</div>
                    <div class="row"> <!-- Text underneath "Online Portfolio" -->
                    	<img id="homeLogo" src="imgs/onlineportfolio.png" alt="Online Portfolio of Laurie Copley">
                    </div>
                    <div class="row"> <!-- Home Nav Links -->
                    	<div class="navLinks homeLinks">
                        	<ul>
                            	<li><a href="#sectAbout">About</a></li><li><b>-</b></li>
                                <li><a href="#sectPortfolio">Portfolio</a></li><li><b>-</b></li>
                                <li><a href="#sectContact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- .col-sm-12 -->
                
            </div><!-- .row -->
        </header>

<!-- About Section -->
        <div id="sectAbout" class="container-fluid">
            <div class="row row-no-padding sameHeight">
            
                <div class="col-sm-6 sectTitle"><!-- sectTitle-->
					<!--<svg id="aboutTitleSvg"></svg>-->
                    <img alt="About Title" src="imgs/pageHeaders/about.png">
                    <div class="navLinks"><!-- NavLinks -->
                        	<ul>
                            	<li><a href="#sectHome">Home</a></li><li><b>-</b></li>
                                <li><a href="#sectPortfolio">Portfolio</a></li><li><b>-</b></li>
                                <li><a href="#sectContact">Contact</a></li>
                            </ul>
                    </div>
                </div>
                
                <div class="col-sm-6 sectContent text-center" data-bottom-top="opacity:0;" data-center-top="opacity:1;" data-center-bottom="opacity:1;" data-top-bottom="opacity:0;"><!-- Sect Content -->
                    <div class="col-sm-10 col-sm-offset-1 container">
                    	<div class="row"><!-- Introduction -->
                            <h1>Hi, my name is <strong>Laurie Copley</strong>.</h1>
                            <p>I am 22 years old and live in Eindhoven, Netherlands.</p>
                            <div id="sectAboutFace">
                                <div class="image-switcher">
                            	    <img src="imgs/me.jpg" alt="Picture of me">
                            	    <img src="imgs/me-alt.jpg" alt="Funny picture of me">
                                </div>
                            </div>
                        </div>
                        <div class="row"><!-- Two Columns -->
                            <div class="col-sm-6" >
                                <p><span class="firstcharacter">F</span>rom a young age I have been fascinated by <strong>design</strong> and <strong>computing</strong>. At the age of 13 I was running my own private game server from my home computer. From this I developed a <strong>passion</strong> for programming, and ever since have been striving to expand my knowledge on <strong>web development</strong>.</p>
                            </div>
                            <div class="col-sm-6">
                                <p><span class="firstcharacter">I</span> started my <strong>web development career</strong> providing minimal, clean and professional websites for holiday cottages. After years of self training, I was ready to build larger web solutions for big clients in the financial sector, incorporating <strong>REST</strong>, <strong>CMS</strong> and <strong>web applications</strong>.</p>
                            </div>
                        </div>
                        <div  class="row"><!-- Download Button -->
                        	<hr />
                            <!-- <div class="btn-group" role="group" aria-label="action_Buttons">
                            	<a href="downloads/lauriecopley_cv.pdf" target="_blank"><button type="button" class="btn btn-default">Download CV</button></a>
                            </div> -->
                        </div>
                    </div><!-- .container -->
                </div><!-- .sectContent -->
                
            </div><!-- .row -->
        </div><!-- #sectAbout -->
        
        
<!-- Portfolio Section -->
        <div id="sectPortfolio" class="container-fluid">
            <div class="row row-no-padding sameHeight">
            
                <div class="col-sm-6 portTitleTitle sectContent"> <!-- Portfolio Title -->
                	<div class="portTitle text-center">
                    	<img alt="Portfolio Title" src="imgs/pageHeaders/portfolio.png">
                    </div>
                </div>
                <div class="col-sm-6 sectContent container"><!-- Portfolio Content -->
                	<div class="row row-no-padding portTitle" data-bottom-top="opacity:0;" data-center-top="opacity:1;" data-center-bottom="opacity:1;" data-top-bottom="opacity:0;">
                    	<div class="col-sm-6 col-sm-offset-3 container text-center">
                    		<div class="row">
								<p>I believe in <strong>original</strong> code. This portfolio website demonstrates my <strong>raw web developing ability</strong>. The only parts not programmed by myself are highlighted in annotations. Feel free to check out my source code.</p>
                            </div>
                            <div class="row"><!-- Source Download Btn -->     
		                        <a class="btn btn-lg" href="src/source.zip" target="_blank" download><button type="button" class="btn btn-default btn-primary-outline">Portfolio Source</button></a>
                            </div>
                        </div>
                    </div>
            	</div>
			
            </div><!-- .row -->
            <div class="row row-no-padding sameHeight"><!-- Portfolio Items -->
                                      
                <div class="col-lg-6 container-fluid"><!-- Left Column -->
                    <?php	
                     	require_once('readPortDb.php');//read the txt file
                                                        
                        for($i=1;$i<sizeof($array);$i++) { //loop until end of array length
                         	if($i % 2 == 0) { //if portItem ID is odd
                               	echo '<div class="portItem">';//portItem container
                                if($array[$i][4]==0){//if portItem has an img
                                   	echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
								} else {//if portItem has a vid
                                   	echo '<div class="portItemFixedHeight"><div class="portVideoContainer"><video autoplay loop muted class="fillWidth">';
                                    echo '<source type="video/youtube" src="http://www.youtube.com/watch?v=nOEw9iiopwI" />';
                                    echo '<source src="videos/'.$array[$i][0].'.mp4" type="video/mp4"/>';
                                    echo '<source src="videos/'.$array[$i][0].'.webm" type="video/webm"/>';
                                    echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
                                    echo '</video></div></div>';
                                }
                                echo '<a class="btn btn-lg btn-primary-outline" href="portfolio.php?p='.$array[$i][0].'" target="_blank">'.$array[$i][1].'</a>';//portItem BTN overlay
                                echo '</div>';//.portItem
                            }
                        }
                    ?>
                </div>
                <div class="col-lg-6 container-fluid"><!-- Right Column -->
                    <?php	
                        for($i=1;$i<sizeof($array);$i++) { //loop until end of array length
                         	if($i % 2 != 0) { //if portItem ID is odd
                               	echo '<div class="portItem">';//portItem container
                                if($array[$i][4]==0){//if portItem has an img
                                   	echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
								} else {//if portItem has a vid
                                   	echo '<div class="portItemFixedHeight"><div class="portVideoContainer"><video autoplay loop muted class="fillWidth">';
                                    echo '<source type="video/youtube" src="http://www.youtube.com/watch?v=nOEw9iiopwI" />';
                                    echo '<source src="videos/'.$array[$i][0].'.mp4" type="video/mp4"/>';
                                    echo '<source src="videos/'.$array[$i][0].'.webm" type="video/webm"/>';
                                    echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
                                    echo '</video></div></div>';
                                }
                                echo '<a class="btn btn-lg btn-primary-outline" href="portfolio.php?p='.$array[$i][0].'" target="_blank">'.$array[$i][1].'</a>';//portItem BTN overlay
                                echo '</div>';//.portItem
                            }
                        }
					?>
                </div>
           
           </div><!-- .row -->
        </div><!-- #sectPortfolio -->
        
        
<!-- Contact Section -->
        <div id="sectContact" class="container">
            <div class="row row-no-padding sameHeight">
            
                <div class="col-sm-6 sectTitle"><!-- sectTitle -->
                    <img alt="Contact Title" src="imgs/pageHeaders/contact.png">
                    <div class="navLinks"><!-- Navlinks -->
                    	<ul>
                            <li><a href="#sectHome">Home</a></li><li><b>-</b></li>
                            <li><a href="#sectAbout">About</a></li><li><b>-</b></li>
                            <li><a href="#sectPortfolio">Portfolio</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-sm-6 sectContent text-center"> <!-- Sect Content -->
                	<div class="container-fluid">
                        <div class="row">
                            <p class="h2"><a href="https://www.linkedin.com/in/laurie-copley-ba4b43176/">linkedIn</a> is the best way to contact me</p>
                        </div>
                    </div><!-- .container -->
                </div><!-- .sectContent -->
                
            </div><!-- .row -->
        </div><!-- #sectContact -->
        
	</div>

    <!--<a href="MAILTO:lauriemail@protonmail.com"><div id="mailButton"><svg src="imgs/env.svg" width="20px"></svg></div></a> Mail Button -->
    
</body>
<!--#### END Body ####-->
</html>