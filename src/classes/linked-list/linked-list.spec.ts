import { expect } from 'chai';
import { beforeEach, describe } from 'mocha';
import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  const firstElement = 1;
  const secondElement = 2;
  const thirdElement = 3;

  describe('push', () => {
    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When "push" the first element', () => {
        beforeEach(() => {
          linkedList.push(firstElement);
        });

        it('Should add the element', () => {
          expect(linkedList.length).to.be.equal(1);
          expect(linkedList.getElementAt(0)).to.be.equal(firstElement);
        });
      });
    });

    describe('Given a linkedList with one element', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push(firstElement);

        expect(linkedList.length).to.be.equal(1);
      });

      describe('When "push" more 2 elements', () => {
        beforeEach(() => {
          linkedList.push(secondElement);
          linkedList.push(thirdElement);
        });

        it('Should add each element at last position', () => {
          expect(linkedList.length).to.be.equal(3);
          expect(linkedList.getElementAt(0)).to.be.equal(firstElement);
          expect(linkedList.getElementAt(1)).to.be.equal(secondElement);
          expect(linkedList.getElementAt(2)).to.be.equal(thirdElement);
        });
      });
    });
  });

  describe('insertAt', () => {
    let isElementInserted: boolean;

    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When try to insert a element in an index less than 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(firstElement, -1);
        });

        it('Should not add element', () => {
          expect(linkedList.length).to.be.equal(0);
          expect(isElementInserted).to.be.false;
        });
      });

      describe('When try insert a element in an index greater than 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(firstElement, 1);
        });

        it('Should not add element', () => {
          expect(isElementInserted).to.be.false;
          expect(linkedList.length).to.be.equal(0);
        });
      });

      describe('When insert an element in the index 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(firstElement, 0);
        });

        it('Should add the element', () => {
          expect(isElementInserted).to.be.true;
          expect(linkedList.length).to.be.equal(1);
        });
      });
    });

    describe('Given a linkedList with 3 elements', () => {
      const initialSizeOfList = 3;
      const elementToInsert = 999;

      beforeEach(() => {
        linkedList = new LinkedList();
        Array.from(Array(initialSizeOfList)).forEach((_, index) => linkedList.push(index + 1));
        expect(linkedList.length).to.be.equal(initialSizeOfList);
      });

      describe('When try to insert a element in an index greater than the size of list', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(elementToInsert, initialSizeOfList + 1);
        });

        it('Should not add element', () => {
          expect(isElementInserted).to.be.false;
          expect(linkedList.length).to.be.equal(initialSizeOfList);
        });
      });

      describe('When insert a element in first index', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(elementToInsert, 0);
        });

        it('Should add the element in first position', () => {
          expect(isElementInserted).to.be.true;
          expect(linkedList.length).to.be.equal(initialSizeOfList + 1);
          expect(linkedList.getElementAt(0)).to.be.equal(elementToInsert);
        });
      });

      describe('When insert a element in last position', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(elementToInsert, initialSizeOfList);
        });

        it('Should add the element in last position', () => {
          expect(isElementInserted).to.be.true;
          expect(linkedList.length).to.be.equal(initialSizeOfList + 1);
          expect(linkedList.getElementAt(initialSizeOfList)).to.be.equal(elementToInsert);
        });
      });

      describe('When insert a element in another valid index', () => {
        const indexToInsert = initialSizeOfList - 1;

        beforeEach(() => {
          isElementInserted = linkedList.insertAt(elementToInsert, indexToInsert);
        });

        it('Should add the element in the specified index', () => {
          expect(isElementInserted).to.be.true;
          expect(linkedList.length).to.be.equal(initialSizeOfList + 1);
          expect(linkedList.getElementAt(indexToInsert)).to.be.equal(elementToInsert);
        });
      });
    });
  });
});
