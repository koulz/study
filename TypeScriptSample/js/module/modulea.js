var modA;
(function (modA) {
    var clsA = (function () {
        function clsA(n) {
            this.n = n;
        }
       
        clsA.prototype.times = function (x) {
            return this.n * x;
        };
        
        clsA.prototype.double = function (x) {
            return 2 * x;
        };
        return clsA;
    })();
    modA.clsA = clsA;
})(modA || (modA = {}));
