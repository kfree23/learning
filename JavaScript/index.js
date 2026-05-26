// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.prepend(value)
//             return
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//             return
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//         this.size++
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }
//         let removedNode
//         if (index === 0) {
//             removedNode = this.head
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//         return removedNode.value
//     }

//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if (prev.next) {
//                 const removedNode = prev.next
//                 prev.next = removedNode.next
//                 this.size--
//                 return value
//             }
//         }
//         return null
//     }

//     search(value) {
//         if(this.isEmpty()) {
//             return -1
//         }
//         let i = 0;
//         let current = this.head
//         while(current) {
//             if(current.value === value) {
//                 return i
//             }
//             current = current.next
//             i++
//         }
//         return -1
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('The list is empty')
//         } else {
//             let current = this.head
//             let listValues = ''
//             while (current) {
//                 listValues += `${current.value} -> `
//                 current = current.next
//             }
//             console.log(listValues)
//         }
//     }
// }


// function reverseLinkedList(head) {
//     let prev = null
//     let current = head
//     let next = null

//     while (current) {
//         next = current.next //save
//         current.next = prev //flip
//         prev = current //slide prev
//         current = next // slide current
//     }
//     return prev
// }

// var hasCycle = function (head) {
//     let slow = head
//     let fast = head
//     while (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//         if (slow === fast) {
//             return true
//         }
//     }
//     return false
// }

// var isPalindrome = function(head) {
//     let container = [];

//     while(head) {
//         container.push(head.value);
//         head = head.next
//     }
//     return container.join(',') === [...container].reverse().join(',');
// };


//Factory function
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     }
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();


class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
        this.crust = "original";
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());


class Team {
    #fouls;

    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.#fouls = 0;
    }

    addFoul() {
        console.log(this.#fouls++);
    }

    getFouls() {
    return this.#fouls;
}
}

const lakers = new Team("Lakers", "Los Angeles");
lakers.addFoul();
console.log(lakers.getFouls());


class Player {
    constructor (name, points) {
        this.name = name;
        this.points = points;
    }

    describe() {
        console.log(`This player is ${this.name} and averages ${this.points} PPG.`);
    }
}

const newPlayer = new Player("LeBron", 23);
newPlayer.describe();


const player = { name: 'AD', points: 22, rebounds: 12, team: 'Lakers' };

const { name, rebounds } = player;

const medals = ['USA', 'China', 'UK'];
const [ gold, silver ] = medals;