class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Resolução 1:
 */

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const string1 = convertToString(l1).split('').reverse().join('');
  const string2 = convertToString(l2).split('').reverse().join('');

  const sum = Number(string1) + Number(string2);
  const resultReversed = String(sum).split('').reverse().join('');

  return buildListNode(resultReversed);
}

function convertToString(listNode: ListNode): string {
  let resultString = '';

  while (listNode) {
    resultString += listNode.val;
    listNode = listNode.next;
  }

  return resultString;
}

function buildListNode(val: string) {
  const newVal = val.substring(1);
  return { val: val[0], next: newVal ? buildListNode(newVal) : null };
}

/**
 * Resolução 02 (Em JavaScript)
 */

// let addTwoNumbers = function(l1, l2) {
//   let valueL1 = BigInt(getValueFromList(l1))
//   let valueL2 = BigInt(getValueFromList(l2))
//   let result = (valueL1 + valueL2).toString().split('').reverse()

//   let headNode = new ListNode(result[0], null)
//   let currentNode = headNode

//   for(let i = 1; i < result.length; i++) {
//     currentNode.next = new ListNode(result[i], null)
//     currentNode = currentNode.next
//   }

//   return headNode
// }

// function getValueFromList(list) {
//   if(list.next) {
//     return getValueFromList(list.next) + list.val.toString()
//   }
//   return list.val.toString()
// }

/**
 * Rascunho:
 */

const l1 = [2, 4, 3]; // 3,4,2
const l2 = [5, 6, 4];
const expect = [7, 0, 8];

const listNode1 = {
  val: 2,
  next: { val: 4, next: { val: 3, next: null } }
};

const listNode2 = {
  val: 5,
  next: { val: 6, next: { val: 4, next: null } }
};

const expectedListNode = {
  val: 7,
  next: { val: 0, next: { val: 8, next: null } }
};

// [2, 4, 3] -> 243
// [5, 6, 4] -> 564
// 243 -> 342
// 564 -> 465
// 342 + 465 = 807
// 807 -> 708
// 708 ->[7, 0, 8]
