///<reference path="typings/jquery/jquery.d.ts"/>
/**
 * Created by kou on 15/07/25.
 */
class Greeter{
    firstName:string;
    lastName :string;
    constructor(first:string, lastName:string){
        this.firstName=first;
        this.lastName=lastName;
    }

    getGreet(greetWord:string):string{
        return greetWord+", "+this.firstName+" "+this.lastName+"!";
    }

    showName(id:string):void{
        $("#"+id).val(this.firstName+" "+this.lastName);
    }
}

enum DiscFlag{
    None = 0,
    Drive = 1,
    Influence = 2,
    Steadindess = 4,
    Conscientiousness = 8
}

var personality= DiscFlag.Drive|DiscFlag.Conscientiousness;

var hasD = (personality & DiscFlag.Drive) ==DiscFlag.Drive;
var hsdI = (personality & DiscFlag.Influence) == DiscFlag.Influence;


