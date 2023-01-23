// task 1
let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '----------\n';
output += 'a + b = ' + (a + b) + "\n";
output += 'a - b = ' + (a - b) + "\n";
output += 'a * b = ' + (a * b) + "\n";
output += 'a / b = ' + (a / b) + "\n";
output += 'a % b = ' + (a % b) + "\n";
output += '(a += b): ' + ((a += b)) + "\n";
output += '(a -= b): ' + ((a -= b)) + "\n";
output += '(a *= b): ' + ((a *= b)) + "\n";
output += '(a /= b): ' + ((a /= b)) + "\n";
output += '(a %= b): ' + ((a %= b)) + "\n";
output += '(a == b): ' + ((a == b)) + "\n";
output += '(a != b): ' + ((a != b)) + "\n";
output += '(a > b): ' + ((a > b)) + "\n";
output += '(a < b): ' + ((a < b)) + "\n";
output += '(!a && !c): ' + ((!a && !c)) + "\n";
output += '(!a || !c): ' + ((!a || !c)) + "\n";

alert(output);

// task 2
let first_name = 'Mary Joyce';
let last_name = 'Albores';
let email = 'albo0026@algonquinlive.com';

let output2 = 'My name is ';
output2 += first_name;
output2 += ' ';
output2 += last_name;
output2 += '.';
output2 += ' You can contact me at ';
output2 += email;

alert(output2);
