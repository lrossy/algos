/*
    Recursive binary search function
    Base case: 1 item in list,
 */

module.exports = function(){
    var self = this;

    self.binary_search = function(list, low, high, answer){
        console.log('low: ' + low);
        console.log('high: ' + high);
        console.log('answer: ' + answer);

        if(high < low){
            return null;
        }
        else{
            var mid = Math.floor((low + high)/2);
            console.log('mid: ' + mid);
            console.log('guess: ' + list[mid]);
            console.log('-------------------');

            if(list[mid] == answer) {
                return mid;
            }
            else if(list[mid] < answer){
                return this.binary_search(list, mid+1, high, answer)
            }
            else if(list[mid] > answer){
                return this.binary_search(list, low, mid-1, answer)
            }
        }
    };
};