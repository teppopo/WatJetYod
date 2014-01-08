Search = function(){
	input = document.createElement('input');
	input.id = 'search';
	input.value = 'search...';
	
	input.onblur = function(){
		if(input.value==''){
			input.value = 'search...';
			input.style.color = '#aaaaaa';
		}
	};
	input.onfocus = function(){
		if(input.value=='search...'){
			input.value = '';
			input.style.color = '#666666';
		}
	};
	input.onchange = function(){
		if(input.value==''){
			input.style.color = '#aaaaaa';
			input.value = 'search...';
		}else{
			input.style.color = '#666666';
		}
	};
	return input;
}