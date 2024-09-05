//writing  testcases
/* test("", ()=>{}) 
    -->takes 2 arg. 
    1. gives descroption of the test
    2. callback func, where we write the test logic
*/

import { sum } from '../sum'
test("Sum func should calculate the sum of 2 numbers", ()=>{

   const result = sum(5,7)

   //Assertion
   expect(result).toBe(12)

})



