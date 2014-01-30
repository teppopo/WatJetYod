Search = function(){
	//hilitor
	/*var hljs = document.createElement("script");
	hljs.type = 'text/javascript';
	hljs.src = 'js/hilitor.js';
	document.body.appendChild(hljs);*/

	input = document.createElement('input');
	input.id = 'search';
	input.value = 'Search...';
	input.type = 'search';
	
	var hilitor = new Hilitor("");
	
	input.onblur = function(){
		if(input.value==''){
			input.value = 'Search...';
			input.style.color = '#aaaaaa';
		}
	};
	input.onfocus = function(){
		if(input.value=='Search...'){
			input.value = '';
			input.style.color = '#666666';
		}
	};
	input.onchange = function(){
		if(input.value==''){
			input.style.color = '#aaaaaa';
			input.value = 'Search...';
			hilitor.remove();
		}
	};
	input.onkeyup = function(){
		if(input.value!='Search...'){
			input.style.color = '#666666';
			hilitor.apply(input.value);
		}
	};
	input.onkeydown = function(e){
		if(e.which==13 && location.pathname.substring(location.pathname.lastIndexOf("/")+1)!='map.html'){
			window.open('http://www.google.com/search?q='+input.value);//+' site: watjetyod.webege.com','_blank');
		}
	}
	return input;
}