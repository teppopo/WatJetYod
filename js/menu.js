Div = function(element,txt){
	div = document.createElement('div');
	div.innerHTML = txt;
	element.appendChild(div);
}

A = function(txt,link){
	a = document.createElement('a');
	a.innerHTML = txt;
	a.href = link;
	return a;
}

this.menu = document.createElement('div');
menu.className = 'menu';
menu.style.cssText = 'position:fixed;width:100%;height:70px;padding:10px 0 0 0;top:0;left:0;background-color:#ffffff;box-shadow:0 0 5px #888888;z-index:2;';
document.body.appendChild(menu);

var center = document.createElement('div');
center.id = 'mCenter';
center.style.cssText = 'margin:0 auto;width:1024px;';

var logo = document.createElement('img');
logo.src = 'styles/logo.png';
logo.style.cssText = 'float:left;margin-right:20px;padding-top:3px;';

var social = 'width:8px;height:34px;float:right;margin:13px 0 0 0;';
//Google+
var google = A('','https://plus.google.com/share?url=[URL]');
google.className = 'social';
google.style.cssText = social+'background:url(./styles/g.png) no-repeat 0 0;';
//Twitter
var twitter = A('','http://twitter.com/home?status=[TITLE]+[URL]');
twitter.className = 'social';
twitter.style.cssText = social+'background:url(./styles/t.png) no-repeat 0 0;';
//Facebook
var facebook = A('','http://www.facebook.com/share.php?u=www.google.co.th&title=TITLE');
facebook.className = 'social';
facebook.style.cssText = social+'background:url(./styles/f.png) no-repeat 0 0;';

//Menu
center.appendChild(logo);
center.appendChild(A('Intro','.'));
center.appendChild(A('Attraction','#'));
center.appendChild(A('History','#'));
center.appendChild(A('Gallery','gallery.php'));
center.appendChild(A('Map','#'));
center.appendChild(Search());
center.appendChild(facebook);
center.appendChild(twitter);
center.appendChild(google);
menu.appendChild(center);
