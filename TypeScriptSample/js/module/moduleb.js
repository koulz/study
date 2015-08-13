/// <reference path="modulea.ts"/>
/// <reference path="../typings/linq/linq.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>
var modB;
(function (modB) {
    var clsA = modA.clsA;
    function run() {
        var obj = new clsA(5);
        var times;
        times = obj.times(2);
        alert(String(times));
    }
    modB.run = run;
    var Counter = (function () {
        function Counter() {
        }
        Counter.count = function () {
            Enumerable.Range(1, 30).Select(function (x) { return x.toString(); }).Where(function (x) { return x.indexOf("3") !== -1; }).ForEach(function (x) { return $('#result').html($('#result').html() + "&nbsp;" + x); });
        };
        return Counter;
    })();
    modB.Counter = Counter;
})(modB || (modB = {}));
