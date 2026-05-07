function fibonacci(n) {
    const fib = [0, 1]
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

// Big-O = O(n)

function factorial(n) {
    let result = 1;
    for (i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5));

// Big-O = O(n)

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(5));

// Big-O = O(sqrt(n))

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(10));

// Big-O = O(logn)

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

// Big-O = O(2^n)

function recursiveFactorial(n) {
    if (n <= 0) {
        return 1
    }
    return recursiveFactorial(n - 1) * n //because factorial 4 is being multiplied by n and so on until zero
}



console.log(recursiveFactorial(5))

// Big-O = O(n)

// Brute Force
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return 1
        }
    } return -1
}


// Optimized
const names = ["Krystal", "Kala", "Taylor", "Courtney", "Dine"];

function searchNames(query) {
    const filtered = names.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
    )
    return filtered
}

console.log(searchNames("kr"));

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));

// Big-O = O(n)

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }

    } return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// Big-O = O(logn)

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

// Big - O = O(logn)

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1] // swaps places
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([-9, 3, 2, 6, -4]))

// Big-O = O(n^2)

function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let insert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > insert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = insert
    } return arr
}

console.log(insertionSort([-6, 20, 8, 2, -4]))
console.log(insertionSort([-2, 45, 3, 23, -4]))

// Big-O = O(n^2)

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([-6, 20, 8, 2, -4]))

// Big-O = O(nlogn)


function merge(leftArr, rightArr) {
    let result = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift())
        } else {
            result.push(rightArr.shift())
        }
    } return [...result, ...leftArr, ...rightArr]
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const middle = Math.floor((arr.length / 2));
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([-6, 20, 8, 2, -4]))
console.log(mergeSort([-4, 26, 3, 111, -23]))

// Big-O = O(nlogn)

function cartesianProduct(arr1, arr2) {
    let result = [];

    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    } return result
}

console.log(cartesianProduct([1, 2], [3, 4, 5]))

// Big-O = O(mn)

function climbingStaircase(n) {
    const numOfWays = [1, 2]
    for (i = 2; i < n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
    }

    return numOfWays[n - 1]
}

console.log(climbingStaircase(5))
console.log(climbingStaircase(6))
console.log(climbingStaircase(7))


function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(3, 'A', 'B', 'C'))



function bigNumbersMultiplied(arr) {
    const bigNumbers = arr.filter(number => number > 10).map(number => number * 2);
    return bigNumbers;
}

bigNumbersMultiplied([2, 4, 6, 67, 45, 3, 33]);

// HASH MAPS (Frequency starter pattern)
function sockMerchant(n, ar) {
    let counts = {};
    let pairs = 0;

    for (let i = 0; i < ar.length; i++) {
        if (counts[ar[i]] === undefined) {
            counts[ar[i]] = 1
        } else {
            counts[ar[i]] += 1
        }
    }

    for (let key in counts) {
        pairs += Math.floor(counts[key] / 2)
    }

    return pairs
}

console.log(sockMerchant(5, [1, 2, 3, 1, 2]));

function checkMagazine(magazine, note) {
    let magazineCount = {};
    let noteCount = {};
    let magazineWords = magazine.split(" ");
    let noteWords = note.split(" ");

    for (let i = 0; i < magazineWords.length; i++) {
        if (magazineCount[magazineWords[i]] === undefined) {
            magazineCount[magazineWords[i]] = 1
        } else {
            magazineCount[magazineWords[i]] += 1
        }
    }

    for (let i = 0; i < noteWords.length; i++) {
        if (noteCount[noteWords[i]] === undefined) {
            noteCount[noteWords[i]] = 1
        } else {
            noteCount[noteWords[i]] += 1
        }
    }

    for (let word in noteCount) {
        if (magazineCount[word] < noteCount[word]) {
            return "no"
        }
    }
    return "yes"

}

console.log(checkMagazine("give me one grand today night", "give one grand today"));

function countingValleys(steps, path) {
    let level = 0;
    let valleyCount = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            level += 1
        } else {
            level -= 1
        }

        if (level === 0 && path[i] === "U") {
            valleyCount++
        }
    }
    return valleyCount
}

console.log(countingValleys(8, "UDDDUDUU"));

function countingValleys(steps, path) {
    let level = 0;
    let valleyCount = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            level++
        } else {
            level--
        }

        if (level === 0 && path[i] === "U") {
            valleyCount++
        }
    }
    return valleyCount
}

console.log(countingValleys(8, "UDDDUDUU"));

var isPalindrome = function (s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};

console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))


var findMaxAverage = function (nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    let maxAvg = sum / k

    for (let i = k; i < nums.length; i++) {
        sum += nums[i]
        sum -= nums[i - k]
        maxAvg = Math.max(maxAvg, sum / k)
    }
    return maxAvg
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

var containsDuplicate = function (nums) {
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1
        } else {
            count[nums[i]] += 1
        }

        if (count[nums[i]] > 1) {
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]));

var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]
        }

        if (sum > target) {
            right--
        } else {
            left++
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLength === Infinity ? 0 : minLength
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));


function sockMerchant(n, ar) {
    let count = {};
    let pairs = 0;

    for (let i = 0; i < ar.length; i++) {
        if (count[ar[i]] === undefined) {
            count[ar[i]] = 1
        } else {
            count[ar[i]] += 1
        }
    }

    for (let key in count) {
        pairs += Math.floor(count[key] / 2)
    }

    return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

function checkMagazine(magazine, note) {
    let magazineWords = magazine.split(" ");
    let noteWords = note.split(" ");
    let magazineCount = {};
    let noteCount = {};

    for (let i = 0; i < magazineWords.length; i++) {
        if (magazineCount[magazineWords[i]] === undefined) {
            magazineCount[magazineWords[i]] = 1
        } else {
            magazineCount[magazineWords[i]] += 1
        }
    }

    for (let i = 0; i < noteWords.length; i++) {
        if (noteCount[noteWords[i]] === undefined) {
            noteCount[noteWords[i]] = 1
        } else {
            noteCount[noteWords[i]] += 1
        }
    }

    for (let word in noteCount) {
        if (magazineCount[word] < noteCount[word]) {
            return "no"
        }
    }
    return "yes"
}

console.log(checkMagazine("give me one grand today night", "give one grand today"));

function countingValleys(steps, path) {
    let level = 0;
    let valleyCount = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            level++
        } else {
            level--
        }

        if (level === 0 && path[i] === "U") {
            valleyCount++
        }
    }
    return valleyCount
}

console.log(countingValleys(8, "UDDDUDUU"));

function isPalindrome(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]
        }
        
        if (sum > target) {
            right--
        } else {
            left++
        }
    }
};

function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLength === Infinity ? 0 : minLength
}

var maxProfit = function(prices) {
    let lowestPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i]
        }

        if (prices[i] - lowestPrice > maxProfit) {
            maxProfit = prices[i] - lowestPrice
        } 
    } return maxProfit
};

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]
        }
        if (sum > target) {
            right--
        } else {
            left++
        }
    }
}


var lengthOfLongestSubstring = function(s) {
    let seen = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        while (seen[s[right]] !== undefined){
            delete seen[s[left]]
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1);
        seen[s[right]] = 1
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

var isAnagram = function(s, t) {
    let sCount = {};
    let tCount = {};

    for (let i = 0; i < s.length; i++) {
        if(sCount[s[i]] === undefined) {
            sCount[s[i]] = 1
        } else {
            sCount[s[i]] += 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if(tCount[t[i]] === undefined) {
            tCount[t[i]] = 1
        } else {
            tCount[t[i]] += 1
        }
    }

    for (let letter in tCount) {
        if(tCount[letter] !== sCount[letter]) {
            return false
        }
    }
    return true
};

console.log(isAnagram("act", "cat"))