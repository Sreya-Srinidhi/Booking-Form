$(document).ready(function () {

  let username = $("#username");
  let firstName = $("#first-name");
  let lastName = $("#last-name");
  let phoneNum = $("#phone");
  let faxNum = $("#fax");
  let email = $("#email");
  let adults = $("#adults");
  let checkIn = $("#check-in");
  let checkOut = $("#check-out");
  let days = $("#days");
  let cost = $("#cost");
  
  toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "preventDuplicates": true,
    "positionClass": "toast-top-right",
    "timeOut": "5000"
  };
  
  $("#submit").click(function(e){
    e.preventDefault();
    let flag = false;
    if(username.val().trim() === ""){
      username.offsetParent().addClass("has-error");
      toastr.error("Username is missing \n");
      flag = true;
    }
    if(firstName.val().trim() === ""){
      firstName.offsetParent().addClass("has-error");
      toastr.error("First Name is missing \n");
      flag = true;
    }
    if(lastName.val().trim() === ""){
      lastName.offsetParent().addClass("has-error");
      toastr.error("Last Name is missing \n");
      flag = true;
    }
    if(phoneNum.val().trim() === ""){
      phoneNum.offsetParent().addClass("has-error");
      toastr.error("Phone number is missing \n");
      flag = true;
    }
    if(faxNum.val().trim() === ""){
      faxNum.offsetParent().addClass("has-error");
      toastr.error("Fax number is missing \n");
      flag = true;
    }
    if(email.val().trim() === ""){
      email.offsetParent().addClass("has-error");
      toastr.error("Email is missing \n");
      flag = true;
    }
    if(checkIn.val().trim() === ""){
      checkIn.offsetParent().addClass("has-error");
      toastr.error("Check-in date is missing \n");
      flag = true;
    }    
    if(checkOut.val().trim() === ""){
      checkOut.offsetParent().addClass("has-error");
      toastr.error("Check-out date is missing \n");
      flag = true;
    }
    
    if(cost.val() < 0){
      checkIn.offsetParent().addClass("has-error");
      checkOut.offsetParent().addClass("has-error");
      cost.offsetParent().addClass("has-error");
      days.offsetParent().addClass("has-error");
      toastr.error("Invalid dates \n");
      flag = true;
    }
    
    if(cost.val() == 0){
      cost.offsetParent().addClass("has-error");
      toastr.error("No cost calculated \n");
      flag = true;
    }
    
    if (!flag){
      toastr.success("Successfully Submitted");
      reset();
    }
  });    
});

$(document).ready(function(){
  $("#reset-button").on("click", function(){
    reset();
    toastr.info("Reset Successful");
  });
});

function reset(){  
  $("#username").val("");
  $("#username").offsetParent().removeClass("has-error");
  $("#first-name").val("");
  $("#first-name").offsetParent().removeClass("has-error");
  $("#last-name").val("");
  $("#last-name").offsetParent().removeClass("has-error");
  $("#phone").val("");
  $("#phone").offsetParent().removeClass("has-error");
  $("#fax").val("");
  $("#fax").offsetParent().removeClass("has-error");
  $("#email").val("");
  $("#email").offsetParent().removeClass("has-error");
  $("#check-in").val("");
  $("#check-in").offsetParent().removeClass("has-error");
  $("#check-out").val("");
  $("#check-out").offsetParent().removeClass("has-error");
  $("#days").val("");
  $("#days").offsetParent().removeClass("has-error");
  $("#cost").val("");
  $("#cost").offsetParent().removeClass("has-error");
  $("#message").val("");
  $("#range").val("50");
  $("#low").prop("checked", true);
  $("#adults").val("1");
}

$(document).ready(function () {
  $("#check-in, #check-out, #adults").on("change", function(){
    let checkInDate = moment($("#check-in").val(), "YYYY-MM-DD");
    let checkOutDate = moment($("#check-out").val(), "YYYY-MM-DD");
    if(Boolean(checkInDate) && Boolean(checkOutDate)){
      let days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      $("#days").val(days);
      $("#cost").val(days * $("#adults").val() * 150);
    }
  });
});
