var binarySearch = require('./binarySearch');
var binarySearchRecursive = require('./binarySearchRecursive');
var selectionSort = require('./selectionSort');
var quickSort = require('./quickSort.js');

/*

JS Binary Search implementation

 */

/*
var arr = [1,2,4,6,8,19,26,45,67,89];
var answer = 68;

var position = binarySearch(arr, answer);

console.log(position);
*/
/*
    Recusive Binary Search
*/

/*
var arr = [1,2,4,6,8,19,26,45,67,89];
var answer = 3;
BinarySearchRecursive = new binarySearchRecursive();

var res = BinarySearchRecursive.binary_search(arr, 0, arr.length - 1, answer);

console.log(res);

*/
/*

JS Sequential Search

*/
/*

var unsortedArr = [9,21,3,19,33,109,334,1,0,198,103,10238,38,127];

var SelectionSort = new selectionSort(unsortedArr);

console.log(SelectionSort.sort());

*/

/*
    QuickSort

 */
var unsortedArr = [9,21,3,19,33,109,334,1,0,198,103,10238,38,127];
//var unsortedArr = [10, 5, 2, 3];

var QuickSort = new quickSort();

console.log(QuickSort.qs(unsortedArr));
