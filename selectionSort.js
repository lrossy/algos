/*

    SequentialSort: iterate over an unsorted array and sorts it

    Runs in O(n^2) time

 */

module.exports = function(list){
    var self = this;

    function findLowestValue(arr){
        var lowest = arr[0];
        var lowestIndex = 0;

        for(var i = 1; i < arr.length; i++){
            if(arr[i] < lowest){
                lowest = arr[i];
                lowestIndex = i;
            }
        }
        return lowestIndex;
    };

    self.sort = function(){
        var sortedArray = [];
        while(list.length > 1){
            var lowest = findLowestValue(list);

            sortedArray.push(list[lowest]);
            list.splice(lowest, 1);

        }
        return sortedArray;
    };
};