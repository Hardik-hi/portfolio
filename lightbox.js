curr=0;//keeps index of the current image
function showgal(x)
{
var base=document.getElementsByClassName("child");
var image=(base[x-1].getElementsByTagName("img"))[0].src;
var pos=0;
document.getElementById("reel_image").src=image;

var id=setInterval(frame,90);
document.getElementById("reel_base").style.display="block";

function frame()
{
	if(pos == 10)
	{
		clearInterval(id);
	}
	else
	{
		pos++;
		document.getElementById("reel_base").style.opacity=pos/10;
	}
}
curr=x-1;
}
function hidegal()
{
document.getElementById("reel_base").style.opacity=0;
document.getElementById("reel_base").style.display="none";

}
function next()
{
var base=document.getElementsByClassName("child");
if(curr<base.length-1)
{

var image=(base[++curr].getElementsByTagName("img"))[0].src;

document.getElementById("reel_image").src=image;
}

}
function prev()
{

var base=document.getElementsByClassName("child");
if(curr>0)
{
var image=(base[--curr].getElementsByTagName("img"))[0].src;
document.getElementById("reel_image").src=image;
}
}

