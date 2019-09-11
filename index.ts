// 1. Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 2. Write a function that returns the elements on odd positions in an array.
// 3. Write a function that tests whether a string is a palindrome.

let arr1: Array<string> = ["a", "b", "c"];
let arr2: Array<number> = [1, 2, 3, 4, 5, 6];

let blend = (a1: string[], a2: number[]): Array<any> => {
  let minLength = Math.min(a1.length, a2.length);
  let arr3: Array<any> = [];

  for (let i = 0; i < minLength; i++) {
    arr3.push(a1[i], a2[i]);
  }
  arr3.push(...a1.slice(minLength), ...a2.slice(minLength));
  return arr3;
};
console.log(blend(arr1, arr2));



let odds = (arr: Array<any>) => {
  let retArr: any[] = [];

  for(let i = 0; i < arr.length; i++) {
    if (i === 0 ) {
      retArr.push(arr[i]);
    }
    else if (i % 2 != 0) {
      retArr.push(arr[i]);
    }
  }

  return retArr;
};
console.log(`Values of the odd indexes from in the previous array: ${odds(blend(arr1, arr2))}`);






let someString = "radar";
let isPalindrome = (someString: string) => {
  let testString: string = [...someString].reverse().join("");

  if (someString === testString) {
    return "Yup!";
  } else {
    return "Not!";
  }
};
console.log(`Is ${someString} a palindrome? ${isPalindrome(someString)}`);
someString = 'somethingelse';
console.log(`Is ${someString} a palindrome? ${isPalindrome(someString)}`);

