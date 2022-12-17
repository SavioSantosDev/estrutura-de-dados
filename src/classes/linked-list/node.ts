export class Node<T> {
  next?: Node<T> = undefined;

  constructor(readonly element: T) {}
}
