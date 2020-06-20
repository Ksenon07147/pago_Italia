/*This is a javascript file to validate the username and password if correct jump to logged homeppage*/


function check(){
	var username = document.getElementById("user").value;
	var password = document.getElementById("pass").value;


	if (user!="lim123"&&password!="testing"){
		alert("Username or password wrong, please enter again");
		return false;
		document.getElementById("user").focus();
		
	}
	else{
		alert("Welcome , Ms Lim Lay Kheng");
	}




}


























