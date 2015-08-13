///<reference path="1.50.ts"/>
module Docking {
    import Ship = Shipping.Ship;

    export class Dock {
        private dockedShips: Ship[] = [];

        arrival(ship: Ship) {
            this.dockedShips.push(ship);
        }
    }
}

var dock = new Docking.Dock();
 