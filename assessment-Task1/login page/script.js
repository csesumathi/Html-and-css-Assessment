function validate() {
  var phone = document.getElementById("PhoneNumber-txt").value
   if (phone!== "")
  {
    var regeX = /[7-9]\d{9}/;
    if (regeX.test(phone))
    {
      
    }
    else {
      alert("invalid")
    }
   
  }
  else {
    alert("THANK YOU FOR SUBMITTING")
  }
 
  
}
    

    















