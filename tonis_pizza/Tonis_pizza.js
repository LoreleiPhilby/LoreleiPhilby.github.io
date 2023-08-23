//this is the javascript file connected with Tonis_pizza.html//

//function calculates the total price of order//
function calctotal(){
  var margherita= document.getElementById("margherita").value; 
  var marinara= document.getElementById("marinara").value;
  var formaggi=document.getElementById("formaggi").value;
  var boscaiola= document.getElementById("boscaiola").value;

  var checkpizza1 = pizza1();
  var checkpizza2 =pizza2();
  var checkpizza3= pizza3();
  var checkpizza4 = pizza4();

  if (checkpizza1 && checkpizza2 && checkpizza3 && checkpizza4 ){
      var total = (margherita*6)+(marinara*5.50)+(formaggi*7)+(boscaiola*8);
      
  }
  else   {var total=0 }
  
  document.getElementById("total").innerHTML= "total " + total +" $";
}

//the function shows the hidden content inside the order now button div//
function orderNow() {


  calctotal();

  var x = document.getElementById("hiddendiv");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
//the following functions check input validation//

function pizza1(){
   var checkMargherita= document.getElementById("margherita").value;
   var regex= /^[0-9]{1,2}$/;
   var rangecheck= (checkMargherita >=0) && (checkMargherita<=10);

   if (regex.test(checkMargherita) && rangecheck)
   {
    document.getElementById("msgmargh").innerHTML= "<p class='valid'> La Regina per te'</p>";
    return true;
 }

 else {
    document.getElementById("msgmargh").innerHTML= "<p class='error'> for more than ten call out catering service. Info found at about section. </p>";
    return false;
 }
}

function pizza2(){
    var checkMarinara= document.getElementById("marinara").value;
    var regex= /^[0-9]{1,2}$/;
    var rangecheck= (checkMarinara >=0) && (checkMarinara<=10);
 
    if (regex.test(checkMarinara) && rangecheck)
    {
     document.getElementById("msgmarin").innerHTML= "<p class='valid'> La bellezza della simplicita'</p>";
     return true;
  }
 
  else {
     document.getElementById("msgmarin").innerHTML= "<p class='error'> for more than ten call out catering service. Info found at about section. </p>";
     return false;
  }
 }

 function pizza3(){
    var checkFormaggi= document.getElementById("formaggi").value;
    var regex= /^[0-9]{1,2}$/;
    var rangecheck= (checkFormaggi >=0) && (checkFormaggi <=10);
 
    if (regex.test(checkFormaggi ) && rangecheck)
    {
     document.getElementById("msgform").innerHTML= "<p class='valid'> Formaggio a volonta'</p>";
     return true;
  }
 
  else {
     document.getElementById("msgform").innerHTML= "<p class='error'> for more than ten call out catering service. Info found at about section. </p>";
     return false;
  }
 }

 function pizza4(){
    var checkBoscaiola= document.getElementById("boscaiola").value;
    var regex= /^[0-9]{1,2}$/;
    var rangecheck= (checkBoscaiola >=0) && (checkBoscaiola <=10);
 
    if (regex.test(checkBoscaiola ) && rangecheck)
    {
     document.getElementById("msgbosc").innerHTML= "<p class='valid'> I sapori della foresta </p>";
     return true;
  }
 
  else {
     document.getElementById("msgbosc").innerHTML= "<p class='error'> for more than ten call out catering service. Info found at about section. </p>";
     return false;
  }
 }





function checkFieldName()
            {
                var checkname = document.getElementById("fieldname").value;
                var regex =/^[A-Za-z ]{3,}$/;

                if (regex.test(checkname))
                {
                   document.getElementById("msgname").innerHTML= "<p class='valid'> Enjoy Amico!</p>";
                   return true;
                }

                else {
                   document.getElementById("msgname").innerHTML= "<p class='error'> Please insert Name and Surname  </p>";
                   return false;
                }
            }

function checkFieldAddress()
            {
                var checkAddress = document.getElementById("fieldaddress").value;
                var regex =/^[0-9A-Za-z ]{4,}$/;

                if (regex.test(checkAddress))
                {
                   document.getElementById("msgadd").innerHTML= "<p class='valid'> Enjoy Amico!</p>";
                   return true;
                }

                else {
                   document.getElementById("msgadd").innerHTML= "<p class='error'> Please insert Address </p>";
                   return false;
                }
            }

function validatenumber()
            {
              var cardnumber = document.getElementById("cnumber").value;
              var regex =/^[0-9]{16}$/;
              if (regex.test(cardnumber))
              {
                document.getElementById("msgcard").innerHTML="<p class='valid'> Enjoy Amico!</p>";
                return true;
                
              }
              else{
                document.getElementById("msgcard").innerHTML="<p class='error'>Enter only numbers, 16 digits</p>";
                return false;
              }            
            }
         
function validateccv()
            {
              var ccv = document.getElementById("ccv").value;
              var regex =/^[0-9]{3}$/;
              if (regex.test(ccv))
              {
                document.getElementById("msgccv").innerHTML="<p class='valid'> Enjoy Amico!</p>";
                return true;
              }
              else{
                document.getElementById("msgccv").innerHTML="<p class='error'>Enter only numbers, 3 digits</p>";
                return false;
              }            
            }            


      // the following fumction checks input is complete before alert on click shows up//
      
function Checkout() {

            var checkCardnumber = validatenumber();
            var checkCCV = validateccv();
            var checkname= checkFieldName();
            var checkAddress= checkFieldAddress();
            var checkpizza1 = pizza1();
            var checkpizza2 =pizza2();
            var checkpizza3= pizza3();
            var checkpizza4 = pizza4();



            if (checkCardnumber && checkCCV && checkname && checkAddress && checkpizza1 && checkpizza2 && checkpizza3 && checkpizza4 ) {
               alert("Your order will be delivered in 40-50 minutes!");
            } else {
               alert("Today, on your order's day, i will call upon you to check the fields for errors!");
            }

        
    }