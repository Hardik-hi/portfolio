//code to validate and send data to firebase

function validate(key){

var base=document.getElementsByClassName("field");
if(key==1){
var name=base[0].getElementsByTagName("input")[0].value;
var flag=0,i,error1=0;
if(name.length==0)
	{errmsg1="required field";
		error1=1;
	}
else{
for(i=0;i<name.length;i++)
{
if(name[i]<'A' || name[i]>'z')
{
	
	if(name[i]!=" ")
	{flag=1;
	break;}
	
}

}
if(flag==1)
	{errmsg1="Invalid name";
	error1=1;
	}
}
if(error1!=0)
{
document.getElementsByClassName("err")[0].innerHTML=errmsg1;
base[0].getElementsByTagName("input")[0].style.borderColor="red";
}
else
{
	document.getElementsByClassName("err")[0].innerHTML="";
	 base[0].getElementsByTagName("input")[0].style.borderColor="green";
}
return error1;
}
else if(key==2)
{
//for email
var mail=base[1].getElementsByTagName("input")[0].value;
var error2=0;
if(mail.length==0)
	{	
	var errmsg2="required field";
	error2=1;
	}
else{

if(mail.indexOf('@')<0 || mail.indexOf('.')<0 )
{errmsg2="Invalid E-mail";
	error2=1;
}
}
if(error2!=0)
{
document.getElementsByClassName("err")[1].innerHTML=errmsg2;
base[1].getElementsByTagName("input")[0].style.borderColor="red";
}
else if(error2==0)
	{document.getElementsByClassName("err")[1].innerHTML="" ;
	 base[1].getElementsByTagName("input")[0].style.borderColor="green";
	 }
return error2;

}



}

var firebaseConfig = {
    apiKey: "AIzaSyBiOF37Vn53bDRHPj5S-ADPzsrZvDrpd2Q",
    authDomain: "collab-data-portfolio.firebaseapp.com",
    databaseURL: "https://collab-data-portfolio.firebaseio.com",
    projectId: "collab-data-portfolio",
    storageBucket: "collab-data-portfolio.appspot.com",
    messagingSenderId: "11081966459",
    appId: "1:11081966459:web:9b19f87461aff35fba13de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var feedback_dest = firebase.database().ref();
  
  
  function submit_data()
  {
	 
	  
	  if((validate(1)+validate(2))==0)
	  {
		 
		  var base=document.getElementsByClassName("field");
		  var name=base[0].getElementsByTagName("input")[0].value;
		  
		  var mail=base[1].getElementsByTagName("input")[0].value;
		  var feedback=base[2].getElementsByTagName("textarea")[0].value;
		  sendMessage(name,mail,feedback);
		 
		  success_submit();
	  }
	  	  
	  
  }
  function sendMessage(name, mail, feedback) {
    let newDetails = feedback_dest.push();
    newDetails.set({
     feedback: feedback,
	 email: mail,
	 name: name,
      
    });
  }
function success_submit()
{
	document.getElementsByClassName('success_message')[0].style.display="block";
	document.getElementsByClassName('success_message')[0].style.animationName="success_all";
	document.getElementById('content_inner').innerHTML="Your valuable feedback is a blessing!";
	document.getElementById('content_inner').style.textAlign="center";
	document.getElementsByTagName('form')[0].style.display="none";
	
	
}
	
