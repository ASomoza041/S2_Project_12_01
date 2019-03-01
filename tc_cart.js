"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Alex A Somoza
   Date: 2-27-19   
   
   Filename: tc_cart.js
	
*/
// The code below are global variable that can be used by another program in the code. The "orderTotal" variable sets up the beggining total for the order, and the "cartHTML" variable is the beggining of the code to create the table.
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>  </tr>";
//The code below is creating a table that inputs all the variable given to it. The for loop runs through each array item, filling it in to each data cell.
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr>  <td><img src='tc_" + item[i] + ".png' alt='item' /></td>";

    cartHTML += "<td>" + itemDescription[i] + "</td>  <td> $" + itemPrice[i] + "</td>  <td>" + itemQty[i] + "</td>";

    var itemCost = itemPrice[i] * itemQty[i];

    cartHTML += "<td>$" + itemCost + "</td></tr>";

    orderTotal = orderTotal + itemCost;
}
// The code below closes the table and inserts the table into hte html document.
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

document.getElementById("cart").innerHTML = cartHTML;