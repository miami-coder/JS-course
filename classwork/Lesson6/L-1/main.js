let str = 'hello world !!!';
console.log(str);
// заміна конкатенації
let s = str.concat('!!!')
console.log(s);
// верхній регістр
console.log(str.toUpperCase());
// нижній регістр
console.log(str.toLowerCase());
// з чого починається стрінга тру фолс
console.log(str.startsWith('hel'));
// як кінчається стрінга тру фолс
console.log(str.endsWith('ld'));
// стартова і ендова позиція яка обрізає странгу
console.log(str.substring(0, 7));
// під яким індексом літера в стрінзі перше входження
console.log(str.indexOf('o'));
// працює зворотньо від індекс оф (з кінця)
console.log(str.lastIndexOf('o'));
// щоб розпочати з певних етапів (після певного індексу)
console.log(str.indexOf('o', 5));
// повертає за певним індексом літеру
console.log(str.charAt(8));
// певний символ замінити на інший символ (тільки перше входження)
console.log(str.replace('o', '!'));
// певний символ замінити на інший символ (всі входження)
console.log(str.replaceAll('o', '!'));
// по певному символу розділяє на частини поверне масив ['hello', 'world']
let split = str.split(' ');
console.log(split);