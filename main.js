function addUpTo(n) {
    let total = 0;
    for (let i=1; i<=n; i++){
        total += i;
    }
    return total;
}

function addUpTo2(n) {
    return n * (n + 1) / 2;
}


//Write a function that takes two numbers and returns their sum.

//Write a function which takes in a string and returns counts of each character in the string.


// take time to understand the problem, can I restate the problem in my own words?
// (to make sure I understand what the question is)
// what are the inputs that go into the problem?
// what are the outputs that should come from the solution to the problem?
// Can the outputs be determined from the inputs? In other words, do I have enough
// information to solve the problem? (You may not be able to answer this question until
// you set about solving the problem. That's okay; it's still worth considering
// the question at this early stage.)
// how should I label the important pieces of data that are a part of the problem?



function twoNumberSum(array, targetSum) {
    let nums = {}
    for (let i=0; i<array.length; i++){
      let potentialMatch = targetSum - array[i];
      if (potentialMatch in nums){
        return [potentialMatch, array[i]];
      } else {
        nums[array[i]] = true;
      }
    }
    return [];
}





//reverse a string: Write a function that takes a string as input and returns the string reversed. For example, given the string "hello", your function should return "olleh".

function reverseString(str){
    return str.split("").reverse().join("");
}

//FizzBuzz: Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function printNum(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//Factorial: Write a function that calculates the factorial of a number. The factorial of a number n is the product of all positive integers less than or equal to n.

function factorial(num){
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

//Palindrome: Write a function that checks whether a word or phrase is a palindrome. A palindrome reads the same backwards as forwards.

function isPalindrome(word){
    let reversed = word.split("").reverse().join("");
    if (reversed === word) {
        return `${word} is a palindrome!`;
    } else {
        return `${word} isn't a palindrome!`;
    }
}

//Find the Missing Number: You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing. Write a function to find this missing number.

//Fibonacci Sequence: Write a function that generates the Fibonacci sequence of a given length. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. Usually starting with 0 and 1.

//Binary Search: Implement a function that performs a binary search on a sorted array. The function should return the index of the target element if found, otherwise, it should return -1.

//Flatten Array: Write a function that takes a nested array and flattens it into a single array. For instance, given the array [1, [2, [3, 4], 5]], your function should return [1, 2, 3, 4, 5].

//Implement a Queue using two Stacks: A queue is a data structure that supports adding elements to the end (enqueue) and removing from the front (dequeue). Implement a queue using two stacks.

//Find Shortest Path in a Graph: Given a graph, a start node, and an end node, write a function that finds the shortest path from the start to the end using Breadth-First Search.