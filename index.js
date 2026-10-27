const emoji=['😀', '😂', '😍', '🥰', '😎']
console.log(emoji.join(' '));

const sent='Hello, how are you?';
const words=sent.split(' ');
console.log(words.join('  '));
const obj={
    name:'John',
    age:30,
    city:'New York'
}
console.log(Object.values(obj).join('\n'));