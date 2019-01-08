<?php
//This file's purpose is too open txt file and split it to fill a 2D array.

$portFile = fopen("portFile.txt", "r"); //open Portfolio database
while(!feof($portFile)) { 
	$line = fgets($portFile); //fill line
	$line = trim($line, "\n"); //trim line
	$tokens = explode("@",$line); //seperate commas
						
	$array[] = $tokens; //Create the second dimension of the 2D array
}
fclose($portFile); //close database
?>