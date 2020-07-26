function animate_ham()
{
	var back=document.getElementById('m_navbar');
	var x=document.getElementsByClassName('inner');
	if(back.style.display==='block')
	{
	x[0].style.animationName="upperbar_rev";
	x[0].style.animationDuration="1s";
	
	x[2].style.animationName="lowerbar_rev";
	x[2].style.animationDuration="1s";
	
	x[1].style.animationName="middlebar_rev";
	x[1].style.animationDuration="3s";
	
	back.style.display="none";
	
	}
	else	
		
	{
	
	x[0].style.animationName="upperbar";
	x[0].style.animationDuration="1s";
	//x[0].style.animationDirection="normal";
	x[0].style.animationFillMode="forwards";
	
	x[2].style.animationName="lowerbar";
	x[2].style.animationDuration="1s";
	x[2].style.animationFillMode="forwards";
	
	x[1].style.animationName="middlebar";
	x[1].style.animationDuration="2s";
	x[1].style.animationFillMode="forwards";
	
	back.style.display="block";
	back.style.animationName="menuload";
	back.style.animationDuration="3s";
	
	document.getElementsByClassName('outer')[0].zIndex="100";
	
	
	var i=0;
	
	x=setInterval(appear,500);
	
	function appear()
	{
		document.getElementsByClassName('m_top')[i].style.animationName="slider_left";
		document.getElementsByClassName('m_top')[i].style.animationDuration="1s";
		document.getElementsByClassName('m_top')[i].style.animationFillMode="forwards";
		i++;
		if(i>=5)
			clearInterval(x);
	}
	
	}
	
	
}
