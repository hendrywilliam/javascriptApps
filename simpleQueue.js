/*
[] -> [][][][] -> []
enqueue, dequeue.
*/

class Person {
    constructor(name, item) {
        this.name = name;
        this.item = item;
    }
}

class Queue {
    constructor() {
        this.firstQueue = null;
        this.lastQueue = null;
        this.sizeOfQueue = 0;     
    }

    enqueue(name, item) {
        const newPerson = new Person(name, item)
        if (!this.firstQueue) {
            this.firstQueue = newPerson;
            this.lastQueue = newPerson;

        } else {
            this.lastQueue.next = newPerson;
            this.lastQueue = newPerson;
        }
        return this.sizeOfQueue ++
    }

    dequeue() {
        if (!this.firstQueue) return null;
        if (this.firstQueue === this.lastQueue) this.lastQueue = null;
        this.firstQueue = this.firstQueue.next;
        this.sizeOfQueue--
        return this.sizeOfQueue;
    }

}

const startQueue = new Queue;
const addNewQueue = (name, item) => {
    try {
        startQueue.enqueue(name, item);
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log(startQueue);
    };
}

const removeQueue = () => {
    try {
        startQueue.dequeue();
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log(startQueue);
    }
}

addNewQueue('Mamank', 'Coca-cola');
addNewQueue('Kimberly', 'Revolver');
