window.onload=function(){//注意：所有的代码哦度要写在这两个大括号内

	var
	out = document.getElementById('jianpan'),
	index,
	anniu,
	red = Math.floor(Math.random()*255),
	green = Math.floor(Math.random()*255),
	blue = Math.floor(Math.random()*255),
	suiji = Math.floor(Math.random()*121),
	jihe = [];
	for(var i = 0 ; i < 52 ; i ++){
		anniu = document.createElement('div');
		anniu.setAttribute('class','anniu');
		anniu.style.background = 'rgba(64, 87, 97, 0.6)' ;
		out.appendChild(anniu);
		anniu = document.getElementsByClassName('anniu');
	}
	for(var i=0 ; i < 52 ; i++ ){
		suiji = Math.floor(Math.random()*121);
		
		if( ( suiji <=90 &&  suiji>=65 ) || (suiji>=97 && suiji <= 122  ) ){
			anniu[i].innerHTML = String.fromCharCode(suiji);}
		else if(	anniu[i].innerHTML == '' && i>0){
			i-- ; }
		anniu[0].innerHTML = anniu[Math.floor(Math.random()*52)].innerHTML;
	}	
	var 
	jj = 59 ,
	xiao = document.getElementById('xiao');
	var body = document.getElementById('body'),guanbi = false;
document.onkeydown = function(e){
	var 
	top = out.firstElementChild;
	if(e.shiftKey){
		if(e.keyCode !== top.innerHTML.charCodeAt(0)) return;
	}else{
		if(e.keyCode+32 !== top.innerHTML.charCodeAt(0)) return;
	}
	top.style.background = 'white' ;
	out.removeChild(top);
	// if(out.children.length == 0 ) location.reload() ; 
	clearInterval(time); 
	time= setInterval(function(){
		jj-=1;
		xiao.innerHTML = jj ;
		if( jj <= 0 && out.children.length > 0 ){
			var tanchuang = document.createElement('div');
			tanchuang.setAttribute('class','tanchuang');
			body.appendChild(tanchuang);
			tanchuang.innerHTML = 'You are lose !'
			clearInterval(time); 
			guanbi = true ;
		}
		if(jj<=0){clearInterval(time);}
		if(jj!= 0 && out.children.length == 0){
			var tanchuang = document.createElement('div');
			tanchuang.setAttribute('class','tanchuang');
			body.appendChild(tanchuang);
			tanchuang.innerHTML = 'You are win !'
			clearInterval(time);
			guanbi = true ;
		}
		if(guanbi){
			var tanchuang = document.getElementsByClassName('tanchuang');
			tanchuang[0].onclick = function(){
				 location.reload() ;
			}
		}
	},1000);
	
	
}



































};/*这里是结束的那个花括号*/

