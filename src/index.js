import foods from "./foods";
import { remove, choice } from "./helpers";

const randomFruit = choice(foods());

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

const remaining = remove(foods(), randomFruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
