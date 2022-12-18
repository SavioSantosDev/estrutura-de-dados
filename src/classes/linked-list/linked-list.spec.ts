import { expect } from 'chai';
import { beforeEach, describe } from 'mocha';
import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  describe('push', () => {
    const firstElement = 1;
    const secondElement = 2;
    const thirdElement = 3;

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
    const element = 1;

    let isElementInserted: boolean;

    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When try to insert a element in an index less than 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(element, -1);
        });

        it('Should not add element', () => {
          expect(linkedList.length).to.be.equal(0);
          expect(isElementInserted).to.be.false;
        });
      });

      describe('When try insert a element in an index greater than 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(element, 1);
        });

        it('Should not add element', () => {
          expect(isElementInserted).to.be.false;
          expect(linkedList.length).to.be.equal(0);
        });
      });

      describe('When insert an element in the index 0', () => {
        beforeEach(() => {
          isElementInserted = linkedList.insertAt(element, 0);
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

  describe('removeAt', () => {
    let removedElement: any;

    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When trying to remove an element at an index equal to the length of the list', () => {
        it('Should return undefined', () => {
          expect(linkedList.removeAt(-1)).to.be.undefined;
          expect(linkedList.removeAt(0)).to.be.undefined;
          expect(linkedList.removeAt(1)).to.be.undefined;
        });
      });
    });

    describe('Given a linkedList with 3 elements', () => {
      const originalElements = [1, 2, 3, 4, 5];

      beforeEach(() => {
        linkedList = new LinkedList();
        originalElements.forEach(element => linkedList.push(element));
        expect(linkedList.length).to.be.equal(originalElements.length);
      });

      describe('When try to remove an element in an index equal the size of list', () => {
        it('Should not remove any element and return undefined', () => {
          expect(linkedList.removeAt(originalElements.length)).to.be.undefined;
          expect(linkedList.length).to.be.equal(originalElements.length);
        });
      });

      describe('When remove an element in first index', () => {
        beforeEach(() => {
          removedElement = linkedList.removeAt(0);
        });

        it('Should descrease the size of list', () => {
          expect(linkedList.length).to.be.equal(originalElements.length - 1);
        });

        it('Should return the removed element', () => {
          expect(removedElement).to.be.equal(originalElements[0]);
        });
      });

      describe('When remove an element in another valid index', () => {
        const indexToRemove = 2;

        beforeEach(() => {
          removedElement = linkedList.removeAt(indexToRemove);
        });

        it('Should descrease the size of list', () => {
          expect(linkedList.length).to.be.equal(originalElements.length - 1);
        });

        it('Should return the removed element', () => {
          expect(removedElement).to.be.equal(originalElements[indexToRemove]);
        });
      });
    });
  });

  describe('indexOf', () => {
    let index: number;

    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When get "indexOf" any element', () => {
        beforeEach(() => {
          index = linkedList.indexOf(123);
        });

        it('Should return -1', () => {
          expect(index).to.be.equal(-1);
        });
      });
    });

    describe('Given a linkedList with 3 different simple elements', () => {
      const elements = [1, 2, 3];

      beforeEach(() => {
        linkedList = new LinkedList();
        elements.forEach(element => linkedList.push(element));
      });

      describe('When get the "indexOf" a non-existent element', () => {
        beforeEach(() => {
          index = linkedList.indexOf(123);
        });

        it('Should return -1', () => {
          expect(index).to.be.equal(-1);
        });
      });

      describe('When get the "indexOf" the elements', () => {
        it('Should return the index of each element ', () => {
          expect(linkedList.indexOf(elements[0])).to.be.equal(0);
          expect(linkedList.indexOf(elements[1])).to.be.equal(1);
          expect(linkedList.indexOf(elements[2])).to.be.equal(2);
        });
      });
    });

    describe('Given a linkedList with 3 equal elements', () => {
      const repeatedElement = 3;
      const elements = [1, 2, repeatedElement, repeatedElement, repeatedElement];
      const expectedIndexOfRepeatedElement = 2;

      beforeEach(() => {
        linkedList = new LinkedList();
        elements.forEach(element => linkedList.push(element));
      });

      describe('When get the "indexOf" the element', () => {
        beforeEach(() => {
          index = linkedList.indexOf(repeatedElement);
        });

        it('Should return the index of each element ', () => {
          expect(linkedList.indexOf(repeatedElement)).to.be.equal(expectedIndexOfRepeatedElement);
        });
      });
    });
  });

  describe('remove', () => {
    let isElementRemoved: boolean;

    describe('Given an empty linkedList', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      describe('When try remove any element', () => {
        beforeEach(() => {
          isElementRemoved = linkedList.remove(123);
        });

        it('Should return false', () => {
          expect(linkedList.length).to.be.equal(0);
          expect(isElementRemoved).to.be.equal(false);
        });
      });
    });

    describe('Given a linkedList with 3 different elements', () => {
      const originalElements = [1, 2, 3];

      beforeEach(() => {
        linkedList = new LinkedList();
        originalElements.forEach(element => linkedList.push(element));
      });

      describe('When remove a non-existent element', () => {
        const nonExistentElement = 4;

        beforeEach(() => {
          isElementRemoved = linkedList.remove(nonExistentElement);
          expect(linkedList.indexOf(nonExistentElement)).to.be.equal(-1);
        });

        it('Should return false', () => {
          expect(isElementRemoved).to.be.equal(false);
        });

        it('Should not remove the element', () => {
          expect(linkedList.length).to.be.equal(originalElements.length);
        });
      });

      describe('When remove an existent element', () => {
        const existentElement = 3;

        beforeEach(() => {
          isElementRemoved = linkedList.remove(existentElement);
        });

        it('Should return true', () => {
          expect(isElementRemoved).to.be.equal(true);
        });

        it('Should remove the element', () => {
          expect(linkedList.length).to.be.equal(originalElements.length - 1);
          expect(linkedList.indexOf(existentElement)).to.be.equal(-1);
        });
      });
    });
  });

  describe('toString', () => {
    describe('Given an empty linkedList, when call the method "toString"', () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        expect(linkedList.length).to.be.equal(0);
      });

      it('Should return an empty string', () => {
        expect(linkedList.toString()).to.be.equal('');
      });
    });

    describe('Given a linkedList with 3 elements, when call the method "toString"', () => {
      const elements = [1, 2, 3, 4, 5];

      beforeEach(() => {
        linkedList = new LinkedList();
        elements.forEach(element => linkedList.push(element));
      });

      it('Should return all elements separated by ","', () => {
        expect(linkedList.toString()).to.be.equal('1,2,3,4,5');
      });
    });
  });
});
