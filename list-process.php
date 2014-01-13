<?php
function listFile($dir,$start,$end) {
	$arr = Array();
	//foreach (array_slice(scandir($dir),$start,$end) as $path) { //configure path
	foreach (scandir($dir) as $path) { 
		array_push($arr,$path);
	}
	return $arr;
}

$response = "";
if(isset($_POST["type"]) && isset($_POST["start"]) && isset($_POST["end"])){
	$arr = Array();
	if($_POST["type"]=='0'){
		$arr = listFile("gallery/temple",$_POST["start"],$_POST["end"]);
	}else if($_POST["type"]=='1'){
		$arr = listFile("gallery/activities",$_POST["start"],$_POST["end"]);
	}
	
	foreach($arr as $value){
		$response .= $value."|";
	}
}
echo $response;
?>