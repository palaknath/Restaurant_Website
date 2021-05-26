function  validate() {
  var guests = document.getElementById("guests");
  var phonenumber = document.getElementById("phone");
  var datebooking = document.getElementById("bookingtime");

  if(guests.value =="" || phonenumber.value =="" || datebooking.value ==""){
    alert("Please fill in the details");
  }
  else{
    alert("Values filled"); //php goes here
  }
}