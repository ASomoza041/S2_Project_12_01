"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Alex A Somoza
   Date: 2-27-19   
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
var cartHTML = "<table> \n <tr> \n <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> \n </tr>";

for (item = 0; item <= 4; item++) {
    cartHTML += "<tr> \n <td><img src='tc_" + item[i] +
        ".png' alt='item' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> \n <td> $" + itemPrice[i] +
}