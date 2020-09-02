//Personal Details validation.
function validation(shopping) {

  var invalid_name = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g; //regular expression
  var invalid_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regular expression
  var invalid_address = /[0-9a-zA-Z]+(,[0-9a-zA-Z]+)*/; //regular expression
  var invalid_telephone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //regular expression

  if(shopping.fullname.value == "") {
    alert("This field is mandatory!");
    shopping.fullname.focus();
    return false
  } else if(!invalid_name.test(shopping.fullname.value)) {
    alert("Invalid name!");
    shopping.fullname.focus();
    return false;
  }
  if(shopping.telephone.value == "") {
    alert("This field is mandatory!");
    shopping.telephone.focus();
    return false;
  } else if(!invalid_telephone.test(shopping.telephone.value)) {
    alert("Invalid telephone number!");
    shopping.telephone.focus();
    return false;
  }
  if(shopping.email.value == "") {
    alert("This field is mandatory!");
    shopping.email.focus();
    return false;
  } else if(!invalid_email.test(shopping.email.value)) {
    alert("Invalid email address!");
    shopping.email.focus();
    return false;
  }
  if(shopping.address.value == "") {
    alert("This field is mandatory!");
    shopping.address.focus();
    return false;
  } else if(!invalid_address.test(shopping.address.value)) {
    alert("Invalid delivery address!");
    shopping.address.focus();
    return false;
  }
  if(shopping.deliverydetails.value == "") {
    alert("This field is mandatory!");
    shopping.deliverydetails.focus();
    return false;
  }
  if(!shopping.termsandconditions.checked) {
    alert("You didn't agree to our terms and conditions!");
    shopping.termsandconditions.focus();
    return false;
  }
  if((products == "") || (bill == "") || (numberOfItems == "")) {
    alert("You have to buy at least one product!");
    return false;
  }
  return true;
}

//Shop main script.
var prices = [150, 80, 150, 900, 1500, 2500, 1000, 100, 60, 150, 200, 10, 25, 20, 40, 130, 70], //array for prices
    numbersOnly = /^[0-9]+$/, //regular expression
    products = [], //array to keep the products names
    numberOfItems = [], //array to keep  the quantity the user inputed
    bill = [], //array to calculate the bill
    totalBill = 0;

//Add products to the cart.
function add_product1() {
  var product1,
    numberOfItems1 = document.getElementById("quantity1").value;
    if(numberOfItems1 == "") {
      alert("You need to choose the quantity before adding the item to cart!");
    } else if(!numbersOnly.test(numberOfItems1) || (numberOfItems1 == 0)) {
      alert("Invalid input!");
    } else {
      products.push("FENDER SQUIER BULLET STRATOCASTER");
      numberOfItems.push(numberOfItems1);
      var totalPrice1 = prices[0]*numberOfItems1;
      bill.push(totalPrice1);
      document.getElementById("addToCart1").innerHTML = "Added to Cart";
      document.getElementById("addToCart1").disabled = true;
      document.getElementById("removeFromCart1").style.visibility = "visible";
      document.getElementById("quantity1").disabled = true;
    }
}
function add_product2() {
  var product2,
    numberOfItems2 = document.getElementById("quantity2").value;
    if(numberOfItems2 == "") {
      alert("You need to choose the quantity before adding the item to cart!");
    } else if(!numbersOnly.test(numberOfItems2) || (numberOfItems2 == 0)) {
      alert("Invalid input!");
    } else {
      products.push("YAMAHA F310");
      numberOfItems.push(numberOfItems2);
      var totalPrice2 = prices[1]*numberOfItems2;
      bill.push(totalPrice2);
      document.getElementById("addToCart2").innerHTML = "Added to Cart";
      document.getElementById("addToCart2").disabled = true;
      document.getElementById("removeFromCart2").style.visibility = "visible";
      document.getElementById("quantity2").disabled = true;
    }
}
function add_product3() {
  var product3,
    numberOfItems3 = document.getElementById("quantity3").value;
    if(numberOfItems3 == "") {
      alert("You need to choose the quantity before adding the item to cart!");
    } else if(!numbersOnly.test(numberOfItems3) || (numberOfItems3 == 0)) {
      alert("Invalid input!");
    } else {
      products.push("BATON ROUGE V2");
      numberOfItems.push(numberOfItems3);
      var totalPrice3 = prices[2]*numberOfItems3;
      bill.push(totalPrice3);
      document.getElementById("addToCart3").innerHTML = "Added to Cart";
      document.getElementById("addToCart3").disabled = true;
      document.getElementById("removeFromCart3").style.visibility = "visible";
      document.getElementById("quantity3").disabled = true;
    }
}
function add_product4() {
  var product4,
    numberOfItems4 = document.getElementById("quantity4").value;
    if(numberOfItems4 == "") {
      alert("You need to choose the quantity before adding the item to cart!");
    } else if(!numbersOnly.test(numberOfItems4) || (numberOfItems4 == 0)) {
      alert("Invalid input!");
    } else {
      products.push("MARCUS MILLER V7 BASS");
      numberOfItems.push(numberOfItems4);
      var totalPrice4 = prices[3]*numberOfItems4;
      bill.push(totalPrice4);
      document.getElementById("addToCart4").innerHTML = "Added to Cart";
      document.getElementById("addToCart4").disabled = true;
      document.getElementById("removeFromCart4").style.visibility = "visible";
      document.getElementById("quantity4").disabled = true;
    }
}
function add_product5() {
  var product5,
    numberOfItems5 = document.getElementById("quantity5").value;
    if(numberOfItems5 == "") {
      alert("You need to choose the quantity before adding the item to cart!");
    } else if(!numbersOnly.test(numberOfItems5) || (numberOfItems5 == 0)) {
      alert("Invalid input!");
    } else {
      products.push("YAMAHA PSR-E463");
      numberOfItems.push(numberOfItems5);
      var totalPrice5 = prices[4]*numberOfItems5;
      bill.push(totalPrice5);
      document.getElementById("addToCart5").innerHTML = "Added to Cart";
      document.getElementById("addToCart5").disabled = true;
      document.getElementById("removeFromCart5").style.visibility = "visible";
      document.getElementById("quantity5").disabled = true;
    }
}
function add_product6() {
    var product6,
      numberOfItems6 = document.getElementById("quantity6").value;
      if(numberOfItems6 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems6) || (numberOfItems6 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("YAMAHA YDP-143 B ARIUS");
        numberOfItems.push(numberOfItems6);
        var totalPrice6 = prices[5]*numberOfItems6;
        bill.push(totalPrice6);
        document.getElementById("addToCart6").innerHTML = "Added to Cart";
        document.getElementById("addToCart6").disabled = true;
        document.getElementById("removeFromCart6").style.visibility = "visible";
        document.getElementById("quantity6").disabled = true;
      }
}
function add_product7() {
    var product7,
      numberOfItems7 = document.getElementById("quantity7").value;
      if(numberOfItems7 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems7) || (numberOfItems7 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("ROLAND TD-17KVX E-DRUM SET");
        numberOfItems.push(numberOfItems7);
        var totalPrice7 = prices[6]*numberOfItems7;
        bill.push(totalPrice7);
        document.getElementById("addToCart7").innerHTML = "Added to Cart";
        document.getElementById("addToCart7").disabled = true;
        document.getElementById("removeFromCart7").style.visibility = "visible";
        document.getElementById("quantity7").disabled = true;
      }
}
function add_product8() {
    var product8,
      numberOfItems8 = document.getElementById("quantity8").value;
      if(numberOfItems8 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems8) || (numberOfItems8 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("LP LPH601-SMC BONGOS");
        numberOfItems.push(numberOfItems8);
        var totalPrice8 = prices[7]*numberOfItems8;
        bill.push(totalPrice8);
        document.getElementById("addToCart8").innerHTML = "Added to Cart";
        document.getElementById("addToCart8").disabled = true;
        document.getElementById("removeFromCart8").style.visibility = "visible";
        document.getElementById("quantity8").disabled = true;
      }
}
function add_product9() {
    var product9,
      numberOfItems9 = document.getElementById("quantity9").value;
      if(numberOfItems9 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems9) || (numberOfItems9 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("SCHLAGWERK CP4007 CAJON");
        numberOfItems.push(numberOfItems9);
        var totalPrice9 = prices[8]*numberOfItems9;
        bill.push(totalPrice9);
        document.getElementById("addToCart9").innerHTML = "Added to Cart";
        document.getElementById("addToCart9").disabled = true;
        document.getElementById("removeFromCart9").style.visibility = "visible";
        document.getElementById("quantity9").disabled = true;
      }
}
function add_product10() {
    var product10,
      numberOfItems10 = document.getElementById("quantity10").value;
      if(numberOfItems10 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems10) || (numberOfItems10 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("FENDER FRONTMAN 10G");
        numberOfItems.push(numberOfItems10);
        var totalPrice10 = prices[9]*numberOfItems10;
        bill.push(totalPrice10);
        document.getElementById("addToCart10").innerHTML = "Added to Cart";
        document.getElementById("addToCart10").disabled = true;
        document.getElementById("removeFromCart10").style.visibility = "visible";
        document.getElementById("quantity10").disabled = true;
      }
}
function add_product11() {
    var product11,
      numberOfItems11 = document.getElementById("quantity11").value;
      if(numberOfItems11 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems11) || (numberOfItems11 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("ROLAND MOBILE CUBE B-STOCK");
        numberOfItems.push(numberOfItems11);
        var totalPrice11 = prices[10]*numberOfItems11;
        bill.push(totalPrice11);
        document.getElementById("addToCart11").innerHTML = "Added to Cart";
        document.getElementById("addToCart11").disabled = true;
        document.getElementById("removeFromCart11").style.visibility = "visible";
        document.getElementById("quantity11").disabled = true;
      }
}
function add_product12() {
    var product12,
      numberOfItems12 = document.getElementById("quantity12").value;
      if(numberOfItems12 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems12) || (numberOfItems12 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("MARTIN PREMIUM DELRIN GUITAR PICKS");
        numberOfItems.push(numberOfItems12);
        var totalPrice12 = prices[11]*numberOfItems12;
        bill.push(totalPrice12);
        document.getElementById("addToCart12").innerHTML = "Added to Cart";
        document.getElementById("addToCart12").disabled = true;
        document.getElementById("removeFromCart12").style.visibility = "visible";
        document.getElementById("quantity12").disabled = true;
      }
}
function add_product13() {
    var product13,
      numberOfItems13 = document.getElementById("quantity13").value;
      if(numberOfItems13 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems13) || (numberOfItems13 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("FENDER ELECTRIC GUITAR STRINGS");
        numberOfItems.push(numberOfItems13);
        var totalPrice13 = prices[12]*numberOfItems13;
        bill.push(totalPrice13);
        document.getElementById("addToCart13").innerHTML = "Added to Cart";
        document.getElementById("addToCart13").disabled = true;
        document.getElementById("removeFromCart13").style.visibility = "visible";
        document.getElementById("quantity13").disabled = true;
      }
}
function add_product14() {
    var product14,
      numberOfItems14 = document.getElementById("quantity14").value;
      if(numberOfItems14 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems14) || (numberOfItems14 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("D'ADDARIO ACOUSTIC GUITAR STRINGS");
        numberOfItems.push(numberOfItems14);
        var totalPrice14 = prices[13]*numberOfItems14;
        bill.push(totalPrice14);
        document.getElementById("addToCart14").innerHTML = "Added to Cart";
        document.getElementById("addToCart14").disabled = true;
        document.getElementById("removeFromCart14").style.visibility = "visible";
        document.getElementById("quantity14").disabled = true;
      }
}
function add_product15() {
    var product15,
      numberOfItems15 = document.getElementById("quantity15").value;
      if(numberOfItems15 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems15) || (numberOfItems15 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("FENDER CALIFORNIA CABLE");
        numberOfItems.push(numberOfItems15);
        var totalPrice15 = prices[14]*numberOfItems15;
        bill.push(totalPrice15);
        document.getElementById("addToCart15").innerHTML = "Added to Cart";
        document.getElementById("addToCart15").disabled = true;
        document.getElementById("removeFromCart15").style.visibility = "visible";
        document.getElementById("quantity15").disabled = true;
      }
}
function add_product16() {
    var product16,
      numberOfItems16 = document.getElementById("quantity16").value;
      if(!numbersOnly.test(numberOfItems16) || (numberOfItems16 == 0)) {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems16) || (numberOfItems16 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("THOMANN GUITAR CASE SINGLE CUT");
        numberOfItems.push(numberOfItems16);
        var totalPrice16 = prices[15]*numberOfItems16;
        bill.push(totalPrice16);
        document.getElementById("addToCart16").innerHTML = "Added to Cart";
        document.getElementById("addToCart16").disabled = true;
        document.getElementById("removeFromCart16").style.visibility = "visible";
        document.getElementById("quantity16").disabled = true;
      }
}
function add_product17() {
    var product17,
      numberOfItems17 = document.getElementById("quantity17").value;
      if(numberOfItems17 == "") {
        alert("You need to choose the quantity before adding the item to cart!");
      } else if(!numbersOnly.test(numberOfItems17) || (numberOfItems17 == 0)) {
        alert("Invalid input!");
      } else {
        products.push("THOMANN ACOUSTIC-STEEL GIGBAG");
        numberOfItems.push(numberOfItems17);
        var totalPrice17 = prices[16]*numberOfItems17;
        bill.push(totalPrice17);
        document.getElementById("addToCart17").innerHTML = "Added to Cart";
        document.getElementById("addToCart17").disabled = true;
        document.getElementById("removeFromCart17").style.visibility = "visible";
        document.getElementById("quantity17").disabled = true;
      }
}

//Remove products from the cart.
function remove_product1(numberOfItems1, totalPrice1) {
    document.getElementById("removeFromCart1").innerHTML = "Removed";
    document.getElementById("removeFromCart1").style.visibility = "hidden";
    products.pop("FENDER SQUIER BULLET STRATOCASTER");
    numberOfItems.pop(numberOfItems1);
    bill.pop(totalPrice1);
    document.getElementById("addToCart1").innerHTML = "Add to Cart";
    document.getElementById("addToCart1").disabled = false;
    document.getElementById("quantity1").disabled = false;
}
function remove_product2(numberOfItems2, totalPrice2) {
    document.getElementById("removeFromCart2").innerHTML = "Removed";
    document.getElementById("removeFromCart2").style.visibility = "hidden";
    products.pop("YAMAHA F310");
    numberOfItems.pop(numberOfItems2);
    bill.pop(totalPrice2);
    document.getElementById("addToCart2").innerHTML = "Add to Cart";
    document.getElementById("addToCart2").disabled = false;
    document.getElementById("quantity2").disabled = false;
}
function remove_product3(numberOfItems3, totalPrice3) {
    document.getElementById("removeFromCart3").innerHTML = "Removed";
    document.getElementById("removeFromCart3").style.visibility = "hidden";
    products.pop("BATON ROUGE V2");
    numberOfItems.pop(numberOfItems3);
    bill.pop(totalPrice3);
    document.getElementById("addToCart3").innerHTML = "Add to Cart";
    document.getElementById("addToCart3").disabled = false;
    document.getElementById("quantity3").disabled = false;
}
function remove_product4(numberOfItems4, totalPrice4) {
    document.getElementById("removeFromCart4").innerHTML = "Removed";
    document.getElementById("removeFromCart4").style.visibility = "hidden";
    products.pop("MARCUS MILLER V7 BASS");
    numberOfItems.pop(numberOfItems4);
    bill.pop(totalPrice4);
    document.getElementById("addToCart4").innerHTML = "Add to Cart";
    document.getElementById("addToCart4").disabled = false;
    document.getElementById("quantity4").disabled = false;
}
function remove_product5(numberOfItems5, totalPrice5) {
    document.getElementById("removeFromCart5").innerHTML = "Removed";
    document.getElementById("removeFromCart5").style.visibility = "hidden";
    products.pop("YAMAHA PSR-E463");
    numberOfItems.pop(numberOfItems5);
    bill.pop(totalPrice5);
    document.getElementById("addToCart5").innerHTML = "Add to Cart";
    document.getElementById("addToCart5").disabled = false;
    document.getElementById("quantity5").disabled = false;
}
function remove_product6(numberOfItems6, totalPrice6) {
    document.getElementById("removeFromCart6").innerHTML = "Removed";
    document.getElementById("removeFromCart6").style.visibility = "hidden";
    products.pop("YAMAHA YDP-143 B ARIUS");
    numberOfItems.pop(numberOfItems6);
    bill.pop(totalPrice6);
    document.getElementById("addToCart6").innerHTML = "Add to Cart";
    document.getElementById("addToCart6").disabled = false;
    document.getElementById("quantity6").disabled = false;
}
function remove_product7(numberOfItems7, totalPrice7) {
    document.getElementById("removeFromCart7").innerHTML = "Removed";
    document.getElementById("removeFromCart7").style.visibility = "hidden";
    products.pop("ROLAND TD-17KVX E-DRUM SET");
    numberOfItems.pop(numberOfItems7);
    bill.pop(totalPrice7);
    document.getElementById("addToCart7").innerHTML = "Add to Cart";
    document.getElementById("addToCart7").disabled = false;
    document.getElementById("quantity7").disabled = false;
}
function remove_product8(numberOfItems8, totalPrice8) {
    document.getElementById("removeFromCart8").innerHTML = "Removed";
    document.getElementById("removeFromCart8").style.visibility = "hidden";
    products.pop("LP LPH601-SMC BONGOS");
    numberOfItems.pop(numberOfItems8);
    bill.pop(totalPrice8);
    document.getElementById("addToCart8").innerHTML = "Add to Cart";
    document.getElementById("addToCart8").disabled = false;
    document.getElementById("quantity8").disabled = false;
}
function remove_product9(numberOfItems9, totalPrice9) {
    document.getElementById("removeFromCart9").innerHTML = "Removed";
    document.getElementById("removeFromCart9").style.visibility = "hidden";
    products.pop("SCHLAGWERK CP4007 CAJON");
    numberOfItems.pop(numberOfItems9);
    bill.pop(totalPrice9);
    document.getElementById("addToCart9").innerHTML = "Add to Cart";
    document.getElementById("addToCart9").disabled = false;
    document.getElementById("quantity9").disabled = false;
}
function remove_product10(numberOfItems10, totalPrice10) {
    document.getElementById("removeFromCart10").innerHTML = "Removed";
    document.getElementById("removeFromCart10").style.visibility = "hidden";
    products.pop("FENDER FRONTMAN 10G");
    numberOfItems.pop(numberOfItems10);
    bill.pop(totalPrice10);
    document.getElementById("addToCart10").innerHTML = "Add to Cart";
    document.getElementById("addToCart10").disabled = false;
    document.getElementById("quantity10").disabled = false;
}
function remove_product11(numberOfItems11, totalPrice11) {
    document.getElementById("removeFromCart11").innerHTML = "Removed";
    document.getElementById("removeFromCart11").style.visibility = "hidden";
    products.pop("ROLAND MOBILE CUBE B-STOCK");
    numberOfItems.pop(numberOfItems11);
    bill.pop(totalPrice11);
    document.getElementById("addToCart11").innerHTML = "Add to Cart";
    document.getElementById("addToCart11").disabled = false;
    document.getElementById("quantity11").disabled = false;
}
function remove_product12(numberOfItems12, totalPrice12) {
    document.getElementById("removeFromCart12").innerHTML = "Removed";
      document.getElementById("removeFromCart12").style.visibility = "hidden";
      products.pop("MARTIN PREMIUM DELRIN GUITAR PICKS");
      numberOfItems.pop(numberOfItems12);
      bill.pop(totalPrice12);
      document.getElementById("addToCart12").innerHTML = "Add to Cart";
      document.getElementById("addToCart12").disabled = false;
      document.getElementById("quantity12").disabled = false;
}
function remove_product13(numberOfItems13, totalPrice13) {
    document.getElementById("removeFromCart13").innerHTML = "Removed";
    document.getElementById("removeFromCart13").style.visibility = "hidden";
    products.pop("FENDER ELECTRIC GUITAR STRINGS");
    numberOfItems.pop(numberOfItems13);
    bill.pop(totalPrice13);
    document.getElementById("addToCart13").innerHTML = "Add to Cart";
    document.getElementById("addToCart13").disabled = false;
    document.getElementById("quantity13").disabled = false;
}
function remove_product14(numberOfItems14, totalPrice14) {
    document.getElementById("removeFromCart14").innerHTML = "Removed";
    document.getElementById("removeFromCart14").style.visibility = "hidden";
    products.pop("D'ADDARIO ACOUSTIC GUITAR STRINGS");
    numberOfItems.pop(numberOfItems14);
    bill.pop(totalPrice14);
    document.getElementById("addToCart14").innerHTML = "Add to Cart";
    document.getElementById("addToCart14").disabled = false;
    document.getElementById("quantity14").disabled = false;
}
function remove_product15(numberOfItems15, totalPrice15) {
    document.getElementById("removeFromCart15").innerHTML = "Removed";
    document.getElementById("removeFromCart15").style.visibility = "hidden";
    products.pop("FENDER CALIFORNIA CABLE");
    numberOfItems.pop(numberOfItems15);
    bill.pop(totalPrice15);
    document.getElementById("addToCart15").innerHTML = "Add to Cart";
    document.getElementById("addToCart15").disabled = false;
    document.getElementById("quantity15").disabled = false;
}
function remove_product16(numberOfItems16, totalPrice16) {
    document.getElementById("removeFromCart16").innerHTML = "Removed";
    document.getElementById("removeFromCart16").style.visibility = "hidden";
    products.pop("THOMANN GUITAR CASE SINGLE CUT");
    numberOfItems.pop(numberOfItems16);
    bill.pop(totalPrice16);
    document.getElementById("addToCart16").innerHTML = "Add to Cart";
    document.getElementById("addToCart16").disabled = false;
    document.getElementById("quantity16").disabled = false;
}
function remove_product17(numberOfItems17, totalPrice17) {
    document.getElementById("removeFromCart17").innerHTML = "Removed";
    document.getElementById("removeFromCart17").style.visibility = "hidden";
    products.pop("THOMANN ACOUSTIC-STEEL GIGBAG");
    numberOfItems.pop(numberOfItems17);
    bill.pop(totalPrice17);
    document.getElementById("addToCart17").innerHTML = "Add to Cart";
    document.getElementById("addToCart17").disabled = false;
    document.getElementById("quantity17").disabled = false;
}

//Function that calculates the final cost of the products that were added to the cart.
function calculateBill() {
  var i;
  for(i = 0; i < bill.length; i++) {
      totalBill += bill[i];
  }
}
//The summer of the user's order containing the final cost and the purchased products.
function summary() {
  var name = document.getElementById("name_personaldetails").value;
  calculateBill();
  if((products.length > 0) && (numberOfItems.length > 0)) {
    var summary = "Hey there, " + name + "! Thank you for purchasing from our store!\n" + "This is your order summary:\n" + "\n";
    for(var i = 0; i < products.length; i++) {
      summary += numberOfItems[i] + "x " + products[i] + "\n";
    }
  }
  alert(summary + "\n" + "TOTAL: " + "£" + totalBill + "\n" + "\nHope you're having a rockin' day!");
}
