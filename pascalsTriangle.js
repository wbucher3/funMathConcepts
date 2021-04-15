/*

This function takes in a number, n, and
returns that row within pascal's triangle.

this is the first 5 rows of pascal's triangle

       1
     1   1
    1  2  1
  1  3   3  1
1  4   6   4  1  

each line, n, has n + 1 numbers in it. so row 56 has 57 numbers in it 
*/


//binomial expansion way of solving pascal's triangle
//im pretty sure this runs in O(n^2) time to find one line...
//i watched a Veritasium video where he used pascal's triangle and i wanted to code it
//https://www.youtube.com/watch?v=gMlf1ELvRzc
function pascalBinomial(n) {
  let line = [];

  //loop for each num in the line
  //we know there will be n+1 numbers in each line
  for (let num = 0 ; num < n+1 ; num++){

    let k = num // k is the number of values in the line
    

    // this finds when we are in the middle
    // counts up until we are in the middle then counts down
    // for example, when n = 6, the k values will go 0, 1, 2, 2, 1, 0
    if (k > n - k) {
        k = n - k;
    }

    let current = 1;
    //this is our "base case"


    // if k = 0, we are on the outside and the value is 1 so no loop needed
    //loop until we are at the desired number in the row we are looking for
    for (let i = 0; i < k ; i++) {
      /*MATH TIME
       okay this is the binomial expansion
       we are grabbing the coefficient from the formula (x + y)^n
       for example, n = 3 would be 1x^3 + 3x^2y + 3xy^2 + 1y^3
       then taking the coefficients would give us 1 3 3 1 which is the row for pascal's

       the first one is easy, it is just one and we dont even use the formula for it
       for the second number, lets walkthrough the loop where k = 1
       i= 0 and current = 1, it  would be current = (1 * (3 - 0)) / (0 + 1) which is 3

      */
      current = (current * (n - i)) / (i + 1);

    }
    //after we have found our number, append it to the line array 
    line.push(current); 

  }
  //returns the full line
  return line;

}

//driver
//prints out the first 6 rows to the console
for (let i = 0 ; i < 6 ; i++) console.log(pascalBinomial(i)); 