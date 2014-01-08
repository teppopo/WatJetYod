this.footer = document.createElement('div');
footer.id = 'footer';
footer.style.cssText = 'width:100%;height:100px;display:block;float:left;text-align:center;background-color:#ffffff;border-top:solid 1px #dddddd;';

var footName = document.createElement('div');
footName.className = 'footTab';
Div(footName,'<br/>Jakkaphan Luwattana, Chollutai Seelapan');
//Div(footName,'Chollutai Seelapan');
Div(footName,'Chanchai Suksang, Peerapong Chompootepa');
//Div(footName,'Peerapong Chompootepa');
Div(footName,'Witsarus Suninhong, Sawatdiporn Kitirot');
//Div(footName,'Sawatdiporn Kitirot');

var footId = document.createElement('div');
footId.className = 'footTab';
Div(footId,'542115008');
Div(footId,'542115013');
Div(footId,'542115014');
Div(footId,'542115044');
Div(footId,'542115058');
Div(footId,'542115065');

var se = document.createElement('div');
se.className = 'footTab';
Div(se,'<br/>SE Training Camp Project,<br/>Developed by<br/>Delta Collaboration Group');

var end = document.createElement('div');
end.style.cssText = 'float:right;';
end.innerHTML = '&emsp;<br/>College of Arts Media and Technology, Chiang Mai University 2014.';

var foot = document.createElement('div');
foot.style.cssText = 'display:block;width:1024px;margin:0 auto;';
foot.innerHTML += '<img src="styles/10th.png" style="float:left;padding:15px 20px 0 20px;"/>';
foot.appendChild(se);
foot.appendChild(footName);
//footer.appendChild(footId);

var footMenu = document.createElement('div');
footMenu.style.cssText = 'float:right;';
footMenu.innerHTML += '<br/>';
footMenu.appendChild(A('Map','#'));
footMenu.appendChild(A('Gallery','#'));
footMenu.appendChild(A('History','#'));
footMenu.appendChild(A('Attraction','#'));
footMenu.appendChild(A('Intro','#'));

foot.appendChild(footMenu);
foot.appendChild(end);
footer.appendChild(foot);

document.body.appendChild(footer);