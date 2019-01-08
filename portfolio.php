<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<!-- Meta -->
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laurie Copley - Portfolio</title>
    
    <!-- Scripts -->
    <script type="text/javascript"  src="js/bootstrap.min.js"></script><!-- Bootstrap -->
    
    <!-- Stylesheets -->
    <link href="css/portfolio.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet"><!-- Bootstrap (also uses normalize) -->
</head>

<body>
    <div class="container-fluid">
    	<div class="row">
			<div class="col-sm-2">
				<?php
                    require_once('readPortDb.php');//read the txt file
                    $portSite = $_GET['p'];//get portfolio site requested
                    
                    for($i=0;$i<sizeof($array);$i++) {
                        if($array[$i][0] == $portSite) {
							echo '<div class="page-header"><h1>'.$array[$i][1].'<br><small>'.$array[$i][3].'</small></h1></div>';
							echo '<p>'.$array[$i][7].'</p>';
							echo '<a class="btn btn-lg" href="http://l96.nl/">Back</a><a class="btn btn-lg" href="'.$array[$i][2].'" target="_blank">Visit Site</a>';
							echo '</div><div class="col-lg-10 iframeContainer">';
							if($array[$i][6] == 0) {
	                            echo '<iframe src="'.$array[$i][2].'" width="100%" height="900px"></iframe>';
							} else {
								echo '<p>This sites SQL database has been lost. Therefore it cant display any data or movies. Feel free to download the source code here.</p>';
								echo '<a class="btn btn-lg" href="src/'.$array[$i][0].'.zip" target="_blank" download>Download Source</a>';
							}
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</body>
</html>