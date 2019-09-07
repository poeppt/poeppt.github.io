function canvasApp(){
	var e=document.createElement('canvas');
	e.classList='background';
	document.getElementById('matrixContainer').appendChild(e);
	if(!!e.getContext){
		var c=e.getContext('2d'),
		w=e.width=window.innerWidth,
		h=e.height=window.innerHeight,
		a=Array(300).join(0).split('');
		setInterval(function (){
			c.fillStyle='rgba(0,0,0,.07)';
			c.fillRect(0,0,w,h);
			c.fillStyle='#0AFF32';
			c.font='10px Georgia';
			a.map(function (e,w){
				text=String.fromCharCode(100+33*Math.random());
				x=10*w;
				c.fillText(text,x,e);
				e>100+3e4*Math.random()?a[w]=0:a[w]=e+10;
			});
		},45);
	}
}
canvasApp();
