<?php
function listFile($dir) {
	return glob($dir."/*.{png,gif,jpg,jpeg,PNG,GIF,JPG,JPEG}", GLOB_BRACE);//$arr;
}

$response = "";
if(isset($_POST["type"])){
	$arr = Array();
	if($_POST["type"]=='0'){
		$arr = listFile("gallery/temple");
	}else if($_POST["type"]=='1'){
		$arr = listFile("gallery/activities");
	}
	
	foreach($arr as $value){
		$response .= $value."|";
	}
}
echo $response;
?>