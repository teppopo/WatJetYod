<?php
	$num = file_get_contents('stats.txt', true);
	file_put_contents('stats.txt', $num+1);
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta name="google-site-verification" content="vSCKjasutaRZKhUtEEW1kaG8twRNy2L-x5WMjMRKewE" />
	<meta charset="UTF-8">
	<meta name="description" content="Wat Jet Yod, Chiang Mai Thailand ENTER SITE People Visited Times">
	<meta name="keywords" content="Wat Jet Yod, Chiang Mai Thailand ENTER SITE People Visited Times">
	<meta name="google-site-verification" content="aLPr_KRZzXU01-oshKXiVmLjURpomTodOitHa-xV6UU">
	<title>Wat Jed Yod</title>
	<link rel="stylesheet" type="text/css" href="styles/styles.css"/>
</head>
<body>
	<script src="js/hilitor.js"></script>
	<script src="js/search.js"></script>
	<script src="js/menu.js"></script>
	
	<div class="content">
		<iframe width="600" height="420" style="float:left;display:inline-block;" src="//www.youtube.com/embed/kdov4yK5oSA" frameborder="0" allowfullscreen></iframe>
		<div onclick="window.location.href = 'attraction.html'" style="width:420px;text-align:center;float:left;padding-top:80px;font-size:40px;color:#565656;cursor:pointer;">ENTER SITE
			<div style="font-size:20px;">Wat Jet Yod, Chiang Mai<br/> Thailand</div><br/>
			<div style="font-size:14px;">People Visited Times
				<div class="counter"><?php echo $num;?></div>
			</div>
		</div>
	</div>
	<script src="js/footer.js"></script>
</body>
</html>