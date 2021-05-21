var num1 = prompt("enter first number:");

var num2 = prompt("enter second  number:");


num1= parseInt(num1,10);

num2= parseInt(num2,10);

var sum = num1 + num2;


var sub= num1 - num2;

var mal = num1 *num2;
var div = num1/num2;

var rem = num1 % num2;

document.write(   num1 +  "+"  +  num2  +   " = "   +   sum + "<br/>"   );

document.write(   num1 +  "- "  +  num2   +   " = "   +   sub + "<br/>"   );

document.write(   num1 +  "*"  +  num2  +   " = "   +   mal + "<br/>"   );

document.write(   num1 +  "/"  + num2  +   " = "   +   div + "<br/>"   );


document.write(   num1 +  "%"  + num2  +   " = "   +   rem + "<br/>"   );


