import { LinkedList } from "./classes";

const linkedList = new LinkedList<number>();

Array.from(Array(5)).forEach((_, index) => linkedList.push(index + 1));

console.log("Quantidade:", linkedList.length);
console.log("Elemento removido: ", linkedList.removeAt(1));
console.log("Quantidade:", linkedList.length);
