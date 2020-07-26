var holder=document.getElementsByClassName('slide_holder')[0];
	
	var count=2;
	var x=setInterval(change,3000);
	
	function change()
	{
		var image=document.getElementsByClassName('slide_image');
		image[count].style.animationName="faded";
		image[count].style.animationDuration="3s";
		image[count].style.animationFillMode="forwards";
		count--;
		if(count<=-1)
		{
			count=2;
			image[2].style.animationName="faded_rev";
			image[2].style.animationDuration="3s";
			image[2].style.animationFillMode="forwards";
			
			setTimeout(function (){for(i=0;i<2;i++)
			{
				image[i].style.opacity=1;
				image[i].style.animationName="none";
			}},3000);
		}
	}
	