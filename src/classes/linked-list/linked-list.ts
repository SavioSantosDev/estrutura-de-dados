import { List } from '../../models';
import { Node } from './node';

export class LinkedList<T> implements List<T> {
  private countOfNodes = 0;
  private head?: Node<T>;

  get length(): number {
    return this.countOfNodes;
  }

  push(element: T): void {
    const node = new Node(element);
    this.head ? this.insertNodeAtLastPosition(node) : (this.head = node);
    this.countOfNodes++;
  }

  private insertNodeAtLastPosition(node: Node<T>): void {
    const lastNode = this.getNodeAt(this.length - 1)!;
    lastNode.next = node;
  }

  private getNodeAt(index: number): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    let node = this.head;
    for (let i = 0; i < index && !!node; i++) {
      node = node.next;
    }

    return node;
  }

  getElementAt(index: number): T | undefined {
    return this.getNodeAt(index)?.element;
  }

  insertAt(element: T, index: number): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    const node = new Node(element);
    index === 0 ? this.insertNodeAtFirstPosition(node) : this.insertNodeAt(node, index);

    this.countOfNodes++;
    return true;
  }

  private insertNodeAtFirstPosition(node: Node<T>): void {
    node.next = this.head;
    this.head = node;
  }

  private insertNodeAt(node: Node<T>, index: number): void {
    const previousNode = this.getNodeAt(index - 1)!;

    const currentNode = previousNode.next!;

    previousNode.next = node;
    node.next = currentNode;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    return index === 0 ? this.removeFirstNode() : this.removeNodeAt(index);
  }

  private removeFirstNode(): T {
    const firstNode = this.head!;
    this.head = firstNode.next;
    this.countOfNodes--;
    return firstNode.element;
  }

  private removeNodeAt(index: number): T {
    const previousNode = this.getNodeAt(index - 1)!;
    const currentNode = previousNode.next!;

    previousNode.next = currentNode.next;
    this.countOfNodes--;

    return currentNode.element;
  }

  indexOf(element: T): number {
    let currentNode = this.head;

    for (let currentIndex = 0; currentIndex < this.length && !!currentNode; currentIndex++) {
      if (element === currentNode.element) {
        return currentIndex;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }
}
