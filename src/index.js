import foods from './foods';
import{choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here is your ${fruit}`);

let remaining = remove(foods, fruit);
console.log(`I'm sorry, we are all out. We have ${remaining.length} left.`);