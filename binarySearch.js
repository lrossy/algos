/*

Binary Search (sorted array)
 - Find mid point of array
 - if = return
 - if < check new mid and set high = mid -1
 - if > check new mid and set low = mid + 1

    Runs in O(log n) time
 */

module.exports = function (arr, answer){

    var c = 0
    var low = 0;
    var high = arr.length - 1;

    while(low <= high){

        var mid = Math.floor((high+low)/2);
        var guess = arr[mid];

        console.log('c: ' + c++);
        console.log('low: ' + low);
        console.log('high: ' + high);
        console.log('mid: ' + mid);
        console.log('guess: ' + guess);
        console.log('answer: ' + answer);

        console.log('---------------');

        if(answer == guess){
            return mid;
        }
        if(answer > guess){
            low = mid +1;
        }
        if(answer < guess){
            high = mid -1;
        }


    }
    return null;

};

