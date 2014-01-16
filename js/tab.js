var pos = Array();
for(i=1;i<=8;i+=2){
	pos[i] = document.getElementById('t'+i).offsetTop;
}
window.onscroll = function(){
	var j=0;
	for(var i=1;i<=8;i+=2){
		var t = document.getElementById('t'+i);
		if(document.body.scrollTop>pos[i]-(160*j)){
			t.style.position = 'fixed';
			t.style.top = '0';
		}else{
			t.style.position = 'relative';
		}
		j++;
	}
}