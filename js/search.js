Search = function(){

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
			window.open('https://www.google.com/cse?cx=011928692024481225914:m2gkr7qmw5q&q='+input.value+'','_blank');
		}
	}
	return input;
}