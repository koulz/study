var Listing1_59;
(function (Listing1_59) {
    function reverse(list) {
        var reversedList = [];
        for (var i = (list.length - 1); i >= 0; i--) {
            reversedList.push(list[i]);
        }
        return reversedList;
    }
    var letters = ['a', 'b', 'c', 'd'];
    var reversedLetters = reverse(letters); // d, c, b, a
    var numbers = [1, 2, 3, 4];
    var reversedNumbers = reverse(numbers); // 4, 3, 2, 1
})(Listing1_59 || (Listing1_59 = {}));
