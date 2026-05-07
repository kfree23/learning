// const set = new Set([1, 2, 3]);

// set.add(4)
// console.log(set.has(4))
// set.delete(3)
// console.log(set.size)
// set.clear()

// for (const item of set) {
//     console.log(item)
// }

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

//Queue
class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }
}

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())




//Circular queue

class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let str = ''
            for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[this.rear]
            console.log(str)
        }
    }
}

const queue = new CircularQueue(5)
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
queue.print()
queue.enqueue(60)
queue.print()



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }


    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if(this.isEmpty()) {
            return null
        }
        if(this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        }  else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if(this.isEmpty()) {
            return -1
        }

        let i = 0;
        let current = this.head
        while(current) {
            if(current.value === value) {
                return i
            }
            current = current.next
            i++    
        }
        return -1
    }

    print() {
        if(this.isEmpty()) {
            console.log('The list is empty')
        } else {
            let current = this.head
            let listValues = ''
            while(current) {
                listValues += `${current.value} -> `
                current = current.next
            }
            console.log(listValues)
        }
    }

}


const list = new LinkedList()
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.print()

list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 0)
list.print()

list.insert(40, 2)
list.print()
console.log(list.getSize())

console.log(list.search(50))
