export interface List<T> {
  length: number;
  push: (element: T) => void;
  insertAt(element: T, index: number): boolean;
  removeAt(index: number): T | undefined;
  getElementAt(index: number): T | undefined;
}
