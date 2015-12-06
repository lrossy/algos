/*

    QuickSort

   runs in O(n log n) time
 */

var _ = require('lodash');

module.exports = function(){

    var self = this;

    self.qs = function(unsortedList){
        if(unsortedList.length <= 1){
            return unsortedList;
        }
        var pivot = unsortedList[randomIntFromInterval(0,unsortedList.length-1)];
        console.log('pivot: ' + pivot);

        var lower = _.filter(unsortedList, function(n) {
            if(n < pivot){
                return true;
            }
        });
        var greater = _.filter(unsortedList, function(n) {
            if(n > pivot){
                return true;
            }
        });
        console.log('lower: ' + lower);
        console.log('greater: ' + greater);

        var res = [];

        return res.concat(self.qs(lower)).concat(pivot).concat(self.qs(greater));

    };
    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
};