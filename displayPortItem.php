<?php
function displayPortItem() {
	echo '<div class="portItem">';
	if($array[$i][4]==0){
		echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
	} else {
		echo '<div class="portItemFixedHeight"><div class="portVideoContainer"><video autoplay loop muted class="fillWidth">';
		echo '<source type="video/youtube" src="http://www.youtube.com/watch?v=nOEw9iiopwI" />';
		echo '<source src="videos/'.$array[$i][0].'.mp4" type="video/mp4"/>';
		echo '<source src="videos/'.$array[$i][0].'.webm" type="video/webm"/>';
		echo '<img src="imgs/port/'.$array[$i][0].'.jpg" alt="'.$array[$i][1].'">';
		echo '</video></div></div>';
	}
	echo '<a class="btn btn-lg btn-primary-outline" href="portfolio.php?p='.$array[$i][0].'" target="_blank">'.$array[$i][1].'</a>';
	echo '</div>';	
};
?>