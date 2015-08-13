///<reference path="typings/jquery/jquery.d.ts"/>
/**
 * Created by kou on 15/07/25.
 */
var Greeter = (function () {
    function Greeter(first, lastName) {
        this.firstName = first;
        this.lastName = lastName;
    }
    Greeter.prototype.getGreet = function (greetWord) {
        return greetWord + ", " + this.firstName + " " + this.lastName + "!";
    };
    Greeter.prototype.showName = function (id) {
        $("#" + id).val(this.firstName + " " + this.lastName);
    };
    return Greeter;
})();
var DiscFlag;
(function (DiscFlag) {
    DiscFlag[DiscFlag["None"] = 0] = "None";
    DiscFlag[DiscFlag["Drive"] = 1] = "Drive";
    DiscFlag[DiscFlag["Influence"] = 2] = "Influence";
    DiscFlag[DiscFlag["Steadindess"] = 4] = "Steadindess";
    DiscFlag[DiscFlag["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlag || (DiscFlag = {}));
var personality = 1 /* Drive */ | 8 /* Conscientiousness */;
var hasD = (personality & 1 /* Drive */) == 1 /* Drive */;
var hsdI = (personality & 2 /* Influence */) == 2 /* Influence */;
