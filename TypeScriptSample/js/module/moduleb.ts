/// <reference path="modulea.ts"/>
/// <reference path="../typings/linq/linq.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>
module modB {
    import clsA = modA.clsA;

    export function run():void {
        var obj:clsA = new clsA(5);
        var times:number;
        times = obj.times(2);
        alert(String(times));
    }


    export class Counter {

        static count() {
            Enumerable.Range(1, 30)
                .Select(x =>  x.toString())
                .Where(x => x.indexOf("3") !== -1)
                .ForEach(x => $('#result').html($('#result').html() + "&nbsp;" + x));
        }
    }
}