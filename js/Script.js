function checkPassword(){
   if(document.getElementById("pwd").value != document.getElementById("rpwd").value){
	  alert("Password Mismatch");
      return false;
   }
   else{
      alert("Now you are a registered customer");
      return true; 
   }
}

function enableButton(){
   if(document.getElementById("policy").checked){
     document.getElementById("bttn").disabled=false;
   }
   else{
     document.getElementById("bttn").disabled=true;
   }
}

function submission(){
	alert("Your inquiry is submitted");
}