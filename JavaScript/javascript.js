// CHANGE TEXT ON CLICK

// var btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     btn.textContent = 'clicked';
// })

// Create button
// const button = document.createElement('button');

// Create text
// button.textContent = 'click';

// button.addEventListener('click', function() {
//     button.textContent = 'clicked';
// })

// select div
// const div = document.getElementById('btn-container');

// div.appendChild(button)


// const headingText = document.getElementById('heading-text');
// const increment = document.getElementById('increment');
// const decrement = document.getElementById('decrement');

// let counter = 0;

// headingText.textContent = counter;

// increment.addEventListener('click', function() {
//     counter = counter + 1;
//     headingText.textContent = counter;
// });

// decrement.addEventListener('click', function() {
//     counter = counter - 1;
//     headingText.textContent = counter;
// });

// Color, Width, Height box

// const changeColor = document.getElementById('change');
// const background = document.getElementById('background');
// const input = document.getElementById('input');

// changeColor.addEventListener('click', function() {
//     const text = input.value;
//     background.style.backgroundColor = text;
// });

// const widthInput = document.getElementById('width');
// const alterButton = document.getElementById('alter');

// alterButton.addEventListener('click', function() {
//     const text = widthInput.value;
//     background.style.width = text;
// });

// const heightInput = document.getElementById('height');
// const alterHeight = document.getElementById('alter-height');

// alterHeight.addEventListener('click', function() {
//     const text = heightInput.value;
//     background.style.height = text;
// });


// const openModalBtn = document.getElementById('open-modal');
// const modalContent = document.getElementById('modal');
// const closeModalBtns = document.querySelectorAll('#close-modal');

// openModalBtn.addEventListener('click', function() {
//     modalContent.style.display = 'block';
// });

// closeModalBtns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         modalContent.style.display = 'none';
//     });
// });



// console.log(closeModalBtns);

// const box = document.getElementById('box');
// const nameText = document.getElementById('input-name-text');
// const nameInput = document.getElementById('change-name');
// const colorBtn = document.getElementById('color-button');
// const colorText = document.getElementById('input-color');
// const displayName = document.getElementById('name');
// const displayColor = document.getElementById('color');


// nameInput.addEventListener('click', function() {
//     const text = nameText.value;
//     displayName.textContent = `Name: ${text}`;
// });

// colorBtn.addEventListener('click', function(){
//     const text = colorText.value;
//     displayColor.textContent = `Favorite Color: ${text}`;
//     box.style.backgroundColor = text;
// });

// async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(response, data);
// }

// getPosts();

//ATM

// let myCheckingsAccountBalance = 2000;


// function withdraw(passcode, money) {
//     // if password is correct
//     const password = 'spongebob';
//     if(passcode != password) {
//         console.log('Wrong Password');
//         return;
//     }
//if money is more than current account balance, transaction is denied
// if (money > myCheckingsAccountBalance) {
//     console.log('Transaction denied');
//    return; //stop here if over myCheckingsAccountBalance
//     }
//     myCheckingsAccountBalance = myCheckingsAccountBalance - money
//     console.log(myCheckingsAccountBalance);
// };

// withdraw('patrick', 400);

// function deposit(passcode, money) {
//     const password = 'spongebob';
//     if(passcode != password) {
//         console.log('Wrong Password');
//         return;
//     }

//     myCheckingsAccountBalance = myCheckingsAccountBalance + money;
//     console.log('Hello user! Your new account balance is', myCheckingsAccountBalance);
// };

// deposit('patrick', 1000);

// function checkBalance(passcode) {
//     const password = 'spongebob';
//     if(passcode != password) {
//         console.log('Wrong Password');
//         return;
//     }
//     console.log('Hello user! Your balance is:', myCheckingsAccountBalance);
// };

// checkBalance('spongebob');


// fetch('https://v2.jokeapi.dev/joke/Any')
//   .then(res => res.json())
//   .then(data => {
//     const joke = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
//     document.body.innerHTML = `<p>${joke}</p>`;
//   });

//EVEN OR ODD
// const input = document.getElementById('input-number-field');
// const btn = document.getElementById('input-number-button');
// const showText = document.getElementById('show-text');


// btn.addEventListener('click', function() {
//     const text = input.value;
//     if(text % 2 === 0) {
//         showText.textContent = 'Even';
//     } else {
//         showText.textContent = 'Odd';
//     }
// });


//REVERSE A STRING
// let reversedWord = 'latsyrk';

// for(let i = reversedWord.length; i >= 0; i--) {
//     console.log(reversedWord[i]);
// }


// COUNTS VOWELS IN WORDS
// function countVowels(word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     } return count;
// }

// console.log(countVowels('chicken'));

//GROCERY LIST SORTER
// const groceryList = ["chicken", "pork", "tofu", "milk", "salad", "candy", "ice cream"];


// const protein = groceryList.filter(item => 
//     item === "chicken" || item === "pork" || item === "tofu" || item === "milk"
// );
// console.log(protein); 

//Sum of array 

function addArray(arr) {
    let result = 0;

    for(i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result
}

console.log(addArray([1, 5, 3, 4, 4]));


// add sum using .reduce() (tip: accumulator)

const arr1 = [2, 3, 43, 5, 6];

const addArrayTwo = arr1.reduce((sum, num) => {
    return sum + num
})

console.log(addArrayTwo);

//Reverse an array (tip: add value to new array)

function reverseArr(arr) {
    let newArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    } return newArr
}

console.log(reverseArr([5, 4, 3, 2, 1]));

// reorder array two spots to the right 

const orderedArr = [5, 4, 3, 2, 1];

const leftArr = orderedArr.slice(0, 3);
const rightArr = orderedArr.slice(3);

console.log(...rightArr, ...leftArr);

//find the max and min number in an array

const arr = [33, 4, 47, 12, 4, 74];
console.log(Math.min(...arr));

//compute average of an array

function computeAvg(arr) {
    let result = [];
    const sumOfArray = arr.reduce((sum, num) => {
        return sum + num
    });

    return result = sumOfArray / arr.length;

}

console.log(computeAvg([5, 3, 2, 6]));


//print vowels and consonants of each word (tip: includes)
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
    ];

    for (const string of s) {
        if (vowels.includes(string)) {
            console.log(string)
        }
    }

    for (const string of s) {
        if (consonants.includes(string)) {
            console.log(string)
        }
    }
}

console.log(vowelsAndConsonants('krystal'))


//find second biggest number (tip: Set)
function getSecondLargest(nums) {

    const newArr = [...new Set(nums)];

    newArr.sort((a, b) => a - b)
    return newArr[newArr.length - 2]

}

console.log(getSecondLargest([13, 34, 25, 2, 16, 3]))

function reverseString(s) {
    const reverse = s.split("").reverse().join('');
    return reverse
}

console.log(reverseString('1234'))

function Rectangle(a, b) {

    const rectangle = {
        length: a,
        width: b,
        perimeter: (a + b) * 2,
        area: a * b
    }

    return rectangle

}

//Anagram
function isAnagram(wordOne, wordTwo) {
    if (wordOne.length !== wordTwo.length) {
        return false
    }

    let container = {};

    for (i = 0; i < wordOne.length; i++) {
        const letter = wordOne[i];
        if(!container[letter]) {
            container[letter] = 1
        } else {
            container[letter]++
        }
    }

    for (i = 0; i < wordTwo.length; i++) {
        const letter = wordTwo[i];

        if (!container[letter]) {
            return false
        }
        container[letter]--;
    }
    return true
}

console.log(isAnagram('ant', 'tan'));



//minimum time typewriter

function minTimeToType(word) {
    let totalTime = 0;
    let currentLetterCode = 'a'.charCodeAt(0);

    for (let i = 0; i < word.length; i++) {
        let targetLetterCode = word.charCodeAt(i);
        let distance = Math.abs(currentLetterCode - targetLetterCode);

        totalTime += Math.min(distance, 26 - distance);
        totalTime += 1;
        currentLetterCode = targetLetterCode;
    } 
    return totalTime
}


console.log(minTimeToType('beef'));

//rotate image (matrix)

function rotateImage(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        matrix.reverse();
    }
    return matrix
}  

console.log(rotateImage([[1,2,3], [4,5,6], [7,8,9]]));


//count binary substring

function countBinarySubstrings(s) {
    let groups = [];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            groups.push(count);
        }
    }
    groups.push(count);

    let result = 0;
    for(let i = 1; i < groups.length; i++) {
        result += Math.min(groups[i], groups[i - 1]);
    }
    return result;
}

console.log(countBinarySubstrings("001110"));

//chessboard

function chessBoardSquare(square) {
    let columnLetter = square[0];
    let rowNumber = parseInt(square[1]);

    let columnNumber = columnLetter.charCodeAt(0);

    if ((rowNumber + columnNumber) % 2 !== 0) {
        return "black"
    } else {
        return "white"
    }
}

console.log(chessBoardSquare('c6'));

//teams of equal skill (and getting the sum of all teams chemistry)

function dividePlayerToEqualTeams(skill) {
    skill.sort((a, b) => a - b);

    let total = 0;
    let n = skill.length;
    let targetTeamSkill = skill[0] + skill[n - 1];

    for (let i = 0; i < n / 2; i++){
        let leftPlayer = skill[i];
        let rightPlayer = skill[n - 1 - i];
        let team = leftPlayer + rightPlayer;

        if (team !== targetTeamSkill) {
            return -1
        }

        total = total + (leftPlayer * rightPlayer)
    }
    return total
}




console.log(dividePlayerToEqualTeams([3,2,5,1,3,4]));

//two sum

function twoSum(num, target) {
    const map = new Map;

    for (let i = 0; i < num.length; i++) {

        const missingNum = target - num[i];
        
        if(map.has(missingNum)) {
            return [map.get(missingNum), i]
        } else {
            map.set(num[i], i)
        }
    }
}

console.log(twoSum([2,7,11,15], 9));

// meeting rooms (do this in the morning)

function meetingRooms(meetingTimes) {
    if(!meetingTimes.length) {
        return 0
    }

    const startTimes = meetingTimes.map(i => i[0]).sort((a, b) => a - b);
    const endTimes = meetingTimes.map(i => i[1]).sort((a, b) => a - b);

    let rooms = 0;
    let j = 0;

    for (let i = 0; i < startTimes.length; i++) {
        if (startTimes[i] >= endTimes[j]) {
            j++
        } else {
            rooms++
        }
    }

    return rooms
}

console.log(meetingRooms([[0,30],[5,10],[15,20]]));

// function countSubarraysDivisibleByK(numbers, k) {
//     const remainderCounts = new Map();
//     remainderCounts.set(0, 1); 

//     let runningSum = 0;       
//     let validSubarrays = 0;   

//     for (let i = 0; i < numbers.length; i++) {
//         runningSum += numbers[i];          

//         let remainder = runningSum % k;    

        
//         if (remainder < 0) {
//             remainder += k;
//         }

        
//         if (remainderCounts.has(remainder)) {
//             validSubarrays += remainderCounts.get(remainder); 
//             remainderCounts.set(remainder, remainderCounts.get(remainder) + 1); 
//         } else {
//             remainderCounts.set(remainder, 1); 
//         }
//     }

//     return validSubarrays;
// }


// console.log(countSubarraysDivisibleByK([4,5,0,-2,-3,1], 5))










