<?php

?>
<html>
<head>
	<title>Wat Jed Yod</title>
	<link rel="stylesheet" type="text/css" href="styles/styles.css"/>
</head>
<body>
	<script src="js/search.js"></script>
	<script src="js/menu.js"></script>
	
	<div class="content">
		<div style="height:26px;font-size:18px;padding:20px 20px 20px 20px;margin:10px 5px 10px 5px;background:#ffffff url(./styles/gallery.png) no-repeat right;color:#0489B1;box-shadow:0 0 4px #888888;">
			<div id="gMenu">
				<a onmouseup="t=0;reset();getImages();">Around the Temple</a>
				<div style="float:left;width:1px;height:26px;background:url(./styles/dash.gif) repeat-y;"></div>
				<a onmouseup="t=1;reset();getImages();">Buddhism Activities</a>
			</div>
		</div>
		<div id="images" style="margin:5px 5px 5px 5px;"></div>
		<div class="counter" style="text-align:center;padding:0px 95px 0px 95px;margin:10px 0 10px 0;margin:0 auto;" onmouseup="s=s+unit+1;e=e+unit+1;setImages();">
			More Photos
		</div>
	</div>
	
	
	<script>
		var xhr = new XMLHttpRequest();
		var t = 0;
		var s = 0;
		var unit = 10;
		var e = unit;
		
		var paths = null;
		var images = null;
		
		Image = function(path,file){
			div = document.createElement('div');
			div.className = 'image';
			var img = document.createElement('img');
			img.src = path;
			div.appendChild(img);
			
			div.onmouseup = function(){
				window.open(img.src,'_blank');
			}
			return div;
		}
		
		function setImages(){
			var prefix = '';
			if(t==0){
				prefix = 'gallery/temple/';
			}else if(t==1){
				prefix = 'gallery/activities/';
			}
			for(i=s;i<e;i++){
				if(paths[i]!='' && paths[i]!=undefined && paths[i]!=null && paths[i]!='.' && paths[i]!='..'){
					var image = new Image(prefix+paths[i],paths[i]);
					document.getElementById('images').appendChild(image);
					images.push(image);
				}
			}
		}
		
		getImages();
		
		function getImages(){
			var params = "type="+t+"&start="+s+"&end="+e;
			xhr.open("POST", "list-process.php", true);
			
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.setRequestHeader("Content-length", params.length);
			xhr.setRequestHeader("Connection", "close");
			
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					//alert(xhr.responseText);
					paths = xhr.responseText.split('|');
					images = new Array();
					
					setImages();
				}
			};
			xhr.send(params);
		}
		
		function reset(){
			s = 0;
			e = unit;
			paths = null;
			images = null;
			document.getElementById('images').innerHTML = '';
		}
	</script>
	
	<script src="js/footer.js"></script>
</body>
</html>