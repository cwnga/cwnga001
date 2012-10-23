var text = 'abc123';
var pattern = /\d+/g;
console.log('pattern.test(text):'+pattern.test(text));
console.log('text.search(pattern):'+text.search(pattern));
console.log('text.match(pattern):'+text.match(pattern));
